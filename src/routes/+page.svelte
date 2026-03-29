
<script module>
  export const prerender = true;
</script>

<main class="container">
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Stepan Kukharskiy</h1>
        <p class="tagline">Architect, computational designer, and technical founder.</p>
      </div>
      <div class="hero-image">
        <img src="/Stepan_Kukharskiy.jpg" alt="Stepan Kukharskiy" />
      </div>
    </div>
    
    <p class="intro">
      I'm the co-founder of <strong>SA lab</strong> and currently building <strong>Spellshape</strong> — an AI-native system for generating editable parametric 3D, which I see as a first step toward a design world model.
    </p>
    
    <p class="intro">
      I've been working with parametric design since 2010, across architecture, computation, and interactive 3D. My work focuses on turning design intent into structured systems, spatial logic, and tools that remain editable, extensible, and buildable.
    </p>
  </section>

  <section class="what-i-do">
    <h2>What I Do</h2>
    <p>I work across computational architecture, procedural design, AI, and product development. Through SA lab, my architectural work has been published on platforms including ArchDaily and Designboom, and I also develop projects for virtual environments such as Decentraland and Worlds.</p>
  </section>

  <section class="selected-links">
    <h2>Selected Links</h2>
    <ul>
      <li><a href="https://www.archdaily.com/912669/flexse-sa-lab?fbclid=IwAR2q9RfUC_53yqwSQyqK7z4pInsldlQz3ZGTiGEVzxQ_21Z0hvWduV761v4" target="_blank" rel="noopener">ArchDaily</a></li>
      <li><a href="https://www.designboom.com/architecture/sa-lab-modular-trekking-lodge-iceland-under-yggdrasil-09-10-2016/" target="_blank" rel="noopener">Designboom</a></li>
      <li><a href="https://archinect.com/salab/project/crane-design-showroom" target="_blank" rel="noopener">Archinect</a></li>
      <li><a href="https://architizer.com/projects/crane-design-showroom/" target="_blank" rel="noopener">Architizer</a></li>
      <li><a href="https://github.com/StepanKukharskiy" target="_blank" rel="noopener">GitHub</a></li>
    </ul>
  </section>

  <section class="speaking">
    <p>Alongside product and design work, I give lectures, webinars, and workshops on computational design, AI workflows, and emerging spatial tools for international design communities including DesignMorphine and DigitalFUTURES.</p>
  </section>

  <section class="skills">
    <h2>Skills</h2>
    <p>Rhino, Grasshopper, Blender, Unity, Unreal Engine, Arduino, SvelteKit, Svelte, Firebase, Supabase, PocketBase, Python, JavaScript, TypeScript, Three.js, parametric design, procedural generation, computational geometry, real-time 3D, AI workflows, and interactive prototyping.</p>
  </section>

  <section class="connect">
    <h2>Get in Touch</h2>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/stepan-kukharskiy-25347342" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </section>
</main>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }
  
  .tagline {
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  
  .hero-content {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .hero-text {
    flex: 1;
  }
  
  .hero-image {
    flex-shrink: 0;
  }
  
  .hero-image img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .intro {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  
  .intro strong {
    color: #2563eb;
  }
  
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 3rem 0 1.5rem 0;
    color: #1a1a1a;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }
  
  .what-i-do p,
  .selected-links p,
  .speaking p,
  .skills p {
    font-size: 1.1rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  .social-links {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 2px solid #2563eb;
    border-radius: 6px;
    transition: all 0.2s ease;
  }
  
  .social-links a:hover {
    background: #2563eb;
    color: white;
  }
  
  a {
    color: #2563eb;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
    
    .hero h1 {
      font-size: 2rem;
    }
    
    .tagline {
      font-size: 1.1rem;
    }
    
    .hero-content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .hero-image img {
      width: 120px;
      height: 120px;
    }
    
    .social-links {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
