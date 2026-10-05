<script lang="ts">
  let { children } = $props();
</script>
<div class="work-shell">
  <a class="skip" href="#main">Skip to content</a>
  <header><a class="author" href="/">Stepan Kukharskiy</a><nav aria-label="Main navigation"><a href="/projects">Projects</a><a href="/ai-work">AI Work</a><a href="/teaching">Teaching</a></nav></header>
  <main id="main">{@render children()}</main>
  <footer><a href="/projects">Projects</a><a href="/ai-work">Experiments</a><a href="/ai-work/privacy">Request-count privacy</a><a href="/">About Stepan</a></footer>
</div>
<style>
  :global(body) { margin: 0; background: #fff; }
  .work-shell { max-width: 860px; margin: auto; padding: 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #222; line-height: 1.75; }
  header, footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; }
  header { border-bottom: 1px solid #e5e7eb; padding-bottom: 24px; margin-bottom: 64px; }
  nav { display: flex; flex-wrap: wrap; gap: 24px; } .author { font-weight: 700; }
  .work-shell :global(a) { color: #2563eb; text-underline-offset: 4px; }
  .work-shell :global(h1) { font-size: clamp(2rem, 5vw, 3.1rem); line-height: 1.15; letter-spacing: -.035em; margin: 16px 0 24px; }
  .work-shell :global(h2) { font-size: 1.7rem; line-height: 1.3; margin-top: 52px; }
  .work-shell :global(p), .work-shell :global(li) { font-size: 1.1rem; }
  .work-shell :global(.lede) { font-size: 1.3rem; line-height: 1.6; color: #555; }
  .work-shell :global(.eyebrow) { font-size: .8rem; text-transform: uppercase; letter-spacing: .1em; color: #666; }
  .work-shell :global(figure) { margin: 36px 0; }
  .work-shell :global(img) { display: block; width: 100%; height: auto; border: 1px solid #e5e7eb; border-radius: 6px; }
  .work-shell :global(figcaption) { margin-top: 10px; color: #666; font-size: .9rem; }
  .work-shell :global(pre) { padding: 20px; background: #f6f7f9; border-radius: 6px; white-space: pre-wrap; overflow-wrap: anywhere; font-size: .92rem; line-height: 1.7; }
  .work-shell :global(.format-table-wrap) { overflow-x: auto; }
  .work-shell :global(table) { border-collapse: collapse; width: 100%; font-size: .98rem; }
  .work-shell :global(th), .work-shell :global(td) { text-align: left; padding: 14px; border-bottom: 1px solid #ddd; }
  .work-shell :global(caption) { text-align: left; font-weight: 600; margin-bottom: 14px; }
  .work-shell :global(.verification) { font-size: .9rem; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
  footer { margin-top: 70px; padding-top: 24px; border-top: 1px solid #e5e7eb; font-size: .9rem; }
  .skip { position: absolute; left: -10000px; } .skip:focus { left: 16px; top: 8px; background: white; }
  @media (max-width: 600px) { .work-shell { padding: 24px 20px; } header { margin-bottom: 40px; } nav { gap: 16px; } .work-shell :global(th), .work-shell :global(td) { padding: 10px 6px; } }
</style>
