<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>
<svelte:head>
  <title>Excel to PowerPoint Automation: Updating a Recurring Report with AI | Stepan Kukharskiy</title>
  <meta name="description" content="I tested a reusable AI Skill on a recurring Excel-to-PowerPoint report: real transactions, editable charts, checked numbers and explicit limits." />
  <link rel="canonical" href="https://stepankukharskiy.com/ai-work/excel-to-powerpoint-automation" />
  <meta property="og:title" content="Excel to PowerPoint Automation: Updating a Recurring Report with AI" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://stepankukharskiy.com/ai-work/excel-to-powerpoint-automation" />
  <meta property="og:description" content="A real January-to-February report test, with editable charts, verified numbers and a reusable Skill." />
  <meta property="og:image" content="https://stepankukharskiy.com/ai-work/assets/excel-to-powerpoint-hero-v1.png" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": "https://stepankukharskiy.com/ai-work/excel-to-powerpoint-automation#article",
      "url": "https://stepankukharskiy.com/ai-work/excel-to-powerpoint-automation",
      "headline": "Excel to PowerPoint Automation: Updating a Recurring Report with AI",
      "description": "A recurring report update using a prepared six-slide template, real transactions, editable charts, checked numbers and explicit limitations.",
      "datePublished": "2026-10-05",
      "inLanguage": "en",
      "image": "https://stepankukharskiy.com/ai-work/assets/excel-to-powerpoint-hero-v1.png",
      "author": { "@type": "Person", "@id": "https://stepankukharskiy.com/#person", "name": "Stepan Kukharskiy", "url": "https://stepankukharskiy.com/" },
      "isPartOf": { "@id": "https://stepankukharskiy.com/#website" },
      "mainEntityOfPage": "https://stepankukharskiy.com/ai-work/excel-to-powerpoint-automation"
    }
  </script>
