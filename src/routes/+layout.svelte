<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import favicon16 from '$lib/assets/favicon-16.png';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { activity, type ActivitySummary } from '$lib/activity';

	let latestRequest = 0;
	afterNavigate(async ({ from, to }) => {
		if (!to || from?.url.pathname === to.url.pathname) return;
		const requestId = ++latestRequest;
		const privacy = navigator as Navigator & { globalPrivacyControl?: boolean };
		const optedOut = navigator.doNotTrack === '1' || privacy.globalPrivacyControl === true;
		const readOnly = optedOut || to.url.pathname === '/site-activity';
		try {
			const response = await fetch(resolve('/api/activity'), {
				method: readOnly ? 'GET' : 'POST',
				credentials: 'omit',
				cache: 'no-store',
				...(readOnly
					? {}
					: {
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ path: to.url.pathname })
						})
			});
			const summary = response.status === 200 ? ((await response.json()) as ActivitySummary) : null;
			if (requestId === latestRequest) activity.set(summary);
		} catch {
			if (requestId === latestRequest) activity.set(null);
		}
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon} />
</svelte:head>

{@render children()}
