<script lang="ts">
	import { resolve } from '$app/paths';
	import { activity } from '$lib/activity';
	const names = new Intl.DisplayNames(['en'], { type: 'region' });
</script>

{#if $activity}
	<aside aria-labelledby="activity-title" class="activity-strip">
		<div class="heading">
			<h2 id="activity-title">Site activity</h2>
			<span>Today · Moscow time</span>
		</div>
		<div class="totals">
			<p>
				<strong>{$activity.visitors.toLocaleString('en')}</strong> estimated {$activity.visitors ===
				1
					? 'visitor'
					: 'visitors'}
			</p>
			<p>
				<strong>{$activity.pageviews.toLocaleString('en')}</strong> page {$activity.pageviews === 1
					? 'view'
					: 'views'}
			</p>
			<p>
				<strong>{$activity.countryCount.toLocaleString('en')}</strong>
				{$activity.countryCount === 1 ? 'country' : 'countries'}
			</p>
		</div>
		{#if $activity.topCountries.length}
			<p class="countries">
				{#each $activity.topCountries as country, i (country.code)}
					{i ? ' · ' : ''}{names.of(country.code) || country.code} {country.visitors}
				{/each}
			</p>
		{/if}
		<p class="note">
			Loaded when you open this page. No cookies. <a href={resolve('/ai-work/privacy')}
				>How counts work</a
			>
		</p>
	</aside>
{/if}

<style>
	.activity-strip {
		margin-top: 48px;
		padding: 24px;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		background: #f8f9fc;
	}
	.heading {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 8px 20px;
	}
	h2 {
		margin: 0;
		font-size: 1.1rem;
		line-height: 1.4;
	}
	.heading span,
	.note {
		font-size: 0.8rem;
		color: #666;
	}
	.totals {
		display: flex;
		flex-wrap: wrap;
		gap: 12px 32px;
		margin: 16px 0;
	}
	.totals p {
		margin: 0;
		font-size: 0.95rem;
		color: #555;
	}
	strong {
		font-size: 1.4rem;
		color: #222;
		margin-right: 4px;
	}
	.countries {
		margin: 0 0 12px;
		font-size: 0.9rem;
		color: #555;
	}
	.note {
		margin: 0;
	}
	a {
		color: #2563eb;
		text-underline-offset: 3px;
	}
</style>