</svelte:head>
<article><p class="eyebrow">AI work · Experiment 01 · 5 October 2026</p><h1>Excel to PowerPoint Automation: Updating a Recurring Report with AI</h1><p class="lede">Update an existing monthly PowerPoint from new Excel data, preserve the approved template and editable charts, and check the saved result. Unsupported commentary stays marked for human review.</p>
<figure><img class="hero-illustration" src="/ai-work/assets/excel-to-powerpoint-hero-v1.png" alt="Editorial illustration of spreadsheet cells flowing into an editable presentation report" /><figcaption>Editorial illustration. The actual report screenshots and saved-file checks appear below.</figcaption></figure>
<p>The Skill works directly in Codex with its bundled document tools. Relay is optional for retained jobs, review receipts and continuation. <a href={data.skillUrl + "#use-in-codex"}>Use it in Codex →</a></p>
<p>I tested a reusable AI Skill on that exact task: turn a January report into a February report, keep the six-slide template, and check the saved file against the source data.</p>
<p>The result passed an independent review: <strong>31 mapped numeric targets, three editable charts and eight period labels</strong> matched their sources. One missing explanation remained explicitly marked for human input.</p>
<p>There was preparation involved. We created the template, defined the metrics and supplied a mapping. This was a bounded test with actual historical transactions, rather than a claim that an agent can update any company's deck without setup.</p>
<p><a class="text-link" href={data.skillUrl}>Get the Skill and the worked example →</a></p>
<h2>Start with the report you already have</h2>
<p>A recurring report mixes several kinds of content. Some stays fixed: slide layout, typography, labels and the structure of the story. Other content changes each month: KPIs, product rankings, chart series and the reporting period.</p>
<p>Those two kinds of content need different treatment. Asking an agent to “make a sales presentation” leaves room for a redesign. Asking it to update a supplied report, with an explicit source map, gives it a checkable task.</p>
<p>For this trial, the inputs were a January workbook, a February workbook, a six-slide January PowerPoint template, and a mapping that connected workbook cells to table cells, chart points and date labels. We also supplied the metric policy and left the cause-explanation field blank.</p>
<figure><img src="/ai-work/assets/excel-to-powerpoint-v1-january-kpis.png" alt="January 2011 KPI slide in the prepared template" width="1280" height="720"><figcaption>The prepared January baseline. Our template and mappings were created before the Relay run.</figcaption></figure>
<h2>Use real data and define the calculation</h2>
<p>The transactions came from <a href="https://archive.ics.uci.edu/dataset/352/online%2Bretail">UCI's Online Retail dataset</a>, published by Daqing Chen. UCI describes it as transactions from a UK online retailer between December 2010 and December 2011, with unit prices in sterling. It is available under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</p>
<p>We selected January and February 2011, plus December 2010 for the trend. That gave us 105,335 source rows. Before relying on the derived workbooks, we compared every selected row's original fields against the untouched source XLSX.</p>
<p>Our metric was <strong>gross product sales</strong>: positive quantity, positive unit price, a product code matching the declared rule, and an invoice that was not a cancellation. Each line was rounded to pennies, then summed. Eligible rows with a missing customer ID stayed included. Cancellations and other excluded rows remained documented in the source policy.</p>
<p>This is our reproducible calculation policy, not an audited revenue definition supplied by UCI. Net sales or another business definition would require a different policy and fresh checks.</p>
<h2>Make the procedure reusable</h2>
<p>The Skill keeps the procedure separate from a particular month's files. Its instructions are to preserve the template, validate the source fields, update every mapped value and chart dataset, and report missing evidence instead of inventing it.</p>
<p>The mapping holds the report-specific choices: which worksheet to use, which cell contains the period, where each KPI appears, and which cells supply chart categories and values. You pay that setup cost once for a stable report. If the report or workbook structure changes, the map needs another review.</p>
<p>The portable object is a folder with <code>SKILL.md</code> and supporting scripts, following the <a href="https://agentskills.io/specification">Agent Skills format</a>. The published v1 adapter also ran unchanged directly in Codex desktop with its bundled spreadsheet/presentation tools, without Relay. The separately saved output passed the same 31 numeric, three chart and eight period-label checks. We inspected all six previews. No dependencies were installed. This checks the supplied adapter and mapping; automatic Skill discovery and a CLI without document tools were not tested. Other hosts may implement the same procedure, but I have not verified this adapter in Claude or OpenClaw.</p>
<p>Give the agent the Skill and the selected files, then use a request like this:</p>
<pre><code>Update the existing monthly PowerPoint report from the February workbook.
Preserve the supplied January template and layouts. Replace all mapped
period-specific values, chart series, categories and period labels.
Verify the saved deck against the workbook and the source policy.
Keep native chart data editable. Report anything that cannot be mapped
confidently. Leave the unsupplied cause explanation as human input
required. Save to a new output path.</code></pre>
<p>The example includes those files and a ready-made mapping. To use your own report, start by reviewing its cells, units and slide targets. A missing required number should block the export; an optional explanation can be left as an explicit question for the reviewer.</p>
<h2>Run it and review a separate output</h2>
<p>I used Task Relay's production runtime through its local command line to freeze the inputs, run a configured Codex producer, and pass the saved outputs to a separate independent reviewer. Both workers completed on their first attempt. No execution correction or retry was needed.</p>
<p>This was a file-and-shell job using the supplied Skill and adapter. It does not demonstrate a ready-made, one-click Desktop feature for arbitrary presentation templates.</p>
<p>The producer updated the February numbers, rebuilt the editable chart snapshots and returned the deck with a receipt and six previews. The reviewer independently recalculated the source rows and checked the actual saved XLSX/PPTX files, chart caches, embedded workbooks and template signatures.</p>
<figure><img src="/ai-work/assets/excel-to-powerpoint-v1-february-kpis.png" alt="Updated February 2011 KPI slide with GBP 506168 gross product sales, 1093 orders and 282794 units" width="1280" height="720"><figcaption>The actual February output. Whole-pound display rounding is intentional; the underlying gross product sales total is £506,167.81.</figcaption></figure>
<div class="format-table-wrap"><table class="format-table"><caption>Checks on the saved February report</caption><thead><tr><th scope="col">Check</th><th scope="col">Observed result</th></tr></thead><tbody>
<tr><th scope="row">Mapped numeric targets</th><td>31 of 31 matched their sources</td></tr><tr><th scope="row">Editable chart datasets</th><td>3 of 3 complete caches and embedded workbooks matched</td></tr><tr><th scope="row">Period labels</th><td>8 of 8 updated</td></tr><tr><th scope="row">Saved slide layout and style</th><td>No differences detected under the declared comparison</td></tr><tr><th scope="row">Missing explanation</th><td>1 field marked for human input</td></tr></tbody></table></div>
<p>The 31-target count includes mapped table values and raw chart points. It is not an OCR check of every visible axis tick. The layout comparison covers the saved six-slide template's geometry and style, with documented equivalent defaults; it is not a promise of identical rendering in every presentation app.</p>
<figure><img src="/ai-work/assets/excel-to-powerpoint-v1-february-trends.png" alt="February report trends showing December, January and February sales and units" width="1280" height="720"><figcaption>January had two observed months of history. February adds a third point. The charts remain editable snapshots, without live links to the monthly workbook.</figcaption></figure>
<h2>Do not turn a numeric change into a cause</h2>
<p>Under the declared policy, February gross product sales were £506,167.81, down 24.4% from January. Eligible orders were 1,093 and units were 282,794.</p>
<p>Those figures do not explain why sales changed. No approved cause statement was supplied, so the final slide retained: <strong>“Human review: no approved explanation supplied.”</strong> A report that makes this gap visible is easier to review than one that fills it with a plausible story.</p>
<p>I also opened the exact output in Keynote and inspected all six slides. They were readable, but Keynote changed chart number formatting and thin table borders, and briefly showed a missing-font warning. PowerPoint itself was not tested. Open the file in the application you intend to use before treating the result as finished.</p>
<h2>Try the example before your own report</h2>
<p><a class="text-link" href={data.skillUrl}>Download the Skill and the January-to-February example →</a></p>
<p>The example includes the two workbooks, the January template, the source policy, the mapping and the checked February output. The Skill contains no publisher execution-reporting endpoint. Website download counts can show interest in the example; they cannot prove that someone used the Skill or installed Relay.</p>
<p>Relay is useful when you want frozen input versions, a separate reviewer and retained execution receipts. You can also use the Skill's procedure directly with an agent that has suitable spreadsheet and presentation tools. The included reference adapter needs the host-provided dependencies described in the download.</p>
<p>This run provides a concrete example with real transaction data. It does not establish customer adoption, arbitrary-template reliability or a measured time saving. The next test is whether readers find the problem useful enough to try the reusable procedure.</p>
<p class="verification"><strong>Data attribution:</strong> Chen, D. (2015). <em>Online Retail</em>. UCI Machine Learning Repository. <a href="https://doi.org/10.24432/C5BW33">doi:10.24432/C5BW33</a>, CC BY 4.0. Changes: selected December 2010–February 2011, calculated declared aggregates, and created our own template and updated report. <a href="https://task-relay-website-production.up.railway.app/skills/assets/excel-to-powerpoint-v2-proof.json">Public verification summary</a>.</p></article>
