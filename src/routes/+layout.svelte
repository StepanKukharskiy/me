<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { activity, type ActivitySummary } from '$lib/activity';

	let latestRequest = 0;
	afterNavigate(async ({ from, to }) => {
		if (!to || from?.url.pathname === to.url.pathname) return;
		const requestId = ++latestRequest;
		const privacy = navigator as Navigator & { globalPrivacyControl?: boolean };
		const optedOut = navigator.doNotTrack === '1' || privacy.globalPrivacyControl === true;
		try {
			const response = await fetch(resolve('/api/activity'), {
				method: optedOut ? 'GET' : 'POST',
				credentials: 'omit',
				cache: 'no-store',
				...(optedOut
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
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
