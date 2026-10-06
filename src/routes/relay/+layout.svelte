<script lang="ts">
	import SectionLayout from '$lib/components/SectionLayout.svelte';
	let { children } = $props();
</script>

<SectionLayout>{@render children()}</SectionLayout>
