import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { DatabaseSync } from 'node:sqlite';
import { ActivityStore, eligibleActivity } from './activity-store';

const today = new Date('2026-10-06T12:00:00Z');
let directory: string;
let path: string;
let store: ActivityStore;

beforeEach(() => {
	directory = mkdtempSync(join(tmpdir(), 'website-activity-test-'));
	path = join(directory, 'activity.sqlite');
	store = new ActivityStore(path);
});
afterEach(() => {
	store.close();
	rmSync(directory, { recursive: true, force: true });
});

describe('daily visitor estimates', () => {
	it('deduplicates repeat visits across pages and process restarts', () => {
		store.record('8.8.8.8', 'Browser A', 'US', today);
		store.record('::ffff:8.8.8.8', 'Browser A', 'US', today);
		store.close();
		store = new ActivityStore(path);
		const counts = store.record('1.1.1.1', 'Browser B', 'AU', today);
		expect(counts).toMatchObject({ visitors: 2, pageviews: 3, countryCount: 2 });
		expect(store.record('8.8.8.8', 'Browser A', 'US', today).visitors).toBe(2);
	});

	it('rotates identifiers at Moscow midnight while retaining daily aggregates', () => {
		const beforeMidnight = new Date('2026-10-06T20:59:59Z');
		const afterMidnight = new Date('2026-10-06T21:00:00Z');
		store.record('8.8.8.8', 'Browser A', 'US', beforeMidnight);
		const audit = new DatabaseSync(path);
		const oldId = audit.prepare('SELECT id FROM visitor_ids').get()?.id;
		const counts = store.record('8.8.8.8', 'Browser A', 'US', afterMidnight);
		expect(counts).toMatchObject({ day: '2026-10-07', visitors: 1, pageviews: 1 });
		expect(audit.prepare('SELECT day FROM visitor_ids').all()).toEqual([{ day: '2026-10-07' }]);
		expect(audit.prepare('SELECT day FROM salts').all()).toEqual([{ day: '2026-10-07' }]);
		expect(audit.prepare('SELECT id FROM visitor_ids').get()?.id).not.toBe(oldId);
		expect(audit.prepare('SELECT COUNT(*) AS count FROM days').get()?.count).toBe(2);
		audit.close();
	});

	it('keeps unknown locations and missing addresses out of country totals', () => {
		store.record('8.8.8.8', 'Browser A', null, today);
		store.record(null, 'Browser B', null, today);
		const counts = store.record('not an address', 'Browser C', 'US', today);
		expect(counts).toMatchObject({ visitors: 1, pageviews: 3, countryCount: 0, topCountries: [] });
	});

	it('stores no raw addresses or user-agent strings and returns only aggregates', () => {
		const counts = store.record('8.8.8.8', 'Private browser string', 'US', today);
		const audit = new DatabaseSync(path);
		const ids = JSON.stringify(audit.prepare('SELECT * FROM visitor_ids').all());
		expect(ids).not.toContain('8.8.8.8');
		expect(ids).not.toContain('Private browser string');
		expect(counts.topCountries).toEqual([{ code: 'US', visitors: 1 }]);
		expect(Object.keys(counts).sort()).toEqual([
			'countryCount',
			'day',
			'pageviews',
			'timeZone',
			'topCountries',
			'visitors'
		]);
		audit.close();
	});
});

describe('request exclusions', () => {
	it.each<Record<string, string>>([
		{ 'user-agent': 'Googlebot' },
		{ 'user-agent': 'Mozilla/5.0', dnt: '1' },
		{ 'user-agent': 'Mozilla/5.0', 'sec-gpc': '1' },
		{ 'user-agent': 'Mozilla/5.0', purpose: 'prefetch' },
		{ 'user-agent': 'Mozilla/5.0', 'sec-purpose': 'prefetch;prerender' }
	])('skips bots, prefetches and privacy opt-outs: %j', (headers) => {
		expect(eligibleActivity(new Headers(headers))).toBe(false);
	});
	it('accepts a normal browser', () => {
		expect(eligibleActivity(new Headers({ 'user-agent': 'Mozilla/5.0 Chrome/130' }))).toBe(true);
	});
});
