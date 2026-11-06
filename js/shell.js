/* Shared page frame: top bar, left rail, sub-navigation, footer, search. */
(function () {
  const ICONS = {
    grid: '<circle cx="5" cy="5" r="1.2"/><circle cx="12" cy="5" r="1.2"/><circle cx="19" cy="5" r="1.2"/><circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/><circle cx="5" cy="19" r="1.2"/><circle cx="12" cy="19" r="1.2"/><circle cx="19" cy="19" r="1.2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
    tools: '<path d="M14.7 6.3a4 4 0 005 5L13 18l-3 3-4-4 3-3z"/><path d="M5 9l4-4M3 5l3-2 2 2-2 3z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/>',
    network: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7v5M12 12l-6 5M12 12l6 5"/>',
    doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
    people: '<circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5M16 14.5c3 0 5.5 1.5 5.5 4.5"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
    left: '<path d="M15 5l-7 7 7 7"/>',
    right: '<path d="M9 5l7 7-7 7"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 012-2h9"/>'
  };
  window.icon = (name, cls) =>
    `<svg class="icon ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  window.esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const current = document.body.dataset.page;

  /* ----- Top bar ----- */
  const header = document.getElementById("shell-header");
  if (header) {
    header.outerHTML = `
    <header class="topbar">
      <a class="brand" href="index.html" aria-label="Home">
        ${icon("grid")}<span class="brand-mark">${esc(SITE.initials)}</span><span class="name">Portfolio</span>
      </a>
      <div class="search" role="search">
        ${icon("search")}
        <input id="search-input" type="search" placeholder="Search this site" aria-label="Search this site" autocomplete="off">
        <div class="search-results" id="search-results" role="listbox"></div>
      </div>
      <div class="top-actions">
        <a class="btn-icon" href="contact.html" aria-label="Contact me" title="Contact me">${icon("mail")}</a>
        <a class="btn-icon" href="${esc(SITE.cv)}" target="_blank" rel="noopener" aria-label="Download CV (PDF)" title="Download CV (PDF)">${icon("doc")}</a>
        ${SITE.linkedin ? `<a class="btn-icon" href="${esc(SITE.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">${icon("link")}</a>` : ""}
        <div class="top-user"><span class="uname">${esc(SITE.shortName)}</span><span class="avatar" aria-hidden="true">${SITE.photo ? `<img src="${esc(SITE.photo)}" alt="">` : esc(SITE.initials)}</span></div>
      </div>
    </header>`;
  }

  /* ----- Left rail ----- */
  const rail = document.getElementById("shell-rail");
  if (rail) {
    rail.outerHTML = `<nav class="rail" aria-label="Quick navigation">${PAGES.map(
      (p) => `<a href="${p.href}" ${p.id === current ? 'aria-current="page"' : ""}>${icon(p.icon)}<span>${p.label}</span></a>`
    ).join("")}</nav>`;
  }

  /* ----- Sub navigation ----- */
  const sub = document.getElementById("shell-subnav");
  if (sub) {
    sub.outerHTML = `
    <div class="subnav">
      <a class="site-id" href="index.html"><span class="logo-mark" aria-hidden="true">${esc(SITE.initials)}</span><strong>${esc(SITE.name)}</strong></a>
      <nav aria-label="Main">${PAGES.map(
        (p) => `<a href="${p.href}" ${p.id === current ? 'aria-current="page"' : ""}>${p.label}</a>`
      ).join("")}</nav>
      <div class="meta"><span>${esc(SITE.title)}</span>
        <button class="fav" id="fav" aria-pressed="false">${icon("star")}<span>Add to favorites</span></button>
      </div>
    </div>`;
  }

  /* ----- Footer ----- */
  const footer = document.getElementById("shell-footer");
  if (footer) {
    footer.outerHTML = `
    <footer class="footer">
      <span>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}</span>
      <nav aria-label="Footer">
        <a href="index.html">Home</a><a href="contact.html">Contact</a><a href="#top">Back to top</a>
      </nav>
    </footer>`;
  }

  /* ----- Fill [data-site] placeholders (e.g. email, phone) ----- */
  document.querySelectorAll("[data-site]").forEach((el) => {
    const v = SITE[el.dataset.site];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-site-href]").forEach((el) => {
    const [key, prefix = ""] = el.dataset.siteHref.split("|");
    if (SITE[key]) el.setAttribute("href", prefix + SITE[key]);
  });

  /* ----- Favorite toggle (remembered in this browser only) ----- */
  const fav = document.getElementById("fav");
  if (fav) {
    const KEY = "profile-fav";
    const paint = (on) => {
      fav.setAttribute("aria-pressed", String(on));
      fav.querySelector("span").textContent = on ? "Added to favorites" : "Add to favorites";
    };
    try { paint(localStorage.getItem(KEY) === "1"); } catch (e) { /* storage blocked */ }
    fav.addEventListener("click", () => {
      const on = fav.getAttribute("aria-pressed") !== "true";
      paint(on);
      try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) { /* ignore */ }
    });
  }

  /* ----- Site search ----- */
  const input = document.getElementById("search-input");
  const box = document.getElementById("search-results");
  if (input && box) {
    const index = [
      ...PAGES.map((p) => ({ label: p.label, sub: p.desc, href: p.href })),
      ...EXPERIENCE.map((e) => ({ label: e.role + " · " + e.company, sub: "Experience · " + e.period, href: "experience.html", extra: e.tags.join(" ") + " " + e.summary + " " + e.bullets.join(" ") })),
      ...SKILLS.flatMap((c) => c.items.map((i) => ({ label: i, sub: "Skill · " + c.category, href: "index.html#skills" }))),
      ...PLATFORMS.map((p) => ({ label: p.vendor + " platforms", sub: p.detail, href: "index.html#skills" })),
      ...PROJECTS.map((p) => ({ label: p.title, sub: "Major project", href: "experience.html#projects", extra: p.desc })),
      ...CERTS.map((c) => ({ label: c.title, sub: "Certification · " + c.tag, href: "index.html#certs" })),
      ...EDUCATION.map((e) => ({ label: e.degree, sub: "Education · " + e.school, href: "experience.html#education" }))
    ];
    const run = () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { box.classList.remove("open"); return; }
      const hits = index.filter((r) => (r.label + " " + r.sub + " " + (r.extra || "")).toLowerCase().includes(q)).slice(0, 8);
      box.innerHTML = hits.length
        ? hits.map((r) => `<a href="${r.href}" role="option">${esc(r.label)}<small>${esc(r.sub)}</small></a>`).join("")
        : `<div class="none">No results for "${esc(input.value)}"</div>`;
      box.classList.add("open");
    };
    input.addEventListener("input", run);
    input.addEventListener("focus", run);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { box.classList.remove("open"); input.blur(); }
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search")) box.classList.remove("open");
    });
  }

  /* ----- Placeholder images: show a real image once a path is set ----- */
  window.hydratePlaceholders = function (root) {
    (root || document).querySelectorAll(".ph:not([data-ready])").forEach((el) => {
      el.dataset.ready = "1";
      const src = el.dataset.src;
      const label = el.dataset.ph || "Image placeholder";
      if (src) {
        el.insertAdjacentHTML("afterbegin", `<img src="${esc(src)}" alt="${esc(label)}" loading="lazy">`);
      } else {
        el.setAttribute("role", "img");
        el.setAttribute("aria-label", label + " (placeholder)");
        el.insertAdjacentHTML("beforeend", `${icon("image")}<small>${esc(label)}</small>`);
      }
    });
  };
  window.ph = (tone, label, src, extra) =>
    `<div class="ph ph--${tone || "blue"} ${extra || ""}" data-ph="${esc(label)}" data-src="${esc(src || "")}"></div>`;
})();
