<script lang="ts">
	import SectionLayout from '$lib/components/SectionLayout.svelte';
	import ActivityStrip from '$lib/components/ActivityStrip.svelte';
	import { activity } from '$lib/activity';
</script>

<svelte:head>
	<title>Site Activity | Stepan Kukharskiy</title>
	<meta name="robots" content="noindex" />
	<link rel="canonical" href="https://stepankukharskiy.com/site-activity" />
</svelte:head>

<SectionLayout>
	<p class="eyebrow">Website statistics</p>
	<h1>Site activity</h1>
	<p>Daily visitor estimates, page views and countries. Counts load when you open this page.</p>
	<ActivityStrip />
	{#if !$activity}
		<p>Waiting for today’s counts. If they do not appear, reload to try again.</p>
	{/if}
</SectionLayout>
