import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { countryForAddress, getActivityStore } from '$lib/server/activity';
import { eligibleActivity, trackedPaths } from '$lib/server/activity-store';
import type { RequestHandler } from './$types';

export const prerender = false;
const headers = { 'Cache-Control': 'no-store' };

function readSummary() {
	if (env.PERSONAL_WEBSITE_ANALYTICS === 'off') return new Response(null, { status: 204, headers });
	try {
		return json(getActivityStore().summary(), { headers });
	} catch {
		return new Response(null, { status: 503, headers });
	}
}

export const GET: RequestHandler = readSummary;

export const POST: RequestHandler = async ({ request, url, getClientAddress }) => {
	if (env.PERSONAL_WEBSITE_ANALYTICS === 'off') return new Response(null, { status: 204, headers });
	if (
		request.headers.get('origin') !== url.origin ||
		!request.headers.get('content-type')?.startsWith('application/json')
	) {
		return new Response(null, { status: 403, headers });
	}
	if (Number(request.headers.get('content-length') || 0) > 512) {
		return new Response(null, { status: 413, headers });
	}
	let path: unknown;
	try {
		const body = await request.json();
		path = body?.path;
	} catch {
		return new Response(null, { status: 400, headers });
	}
	if (typeof path !== 'string' || !trackedPaths.has(path)) {
		return new Response(null, { status: 400, headers });
	}
	if (!eligibleActivity(request.headers)) return readSummary();
	try {
		let address: string | null = null;
		try {
			// ADDRESS_HEADER=x-real-ip is configured on Railway; never trust arbitrary forwarded headers.
			address = getClientAddress();
		} catch {
			/* Missing trusted address: count only a page view. */
		}
		const summary = getActivityStore().record(
			address,
			request.headers.get('user-agent') || '',
			countryForAddress(address)
		);
		return json(summary, { headers });
	} catch {
		console.error('Site activity could not be recorded');
		return new Response(null, { status: 503, headers });
	}
};
