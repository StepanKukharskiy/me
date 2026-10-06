import { writable } from 'svelte/store';

export type ActivitySummary = {
	day: string;
	timeZone: string;
	visitors: number;
	pageviews: number;
	countryCount: number;
	topCountries: { code: string; visitors: number }[];
};

export const activity = writable<ActivitySummary | null>(null);
