<script lang="ts">
	import { resolve } from '$app/paths';
	import { relayChromeStoreUrl } from '$lib/relay';
</script>

<svelte:head>
	<title>Relay for Chrome — Turn Selected Text into Skills | Stepan Kukharskiy</title>
	<meta
		name="description"
		content="Select useful text in ChatGPT, turn it into a reusable Skill or saved work with Relay for Chrome, and continue in Codex or another AI chat."
	/>
	<link rel="canonical" href="https://stepankukharskiy.com/relay/chrome" />
	<meta property="og:title" content="Relay for Chrome — Keep the useful part" />
	<meta
		property="og:description"
		content="Select text → Turn into Skill or Save work → review and download → use in Codex or Relay."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://stepankukharskiy.com/relay/chrome" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"@id": "https://stepankukharskiy.com/relay/chrome#extension",
			"name": "Task Relay for Chrome",
			"url": "https://stepankukharskiy.com/relay/chrome",
			"description": "A free Chrome extension that turns selected text in ChatGPT into reusable Skills or portable saved work for Codex or another AI chat. Relay Desktop is optional.",
			"applicationCategory": "BrowserApplication",
			"operatingSystem": "Chrome",
			"browserRequirements": "Google Chrome",
			"downloadUrl": "https://chromewebstore.google.com/detail/task-relay/alicbjedflapdighdmadgbopahfhbgbd",
			"author": { "@id": "https://stepankukharskiy.com/#person" }
		}
	</script>
</svelte:head>

<p class="eyebrow">Relay · Free Chrome extension</p>
<h1>Keep the useful part.</h1>
<p class="lede">
	Turn useful text in ChatGPT into a reusable Skill or saved work you can pick up again.
</p>
<p><a class="install" href={relayChromeStoreUrl} rel="external">Get the Chrome extension →</a></p>

<p class="flow">
	Select text → Turn into Skill or Save work → review and download → use in Codex or Relay
</p>

<section>
	<h2>From a conversation to reusable work</h2>
	<ol>
		<li>
			Select the useful part of a ChatGPT conversation and open Task Relay from Chrome’s toolbar.
		</li>
		<li>
			Choose <strong>Turn into Skill</strong> for a method you want to reuse, or
			<strong>Save work</strong> to keep the state of this particular task.
		</li>
		<li>Relay prepares a message in ChatGPT. Review it and send it yourself.</li>
		<li>
			When the response is complete, download the result. Supply the saved files in Codex or another
			AI chat when you want to use the method or continue the work.
		</li>
	</ol>
</section>

<section>
	<h2>A Skill or a work snapshot?</h2>
	<p>
		<strong>A Skill keeps the method.</strong> Export reusable instructions as
		<code>SKILL.md</code>, or a Skill ZIP when supporting files are needed. Use it for similar tasks
		with new inputs.
	</p>
	<p>
		<strong>Saved work keeps the context.</strong> A portable <code>.relay.md</code> snapshot retains
		the objective, findings, evidence, proposed decisions, open questions and next actions. Supply it
		when continuing that task in a fresh chat.
	</p>
	<p>
		Saving a snapshot does not create or run a Relay Desktop job. Desktop is an optional connection
		for keeping work in a local Relay library.
	</p>
</section>

<section>
	<h2>Start with your current AI chat</h2>
	<p>
		The portable flow needs no Relay account, Relay Desktop or separate model setup. The direct
		message handoff supports ordinary ChatGPT conversations; other AI sites use manual copy and
		paste. You choose what to capture and send.
	</p>
	<p>
		<a href="https://task-relay-website-production.up.railway.app/chrome/support"
			>Extension support</a
		>
		·
		<a href="https://task-relay-website-production.up.railway.app/chrome/privacy"
			>Extension privacy</a
		>
		· <a href={resolve('/projects#relay')}>More about Relay</a>
	</p>
</section>

<style>
	.install {
		display: inline-block;
		padding: 12px 20px;
		border: 1px solid #2563eb;
		border-radius: 6px;
		font-weight: 600;
	}
	.flow {
		margin: 32px 0;
		padding: 20px 24px;
		background: #f5f7fb;
		border-left: 3px solid #2563eb;
	}
	li + li {
		margin-top: 12px;
	}
</style>
