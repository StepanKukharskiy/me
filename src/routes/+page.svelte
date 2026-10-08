<script lang="ts">
	import { resolve } from '$app/paths';
	import ActivityStrip from '$lib/components/ActivityStrip.svelte';
	import FollowExperiments from '$lib/components/FollowExperiments.svelte';
</script>

<svelte:head>
	<title>Stepan Kukharskiy — AI Output into Structured, Editable Work</title>
	<meta
		name="description"
		content="I test which real professional routines AI can do and turn successful ones into reusable Skills. Explore checked experiments, Relay and editable AI work."
	/>
	<link rel="canonical" href="https://stepankukharskiy.com/" />
	<meta
		property="og:title"
		content="Stepan Kukharskiy — AI Output into Structured, Editable Work"
	/>
	<meta
		property="og:description"
		content="Real professional routines, checked AI results and reusable Skills. Follow Stepan Kukharskiy's AI Work experiments."
	/>
	<meta
		property="og:image"
		content="https://stepankukharskiy.com/ai-work/assets/excel-to-powerpoint-v1-february-kpis.png"
	/>
	<meta property="og:type" content="website" />
</svelte:head>
<div class="container">
	<a class="skip" href="#main">Skip to content</a>
	<header>
		<a class="name" href={resolve('/')}>Stepan Kukharskiy</a>
		<nav aria-label="Main navigation">
			<a href={resolve('/projects')}>Projects</a><a href={resolve('/ai-work')}>AI Work</a><a
				href={resolve('/teaching')}>Teaching</a
			>
		</nav>
	</header>
	<main id="main">
		<section class="hero">
			<div class="identity">
				<p class="eyebrow">Architect · computational designer · founder</p>
				<img src="/Stepan_Kukharskiy.jpg" alt="Stepan Kukharskiy" width="112" height="112" />
			</div>
			<h1>I build systems that turn AI output into structured, editable work.</h1>
			<p class="lede">
				I'm testing which real professional routines AI can do, turning the successful ones into
				reusable Skills.
			</p>
			<p><a class="primary-link" href={resolve('/ai-work')}>See the experiments →</a></p>
			<p class="context">
				The result should carry enough structure to be inspected, changed and continued: geometry
				with editable intent, analysis tied to evidence, and routines with retained files and
				checks.
			</p>
		</section>
		<section class="ai-work" aria-labelledby="ai-work-title">
			<p class="eyebrow">Experiments and field notes</p>
			<h2 id="ai-work-title">AI Work</h2>
			<p>
				Real inputs, saved outputs and explicit checks. Each experiment documents what worked, what
				preparation was needed and what remains unresolved.
			</p>
			<article class="experiment-proof">
				<div>
					<p class="eyebrow">Experiment 01 · 5 October 2026</p>
					<h3>
						<a href={resolve('/ai-work/excel-to-powerpoint-automation')}>Excel → PowerPoint</a>
					</h3>
					<p>January report + February data → an updated six-slide deck with editable charts.</p>
					<ul class="checks" aria-label="Verified results">
						<li><strong>31/31</strong> numeric targets verified</li>
						<li><strong>3/3</strong> editable chart datasets checked</li>
						<li>Portable Skill tested directly in Codex</li>
					</ul>
					<p class="proof-limit">
						Prepared template and mapping required. One missing explanation stayed marked for human
						review.
					</p>
					<a href={resolve('/ai-work/excel-to-powerpoint-automation')}
						>Read the experiment and get the Skill →</a
					>
				</div>
				<figure>
					<a
						href={resolve('/ai-work/excel-to-powerpoint-automation')}
						aria-label="See the checked Excel-to-PowerPoint report"
					>
						<img
							src="/ai-work/assets/excel-to-powerpoint-v1-february-kpis.png"
							alt="Actual February report output: GBP 506,168 gross product sales, 1,093 orders and 282,794 units."
							width="1280"
							height="720"
						/>
					</a>
					<figcaption>
						Actual February output from the prepared report template. Display totals are rounded.
					</figcaption>
				</figure>
			</article>
			<p><a href={resolve('/ai-work')}>All experiments →</a></p>
		</section>
		<FollowExperiments />
		<section class="projects">
			<p class="eyebrow">One thesis, different domains</p>
			<h2>Projects</h2>
			<div class="project-grid">
				<article>
					<p class="domain">Routines → reusable work</p>
					<h3>Relay</h3>
					<figure class="project-visual">
						<a href={resolve('/relay/chrome')} aria-label="See Relay’s Chrome extension in action">
							<img
								src="/relay/assets/relay-chrome-selected-text.png"
								alt="Selected text in ChatGPT beside Task Relay’s Turn into Skill and Save work buttons."
								width="1589"
								height="990"
								loading="lazy"
								decoding="async"
							/>
						</a>
						<figcaption>Select text → Turn into Skill.</figcaption>
					</figure>
					<p>
						Select useful text in ChatGPT and turn it into a reusable Skill or saved work with the
						Chrome extension.
					</p>
					<a href={resolve('/relay/chrome')}>Relay for Chrome →</a><br /><a
						href={resolve('/projects#relay')}>Explore Relay →</a
					>
				</article>
				<article>
					<p class="domain">Intent → editable geometry</p>
					<h3>Spellshape / Live OBJ</h3>
					<p>
						Keep portable mesh geometry together with semantic and procedural metadata, so a scene
						can keep changing in tools that understand it.
					</p>
					<a href={resolve('/projects#live-obj')}>Explore Live OBJ →</a>
				</article>
				<article>
					<p class="domain">Drawing → traceable analysis</p>
					<h3>Drawing Analysis Engine</h3>
					<figure class="project-visual drawing-visual">
						<a
							href={resolve('/projects#drawing-engine')}
							aria-label="See the drawing-analysis example"
						>
							<img
								src="/drawing-analysis/assets/annotated-section.png"
								alt="Foundation section from the audit, with native geometry marked green, supporting dimensions blue and unresolved shapes orange."
								width="780"
								height="420"
								loading="lazy"
								decoding="async"
							/>
						</a>
						<figcaption>PDF → annotated evidence. Unresolved shapes stay visible.</figcaption>
					</figure>
					<p>
						Keep drawing evidence, declared values, calculations and engineer approval separate.
						Preserve the source and explain unresolved geometry.
					</p>
					<a href={resolve('/projects#drawing-engine')}>Explore the engine →</a>
				</article>
			</div>
		</section>
		<section>
			<p class="eyebrow">Sharing the method</p>
			<h2>Teaching</h2>
			<p>
				Lectures, workshops and webinars on computational design, AI workflows and spatial tools,
				drawing on the systems and experiments I build.
			</p>
			<a href={resolve('/teaching')}>Teaching and workshops →</a>
		</section>
		<section class="background">
			<h2>Background</h2>
			<p>
				I've worked with parametric design since 2010 and co-founded <a href="https://salab.org/eng"
					>SA lab</a
				>. My work connects architecture, computation and interactive 3D, with an emphasis on tools
				and artifacts that stay editable and buildable.
			</p>
			<div class="architecture-gallery" aria-label="Selected SA lab projects">
				<figure>
					<a href="https://www.archdaily.com/912669/flexse-sa-lab" aria-label="FLEXSE on ArchDaily">
						<img
							src="/architecture/flexse.jpg"
							alt="FLEXSE, SA lab’s timber-clad modular pavilion, in a snowy landscape."
							width="528"
							height="315"
							loading="lazy"
							decoding="async"
						/>
					</a>
					<figcaption>
						<h3>FLEXSE · SA lab</h3>
						<p>A built modular pavilion designed for adaptable uses.</p>
						<p class="image-credit">
							Photo © Ekaterina Titenko · <a href="https://www.archdaily.com/912669/flexse-sa-lab"
								>ArchDaily</a
							>
						</p>
					</figcaption>
				</figure>
				<figure>
					<a
						href="https://www.designboom.com/architecture/sa-lab-modular-trekking-lodge-iceland-under-yggdrasil-09-10-2016/"
						aria-label="Under Yggdrasil on Designboom"
					>
						<img
							src="/architecture/under-yggdrasil.jpg"
							alt="Architectural rendering of SA lab’s Under Yggdrasil trekking-lodge proposal in an Icelandic landscape."
							width="1800"
							height="650"
							loading="lazy"
							decoding="async"
						/>
					</a>
					<figcaption>
						<h3>Under Yggdrasil · SA lab</h3>
						<p>A modular trekking-lodge proposal for Iceland. Architectural rendering.</p>
						<p class="image-credit">
							Rendering: SA lab · <a
								href="https://www.designboom.com/architecture/sa-lab-modular-trekking-lodge-iceland-under-yggdrasil-09-10-2016/"
								>Designboom</a
							>
						</p>
					</figcaption>
				</figure>
				<figure>
					<a
						href="https://architizer.com/projects/crane-design-showroom/"
						aria-label="Crane Design Showroom on Architizer"
					>
						<img
							src="/architecture/crane-design-showroom.jpg"
							alt="Crane Design Showroom by SA lab, with a curved parametric aluminium structure defining the interior."
							width="1680"
							height="1121"
							loading="lazy"
							decoding="async"
						/>
					</a>
					<figcaption>
						<h3>Crane Design Showroom · SA lab</h3>
						<p>A built showroom with a parametric aluminium structure.</p>
						<p class="image-credit">
							Photo © Ilya Ivanov · <a href="https://architizer.com/projects/crane-design-showroom/"
								>Architizer</a
							>
						</p>
					</figcaption>
				</figure>
			</div>
			<p class="eyebrow">Selected architectural experience</p>
			<div class="experience-grid">
				<article>
					<p class="location">St. Petersburg · Europe’s tallest building, 462 m</p>
					<h3>Lakhta Center</h3>
					<p><strong>Architect · Parking-area design</strong></p>
					<p>I developed design ideas for the parking areas of the Lakhta Center complex.</p>
					<a href="https://lakhta.center/en/about/">Project details →</a>
				</article>
				<article>
					<p class="location">Rockefeller Center · New York</p>
					<h3>Trudon boutique</h3>
					<p><strong>Architectural drawings · Store opening</strong></p>
					<p>
						I helped prepare drawings for furniture, lighting and mirrors, supporting the opening of
						Trudon’s boutique at Rockefeller Center.
					</p>
					<a
						href="https://www.rockefellercenter.com/magazine/shopping/trudon-at-rockefeller-center/"
					>
						About the boutique →
					</a>
				</article>
			</div>
			<p>
				Architectural work has been published by <a
					href="https://www.archdaily.com/912669/flexse-sa-lab">ArchDaily</a
				>,
				<a
					href="https://www.designboom.com/architecture/sa-lab-modular-trekking-lodge-iceland-under-yggdrasil-09-10-2016/"
					>Designboom</a
				>, <a href="https://archinect.com/salab/project/crane-design-showroom">Archinect</a> and
				<a href="https://architizer.com/projects/crane-design-showroom/">Architizer</a>.
			</p>
		</section>
		<ActivityStrip />
	</main>
	<footer>
		<a href="https://www.linkedin.com/in/stepan-kukharskiy-25347342">LinkedIn</a><a
			href="https://github.com/StepanKukharskiy">GitHub</a
		><a href={resolve('/ai-work/privacy')}>Privacy</a>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #fff;
	}
	.container {
		max-width: 1040px;
		margin: auto;
		padding: 32px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #222;
	}
	header,
	nav,
	footer {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		align-items: center;
	}
	header {
		justify-content: space-between;
		border-bottom: 1px solid #e5e7eb;
		padding-bottom: 24px;
	}
	.name {
		font-weight: 700;
	}
	a {
		color: #2563eb;
		text-underline-offset: 4px;
	}
	h1,
	h2,
	h3 {
		line-height: 1.18;
		color: #1a1a1a;
	}
	h1 {
		font-size: clamp(2.2rem, 5vw, 3.6rem);
		letter-spacing: -0.04em;
		max-width: 880px;
		margin: 24px 0;
	}
	h2 {
		font-size: 2rem;
		margin: 12px 0 24px;
	}
	h3 {
		font-size: 1.35rem;
		margin: 12px 0;
	}
	section {
		margin-top: 64px;
	}
	.hero {
		margin-top: 48px;
	}
	.identity {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}
	.identity img {
		border-radius: 8px;
		object-fit: cover;
		flex-shrink: 0;
	}
	.eyebrow,
	.domain {
		font-size: 0.8rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #666;
	}
	.lede {
		font-size: 1.3rem;
		color: #555;
		max-width: 820px;
	}
	.primary-link {
		display: inline-block;
		padding: 12px 20px;
		border-radius: 6px;
		background: #2563eb;
		color: #fff;
		font-weight: 600;
	}
	.hero .context {
		color: #666;
		font-size: 1rem;
	}
	.experiment-proof {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		align-items: center;
		gap: 32px;
		padding: 28px;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
	}
	.experiment-proof h3 {
		font-size: 1.65rem;
	}
	.experiment-proof p,
	.checks {
		font-size: 1rem;
	}
	.checks {
		padding-left: 20px;
	}
	.checks li + li {
		margin-top: 8px;
	}
	.experiment-proof .proof-limit {
		font-size: 0.9rem;
		color: #666;
	}
	.experiment-proof figure {
		margin: 0;
		min-width: 0;
	}
	.experiment-proof img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		box-sizing: border-box;
	}
	.experiment-proof figcaption {
		margin-top: 10px;
		font-size: 0.85rem;
		color: #666;
	}
	.project-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
	}
	.project-grid article {
		padding: 24px;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
	}
	.project-grid p {
		font-size: 1rem;
	}
	.project-grid .domain {
		font-size: 0.75rem;
	}
	.project-visual {
		margin: 20px 0;
	}
	.project-visual img {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid #e5e7eb;
		border-radius: 6px;
		box-sizing: border-box;
	}
	.project-visual figcaption {
		margin-top: 10px;
		font-size: 0.85rem;
		color: #666;
	}
	.drawing-visual img {
		aspect-ratio: 1589 / 990;
		object-fit: contain;
		background: #f7fafc;
	}
	.project-grid a {
		display: inline-block;
		margin-top: 8px;
	}
	section > p {
		font-size: 1.1rem;
		max-width: 820px;
	}
	.background {
		border-top: 1px solid #e5e7eb;
		padding-top: 40px;
	}
	.experience-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		margin: 24px 0 32px;
	}
	.experience-grid article {
		padding: 24px;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
	}
	.experience-grid p {
		font-size: 1rem;
	}
	.experience-grid .location {
		font-size: 0.85rem;
		color: #666;
	}
	.background > .eyebrow {
		margin-top: 32px;
		font-size: 0.8rem;
	}
	.architecture-gallery {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
		margin: 32px 0;
	}
	.architecture-gallery figure {
		margin: 0;
		min-width: 0;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		overflow: hidden;
	}
	.architecture-gallery img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 10;
		object-fit: cover;
	}
	.architecture-gallery figcaption {
		padding: 20px 24px;
	}
	.architecture-gallery p {
		font-size: 1rem;
	}
	.architecture-gallery .image-credit {
		font-size: 0.85rem;
		color: #666;
	}
	footer {
		margin-top: 64px;
		border-top: 1px solid #e5e7eb;
		padding-top: 24px;
		font-size: 0.9rem;
	}
	.skip {
		position: absolute;
		left: -10000px;
	}
	.skip:focus {
		left: 16px;
		top: 8px;
		background: white;
	}
	@media (max-width: 800px) {
		.project-grid,
		.experience-grid,
		.architecture-gallery,
		.experiment-proof {
			grid-template-columns: 1fr;
		}
		.experiment-proof {
			padding: 20px;
			gap: 24px;
		}
		.container {
			padding: 24px 20px;
		}
		.identity img {
			width: 84px;
			height: 84px;
		}
		header {
			gap: 16px;
		}
		nav {
			gap: 20px;
		}
		.hero {
			margin-top: 36px;
		}
		section {
			margin-top: 48px;
		}
	}
</style>
