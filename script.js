// Typed role effect
  const roles = ["Full Stack Developer", "Web Developer", "Problem Solver"];
  const typedEl = document.getElementById('typed-role');
  let ri = 0, ci = 0, deleting = false;
  function tick(){
    const word = roles[ri];
    if(!deleting){
      ci++;
      typedEl.textContent = word.slice(0, ci);
      if(ci === word.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      typedEl.textContent = word.slice(0, ci);
      if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navA = document.querySelectorAll('.nav-links a');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        navA.forEach(a=>a.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if(link) link.classList.add('active');
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach(s=>io.observe(s));

  // Animate skill bars when visible
  const skillRows = document.querySelectorAll('.skill-row');
  const skillIO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const fill = e.target.querySelector('.bar-fill');
        fill.style.width = e.target.dataset.pct + '%';
        skillIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  skillRows.forEach(r=>skillIO.observe(r));

  // Contact form (front-end only demo)