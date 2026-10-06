import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Reader, type CountryResponse } from 'maxmind';
import { ActivityStore, normalizeAddress } from './activity-store';

let store: ActivityStore | undefined;
let countries: Reader<CountryResponse & { country_code?: string }> | undefined;

export function getActivityStore(): ActivityStore {
	if (!store) {
		const directory =
			env.PERSONAL_WEBSITE_ANALYTICS_DIR ||
			(env.RAILWAY_VOLUME_MOUNT_PATH
				? join(env.RAILWAY_VOLUME_MOUNT_PATH, 'analytics')
				: undefined) ||
			(dev ? '.local-data/analytics' : undefined);
		if (!directory) throw new Error('Persistent analytics storage is not configured');
		store = new ActivityStore(join(directory, 'activity.sqlite'));
	}
	return store;
}

export function countryForAddress(address: string | null): string | null {
	const ip = normalizeAddress(address);
	if (!ip) return null;
	countries ??= new Reader(readFileSync(join(process.cwd(), 'data/geo/user-country.mmdb')));
	const result = countries.get(ip);
	return result?.country_code ?? null;
}
