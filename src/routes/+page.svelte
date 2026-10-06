<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
  <title>Stepan Kukharskiy — AI Output into Structured, Editable Work</title>
  <meta name="description" content="I build systems that turn AI output into structured, editable work. Relay, Spellshape / Live OBJ, drawing analysis, practical experiments and teaching." />
  <link rel="canonical" href="https://stepankukharskiy.com/" />
  <meta property="og:title" content="Stepan Kukharskiy — AI Output into Structured, Editable Work" />
  <meta property="og:description" content="Editable geometry, traceable drawing analysis and reusable AI workflows." />
  <meta property="og:type" content="website" />
</svelte:head>
<div class="container">
  <a class="skip" href="#main">Skip to content</a>
  <header><a class="name" href={resolve('/')}>Stepan Kukharskiy</a><nav aria-label="Main navigation"><a href={resolve('/projects')}>Projects</a><a href={resolve('/ai-work')}>AI Work</a><a href={resolve('/teaching')}>Teaching</a></nav></header>
  <main id="main">
    <section class="hero">
      <div class="identity"><p class="eyebrow">Architect · computational designer · founder</p><img src="/Stepan_Kukharskiy.jpg" alt="Stepan Kukharskiy" width="112" height="112" /></div>
      <h1>I build systems that turn AI output into structured, editable work.</h1>
      <p class="lede">The result should carry enough structure to be inspected, changed and continued: geometry with editable intent, analysis tied to evidence, and routines with retained files and checks.</p>
      <div class="thesis" aria-label="Working thesis"><span>AI output</span><span aria-hidden="true">→</span><strong>Structured work</strong></div>
    </section>
    <section class="projects">
      <p class="eyebrow">One thesis, different domains</p><h2>Projects</h2>
      <div class="project-grid">
        <article><p class="domain">Routines → reusable work</p><h3>Relay</h3><p>Turn a messy routine into a Skill and job, with artifacts, evidence, checks and explicit exceptions. Keep the work ready to continue.</p><p>Select useful text in ChatGPT and turn it into a reusable Skill or saved work with the Chrome extension.</p><a href={resolve('/relay/chrome')}>Relay for Chrome →</a><br /><a href={resolve('/projects#relay')}>Explore Relay →</a></article>
        <article><p class="domain">Intent → editable geometry</p><h3>Spellshape / Live OBJ</h3><p>Keep portable mesh geometry together with semantic and procedural metadata, so a scene can keep changing in tools that understand it.</p><a href={resolve('/projects#live-obj')}>Explore Live OBJ →</a></article>
        <article><p class="domain">Drawing → traceable analysis</p><h3>Drawing Analysis Engine</h3><p>Keep drawing evidence, declared values, calculations and engineer approval separate. Preserve the source and explain unresolved geometry.</p><a href={resolve('/projects#drawing-engine')}>Explore the engine →</a></article>
      </div>
    </section>
    <section class="ai-work"><p class="eyebrow">Experiments and field notes</p><h2>AI Work</h2><p>I'm testing recurring tasks with real inputs, saved outputs and explicit checks. Each article documents what worked, what preparation was needed and what remains unresolved.</p><p><a href={resolve('/ai-work/excel-to-powerpoint-automation')}>Excel to PowerPoint: updating a recurring report with AI →</a></p><p><a href={resolve('/ai-work')}>All experiments →</a></p></section>
    <section><p class="eyebrow">Sharing the method</p><h2>Teaching</h2><p>Lectures, workshops and webinars on computational design, AI workflows and spatial tools, drawing on the systems and experiments I build.</p><a href={resolve('/teaching')}>Teaching and workshops →</a></section>
    <section class="background"><h2>Background</h2><p>I've worked with parametric design since 2010 and co-founded <a href="https://salab.org/eng">SA lab</a>. My work connects architecture, computation and interactive 3D, with an emphasis on tools and artifacts that stay editable and buildable.</p><p>Architectural work has been published by <a href="https://www.archdaily.com/912669/flexse-sa-lab">ArchDaily</a>, <a href="https://www.designboom.com/architecture/sa-lab-modular-trekking-lodge-iceland-under-yggdrasil-09-10-2016/">Designboom</a>, <a href="https://archinect.com/salab/project/crane-design-showroom">Archinect</a> and <a href="https://architizer.com/projects/crane-design-showroom/">Architizer</a>.</p></section>
  </main>
  <footer><a href="https://www.linkedin.com/in/stepan-kukharskiy-25347342">LinkedIn</a><a href="https://github.com/StepanKukharskiy">GitHub</a><a href={resolve('/ai-work/privacy')}>Website request privacy</a></footer>
</div>
<style>
  :global(body){margin:0;background:#fff}
  .container{max-width:1040px;margin:auto;padding:32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.7;color:#222}
  header,nav,footer{display:flex;flex-wrap:wrap;gap:24px;align-items:center}header{justify-content:space-between;border-bottom:1px solid #e5e7eb;padding-bottom:24px}.name{font-weight:700}
  a{color:#2563eb;text-underline-offset:4px}h1,h2,h3{line-height:1.18;color:#1a1a1a}h1{font-size:clamp(2.2rem,5vw,3.6rem);letter-spacing:-.04em;max-width:880px;margin:24px 0}h2{font-size:2rem;margin:12px 0 24px}h3{font-size:1.35rem;margin:12px 0}
  section{margin-top:64px}.hero{margin-top:48px}.identity{display:flex;justify-content:space-between;align-items:center;gap:20px}.identity img{border-radius:8px;object-fit:cover;flex-shrink:0}.eyebrow,.domain{font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:#666}.lede{font-size:1.3rem;color:#555;max-width:820px}.thesis{display:flex;flex-wrap:wrap;gap:20px;align-items:center;margin:32px 0;padding:20px 24px;background:#f5f7fb;border-left:3px solid #2563eb}.thesis strong{color:#2563eb}
  .project-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.project-grid article{padding:24px;border:1px solid #e5e7eb;border-radius:8px}.project-grid p{font-size:1rem}.project-grid .domain{font-size:.75rem}.project-grid a{display:inline-block;margin-top:8px}section>p{font-size:1.1rem;max-width:820px}.background{border-top:1px solid #e5e7eb;padding-top:40px}footer{margin-top:64px;border-top:1px solid #e5e7eb;padding-top:24px;font-size:.9rem}.skip{position:absolute;left:-10000px}.skip:focus{left:16px;top:8px;background:white}
  @media(max-width:800px){.project-grid{grid-template-columns:1fr}.container{padding:24px 20px}.identity img{width:84px;height:84px}header{gap:16px}nav{gap:20px}.hero{margin-top:36px}section{margin-top:48px}.thesis{gap:12px;padding:16px}}
</style>
