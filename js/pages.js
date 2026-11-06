/* Page-specific rendering. Content comes from data.js. */
(function () {
  const page = document.body.dataset.page;
  const $ = (id) => document.getElementById(id);

  const mediaCard = (c, href) => `
    <a class="mcard" href="${href || "#"}" ${href ? "" : 'tabindex="-1" aria-disabled="true"'}>
      ${ph(c.tone, c.title, c.img)}
      <div class="body"><span class="tag">${esc(c.tag)}</span><strong>${esc(c.title)}</strong>
      ${c.desc ? `<span class="desc">${esc(c.desc)}</span>` : ""}</div>
    </a>`;

  /* Carousel: shows N cards per page (N depends on screen width). */
  function carousel(root, items, render) {
    const track = root.querySelector(".carousel-track");
    const dots = root.querySelector(".dots");
    let start = 0;
    const perPage = () => (innerWidth > 1100 ? 4 : innerWidth > 760 ? 2 : 1);
    const pages = () => Math.ceil(items.length / perPage());
    function draw() {
      const n = perPage();
      start = Math.min(start, (pages() - 1) * n);
      start = Math.floor(start / n) * n;
      track.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
      track.innerHTML = items.slice(start, start + n).map(render).join("");
      hydratePlaceholders(track);
      dots.innerHTML = Array.from({ length: pages() }, (_, i) =>
        `<button aria-label="Go to page ${i + 1}" aria-current="${i === Math.floor(start / n)}"></button>`).join("");
      dots.querySelectorAll("button").forEach((b, i) => b.addEventListener("click", () => { start = i * n; draw(); }));
    }
    const step = (d) => { const n = perPage(); const p = (Math.floor(start / n) + d + pages()) % pages(); start = p * n; draw(); };
    root.querySelector(".prev").addEventListener("click", () => step(-1));
    root.querySelector(".next").addEventListener("click", () => step(1));
    let t; addEventListener("resize", () => { clearTimeout(t); t = setTimeout(draw, 150); });
    draw();
  }

  /* Scroll-reveal for blocks marked .reveal */
  function reveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.05 });
    els.forEach((e) => io.observe(e));
  }

  const chips = (arr) => `<div class="chips">${arr.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;
  const projectRows = (list) => list.map((p) => `
    <div class="hcard">${ph(p.tone, p.title, p.img)}<div><span class="tag">${esc(p.tag)}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div></div>`).join("");

  /* ---------------- HOME ---------------- */
  function home() {
    const quick = [
      { title: "Work experience", text: "Nokia, Transworld and LCC International: 15+ years of delivery and operations.", href: "experience.html", tone: "blue" },
      { title: "Core technical skills", text: "Optical, submarine, NOC/TAC, networking, testing and automation.", href: "#skills", tone: "purple" },
      { title: "Certifications", text: "PMP, CCNP, Nokia Services Expert, Nokia Optical Professional and more.", href: "#certs", tone: "teal" },
      { title: "Contact me", text: "Open for relocation. Let's talk about your next network.", href: "contact.html", tone: "amber" }
    ];
    $("quick").innerHTML = quick.map((q) => `
      <a class="hcard" href="${q.href}">${ph(q.tone, q.title)}<div><h3>${esc(q.title)}</h3><p>${esc(q.text)}</p></div></a>`).join("");

    $("about-text").innerHTML = ABOUT.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
    $("stats").innerHTML = ABOUT.stats.map(([n, l]) => `<div class="stat"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("");
    $("facts").innerHTML = ABOUT.facts.map((f) => `<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join("");

    $("skills-grid").innerHTML = SKILLS.map((c) => `
      <section class="card skill-cat reveal"><div class="cat-head">${icon(c.icon)}<h3>${esc(c.category)}</h3></div>${chips(c.items)}</section>`).join("");
    $("platforms").innerHTML = PLATFORMS.map((p) => `
      <div class="platform"><strong>${esc(p.vendor)}</strong><span>${esc(p.detail)}</span></div>`).join("");

    $("banner-cards").innerHTML = HIGHLIGHTS.map((h) => mediaCard(h, "experience.html")).join("");
    carousel($("certs-carousel"), CERTS, (c) => mediaCard(c));

    $("tools").innerHTML = QUICK_LINKS.map((l) => `
      <li><a href="${esc(l.href)}" ${l.external ? 'target="_blank" rel="noopener"' : ""}>${icon(l.icon)}<span>${esc(l.label)}</span></a></li>`).join("");
    reveal();
  }

  /* ---------------- EXPERIENCE ---------------- */
  function experience() {
    $("timeline").innerHTML = EXPERIENCE.map((j, i) => `
      <article class="card job reveal" id="exp-${i}">
        <div class="job-head"><div><h3>${esc(j.role)}</h3><div class="job-company">${esc(j.company)} · ${esc(j.location)}</div></div>
        <div class="job-period">${esc(j.period)}</div></div>
        <p style="margin-top:8px">${esc(j.summary)}</p>
        <details ${i === 0 ? "open" : ""}><summary>Key responsibilities &amp; achievements (${j.bullets.length})</summary>
          <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></details>
        ${chips(j.tags)}
      </article>`).join("");
    const all = () => document.querySelectorAll("#timeline details");
    $("expand").addEventListener("click", () => all().forEach((d) => (d.open = true)));
    $("collapse").addEventListener("click", () => all().forEach((d) => (d.open = false)));

    $("projects-list").innerHTML = projectRows(PROJECTS);
    $("edu-list").innerHTML = EDUCATION.map((e) => `
      <div class="card"><h3>${esc(e.degree)}</h3><div class="job-company">${esc(e.school)}</div><div class="job-period">${esc(e.period)}</div></div>`).join("");
    $("affiliations").innerHTML = AFFILIATIONS.map((a) => `<li class="plain">${icon("check")}<span>${esc(a)}</span></li>`).join("");
    $("languages").innerHTML = LANGUAGES.map(([l, v]) => `<div><dt>${esc(l)}</dt><dd>${esc(v)}</dd></div>`).join("");
    $("stat-roles").textContent = EXPERIENCE.length;
    reveal();
  }

  /* ---------------- CONTACT ---------------- */
  function contact() {
    const form = $("contact-form");
    const status = $("status");
    const rules = {
      name: (v) => v.trim().length >= 2,
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message: (v) => v.trim().length >= 10
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      Object.keys(rules).forEach((k) => {
        const f = form.elements[k];
        const valid = rules[k](f.value);
        f.closest(".field").classList.toggle("invalid", !valid);
        f.setAttribute("aria-invalid", String(!valid));
        if (!valid && ok) { f.focus(); ok = false; }
      });
      if (!ok) return;
      const d = Object.fromEntries(new FormData(form));
      const subject = d.subject || "Message from your profile website";
      const body = `${d.message}\n\n— ${d.name} (${d.email})`;
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = "Thanks! Your email app should open with the message ready to send. If it doesn't, write to " + SITE.email + ".";
      status.classList.add("show");
      form.reset();
    });
    $("copy-email").addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      try { await navigator.clipboard.writeText(SITE.email); btn.textContent = "Copied!"; }
      catch (err) { btn.textContent = "Press Ctrl+C on the address"; }
      setTimeout(() => (btn.textContent = "Copy email address"), 2000);
    });
  }

  ({ home, experience, contact }[page] || (() => {}))();
  hydratePlaceholders();

  /* Content is built by script, so jump to #section links once it exists. */
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
})();
