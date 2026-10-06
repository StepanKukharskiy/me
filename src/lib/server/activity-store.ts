import { createHmac, randomBytes } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import { isIP } from 'node:net';
import { dirname } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import type { ActivitySummary } from '../activity';

export const activityTimeZone = 'Europe/Moscow';
export const trackedPaths = new Set([
	'/',
	'/projects',
	'/teaching',
	'/relay/chrome',
	'/ai-work',
	'/ai-work/excel-to-powerpoint-automation',
	'/ai-work/privacy'
]);

export function activityDay(now: Date): string {
	const parts = new Intl.DateTimeFormat('en-CA', {
		timeZone: activityTimeZone,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	}).formatToParts(now);
	const value = (type: string) => parts.find((part) => part.type === type)!.value;
	return `${value('year')}-${value('month')}-${value('day')}`;
}

export function eligibleActivity(headers: Headers): boolean {
	const agent = headers.get('user-agent') || '';
	return (
		!!agent &&
		headers.get('dnt') !== '1' &&
		headers.get('sec-gpc') !== '1' &&
		!/bot|crawler|spider|preview|headless|curl|wget|python|node|undici/i.test(agent) &&
		headers.get('purpose') !== 'prefetch' &&
		!headers.get('sec-purpose')?.includes('prefetch')
	);
}

export function normalizeAddress(address: string | null): string | null {
	if (!address) return null;
	const normalized = address.toLowerCase().replace(/^::ffff:/, '');
	return isIP(normalized) ? normalized : null;
}

/** Stores daily aggregates; IP addresses and user-agent strings never enter SQLite. */
export class ActivityStore {
	private db: DatabaseSync;

	constructor(path: string) {
		mkdirSync(dirname(path), { recursive: true });
		this.db = new DatabaseSync(path);
		this.db.exec(`
			PRAGMA journal_mode = WAL;
			PRAGMA secure_delete = ON;
			PRAGMA busy_timeout = 3000;
			CREATE TABLE IF NOT EXISTS days (
				day TEXT PRIMARY KEY, pageviews INTEGER NOT NULL DEFAULT 0,
				visitors INTEGER NOT NULL DEFAULT 0
			);
			CREATE TABLE IF NOT EXISTS countries (
				day TEXT NOT NULL, code TEXT NOT NULL, visitors INTEGER NOT NULL DEFAULT 0,
				PRIMARY KEY (day, code)
			);
			CREATE TABLE IF NOT EXISTS salts (day TEXT PRIMARY KEY, salt TEXT NOT NULL);
			CREATE TABLE IF NOT EXISTS visitor_ids (
				day TEXT NOT NULL, id TEXT NOT NULL, PRIMARY KEY (day, id)
			);
		`);
	}

	private prune(day: string) {
		// Delete identifiers and their random salt when the next day's request arrives.
		this.db.prepare('DELETE FROM visitor_ids WHERE day <> ?').run(day);
		this.db.prepare('DELETE FROM salts WHERE day <> ?').run(day);
	}

	record(address: string | null, agent: string, country: string | null, now = new Date()) {
		const day = activityDay(now);
		this.db.exec('BEGIN IMMEDIATE');
		try {
			this.prune(day);
			this.db
				.prepare(
					`INSERT INTO days (day, pageviews) VALUES (?, 1)
				ON CONFLICT(day) DO UPDATE SET pageviews = pageviews + 1`
				)
				.run(day);
			const ip = normalizeAddress(address);
			if (ip) {
				this.db
					.prepare('INSERT OR IGNORE INTO salts (day, salt) VALUES (?, ?)')
					.run(day, randomBytes(32).toString('hex'));
				const { salt } = this.db.prepare('SELECT salt FROM salts WHERE day = ?').get(day) as {
					salt: string;
				};
				const id = createHmac('sha256', salt).update(ip).update('\0').update(agent).digest('hex');
				const inserted = this.db
					.prepare('INSERT OR IGNORE INTO visitor_ids (day, id) VALUES (?, ?)')
					.run(day, id);
				if (inserted.changes) {
					this.db.prepare('UPDATE days SET visitors = visitors + 1 WHERE day = ?').run(day);
					if (country && /^[A-Z]{2}$/.test(country)) {
						this.db
							.prepare(
								`INSERT INTO countries (day, code, visitors) VALUES (?, ?, 1)
							ON CONFLICT(day, code) DO UPDATE SET visitors = visitors + 1`
							)
							.run(day, country);
					}
				}
			}
			this.db.exec('COMMIT');
		} catch (error) {
			this.db.exec('ROLLBACK');
			throw error;
		}
		return this.summary(now);
	}

	summary(now = new Date()): ActivitySummary {
		const day = activityDay(now);
		this.prune(day);
		const counts = this.db
			.prepare('SELECT pageviews, visitors FROM days WHERE day = ?')
			.get(day) as { pageviews: number; visitors: number } | undefined;
		const countries = this.db
			.prepare('SELECT code, visitors FROM countries WHERE day = ? ORDER BY visitors DESC, code')
			.all(day) as { code: string; visitors: number }[];
		return {
			day,
			timeZone: activityTimeZone,
			visitors: counts?.visitors ?? 0,
			pageviews: counts?.pageviews ?? 0,
			countryCount: countries.length,
			topCountries: countries.slice(0, 3)
		};
	}

	close() {
		this.db.close();
	}
}
