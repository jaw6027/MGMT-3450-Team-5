import "./spa.css";

// CSS background URLs must resolve from the page, including on project sites.
const image = (name) => new URL(`${import.meta.env.BASE_URL}images/spa/${name}`, document.baseURI).href;
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.3"/></svg>';
const sun =
  '<svg viewBox="0 0 64 40" fill="none" aria-hidden="true"><path d="M5 34h54M17 34a15 15 0 0 1 30 0M32 3v8M10 13l6 6M54 13l-6 6M2 26l8 2m52-2-8 2M22 5l3 8m17-8-3 8" stroke="currentColor" stroke-width="1.2"/></svg>';
const flower =
  '<svg viewBox="0 0 100 100" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width=".7"><ellipse cx="50" cy="50" rx="16" ry="43"/><ellipse cx="50" cy="50" rx="16" ry="43" transform="rotate(45 50 50)"/><ellipse cx="50" cy="50" rx="16" ry="43" transform="rotate(90 50 50)"/><ellipse cx="50" cy="50" rx="16" ry="43" transform="rotate(135 50 50)"/><circle cx="50" cy="50" r="9"/></g></svg>';
document.documentElement.style.setProperty(
  "--ritual-image",
  `url("${image("rituals.webp")}")`,
);
const services = [
  {
    title: "Restorative massage",
    category: "RELEASE & RECONNECT",
    description:
      "Slow down, soften the edges, and make space for a little more ease.",
    detail:
      "A moment to let go of the everyday. Explore a massage experience shaped around your preferences, with a pace that feels right for you.",
  },
  {
    title: "Salt & stillness",
    category: "BREATHE & JUST BE",
    description:
      "A quiet sanctuary, a warm glow, and the simple luxury of doing less.",
    detail:
      "Settle into a quiet, salt-inspired space and take time to simply be. Ask our team about current salt and light experiences, what to expect, and how to prepare.",
  },
  {
    title: "Radiance rituals",
    category: "NOURISH & RENEW",
    description:
      "Thoughtful facial care that leaves you feeling refreshed, inside and out.",
    detail:
      "Discover a gentler ritual for your skin. Talk with our team about available facial experiences and personal preferences before planning your visit.",
  },
];

document.querySelector("#app").innerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <a class="wordmark" href="#home" aria-label="Salt Glow home">${sun}<span>SALT GLOW<small>SPA & WELLNESS</small></span></a>
  <nav class="desktop-nav" aria-label="Main navigation"><a class="active" href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
  <div class="header-actions"><button class="button button-outline header-book" data-book>BOOK A VISIT ${arrow}</button><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a><button data-book>Book a visit ${arrow}</button></nav>
</header>
<main id="main">
  <section class="hero" id="home" aria-labelledby="hero-title">
    <div class="hero-copy"><p class="eyebrow"><span></span> A LITTLE STILLNESS. A LITTLE SALT. A LOT OF YOU.</p><h1 id="hero-title">Your moment<br>to <em>unwind.</em></h1><p class="hero-description">Step away from the everyday. Settle into a sanctuary of calm, where thoughtful care is all about you.</p><button class="button button-brown" data-book>BOOK AN APPOINTMENT ${arrow}</button><a class="hero-explore" href="#services"><span class="scroll-circle">↓</span> EXPLORE YOUR MOMENT</a><div class="hero-flower">${flower}</div></div>
    <div class="hero-visual"><img class="hero-image" src="${image("retreat.webp")}" alt="Warm travertine spa interior with a tranquil soaking pool, ivory linens, and candlelit alcoves" fetchpriority="high" width="1536" height="1024"><div class="image-wash"></div><div class="photo-caption"><span>A SOFTER PACE.<br>A DEEPER BREATH.</span><span class="caption-line"></span><span>SALT GLOW<br>THE ART OF WELLBEING</span></div><div class="hero-stamp"><span>PAUSE. BREATHE. BLOOM.</span>${sun}<small>FIND YOUR GLOW</small></div></div>
  </section>
  <div class="ritual-strip" aria-label="Our approach"><span>Thoughtful care</span><i>✧</i><span>Natural inspiration</span><i>✧</i><span>Space to slow down</span><i>✧</i><span>Made for your moment</span></div>
  <section class="intro section-wrap" id="about" aria-labelledby="intro-title"><div class="intro-label"><p class="eyebrow">WELCOME TO SALT GLOW</p><span class="little-sun">${sun}</span></div><div class="intro-body"><h2 id="intro-title">A peaceful retreat.<br>A return to <em>yourself.</em></h2><div class="intro-columns"><p>We believe feeling good begins with slowing down. With a love for natural textures, warm spaces, and meaningful care, Salt Glow is an invitation to reconnect with what matters.</p><p>From small moments of stillness to deeply personal rituals, discover a gentler way to care for yourself. Come as you are. Leave with a little more glow.</p></div><a class="text-link" href="#philosophy">THE SALT GLOW PHILOSOPHY ${arrow}</a></div></section>
  <section class="services section-wrap" id="services" aria-labelledby="services-title"><div class="section-top"><div><p class="eyebrow">CARE, CURATED FOR YOU</p><h2 id="services-title">Find your <em>ritual.</em></h2></div><p>However you choose to unwind,<br>there’s a moment here for you.</p></div><div class="service-grid">${services.map((s, i) => `<article class="service-card"><button class="service-image service-image-${i}" data-service="${i}" aria-label="Explore ${s.title}"><span class="service-number">0${i + 1}</span><span class="service-image-arrow">${arrow}</span></button><p class="eyebrow">${s.category}</p><h3><button class="service-title" data-service="${i}">${s.title}</button></h3><p class="service-description">${s.description}</p><button class="text-link" data-service="${i}">EXPLORE RITUAL ${arrow}</button></article>`).join("")}</div><p class="service-note">Your experience is personal. Our team will confirm current treatments and availability with you.</p></section>
  <section class="philosophy" id="philosophy"><div class="philosophy-image"><img src="${image("retreat.webp")}" alt="Natural stone, soft light, and a still pool in a tranquil spa concept" loading="lazy" width="1536" height="1024"><span class="image-label">INSPIRED BY NATURE. CENTERED ON YOU.</span></div><div class="philosophy-copy"><p class="eyebrow">THE SALT GLOW WAY</p><h2>Less rush.<br>More <em>ritual.</em></h2><p>Sometimes, the most restorative thing you can do is give yourself permission to pause.</p><p>Here, we’re inspired by the quiet beauty of nature. The warmth of stone. The softness of linen. The feeling of being cared for. Every detail invites you to be present.</p><a class="text-link" href="#contact">LET’S FIND YOUR MOMENT ${arrow}</a>${flower}</div></section>
  <section class="pause-note section-wrap"><span class="eyebrow">A GENTLE REMINDER</span><p>You don’t have to do more.<br>Sometimes, you just have to <em>be.</em></p><span class="small-star">✧</span></section>
  <section class="contact section-wrap" id="contact"><div><p class="eyebrow">YOUR NEXT MOMENT STARTS HERE</p><h2>A little time.<br><em>Just for you.</em></h2><p>Let the world wait a little. We’d love to help you find your perfect pause.</p><button class="button button-brown" data-book>BOOK AN APPOINTMENT ${arrow}</button></div><div class="contact-details"><span class="little-sun">${sun}</span><h3>Let’s connect.</h3><p>Have a question, or planning your first visit?<br>Start a conversation with our team.</p><a class="text-link" href="https://www.instagram.com/saltglow661/" target="_blank" rel="noopener noreferrer">@SALTGLOW661 ${arrow}<span class="sr-only"> (opens in a new tab)</span></a><p class="contact-fine">Visits and treatment details are personally confirmed.</p></div></section>
</main>
<footer class="site-footer"><div class="footer-top"><a class="wordmark" href="#home" aria-label="Salt Glow home">${sun}<span>SALT GLOW<small>SPA & WELLNESS</small></span></a><p>A softer pace. A warmer welcome.<br>A little more glow.</p><a class="back-top" href="#home">BACK TO TOP <span>↑</span></a></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Salt Glow. All rights reserved.</span><span>Made for moments of wellbeing.</span><a href="?studio">TEAM STUDIO ${arrow}</a></div><p class="concept-note">Spa imagery is illustrative. Please confirm services and availability with our team.</p></footer>
<dialog class="booking-dialog" id="booking-dialog" aria-labelledby="booking-title"><button class="dialog-close" aria-label="Close appointment planner">×</button><div id="booking-content"></div></dialog>
<dialog class="ritual-dialog" id="ritual-dialog" aria-labelledby="ritual-title"><button class="dialog-close" aria-label="Close ritual details">×</button><div id="ritual-content"></div></dialog>
<div class="spa-toast" role="status" aria-live="polite"></div>`;

const bookingDialog = document.querySelector("#booking-dialog");
const ritualDialog = document.querySelector("#ritual-dialog");
let appointmentText = "";
const dialogTriggers = new WeakMap();
function showDialog(dialog, trigger = document.activeElement) {
  dialogTriggers.set(dialog, trigger);
  dialog.showModal();
  document.body.classList.add("dialog-open");
}
for (const dialog of [bookingDialog, ritualDialog]) {
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
  dialog.addEventListener("close", () => {
    if (!document.querySelector("dialog[open]")) {
      document.body.classList.remove("dialog-open");
      dialogTriggers.get(dialog)?.focus();
    }
  });
}
function localDate() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function openBooking(service = "") {
  const trigger = ritualDialog.open
    ? dialogTriggers.get(ritualDialog)
    : document.activeElement;
  if (ritualDialog.open) ritualDialog.close();
  document.querySelector("#booking-content").innerHTML =
    `<p class="eyebrow">MAKE ROOM FOR YOU</p><h2 id="booking-title">Plan your <em>pause.</em></h2><p class="dialog-intro">Tell us what you have in mind, then send your request to our team on Instagram. We’ll personally confirm treatments, pricing, and availability.</p><form id="appointment-form"><label>Your name<input name="name" autocomplete="given-name" placeholder="First name" required maxlength="80"></label><label>Your ritual<select name="service" required><option value="">Choose an experience</option>${services.map((s) => `<option${s.title === service ? " selected" : ""}>${s.title}</option>`).join("")}<option>Help me choose</option></select></label><div class="form-row"><label>Preferred date<input type="date" name="date" min="${localDate()}" required></label><label>Preferred time<select name="time" required><option value="">Choose a time</option><option>Morning</option><option>Afternoon</option><option>Flexible</option></select></label></div><button class="button button-brown" type="submit">PREPARE MY REQUEST ${arrow}</button><p class="form-fine">This planner doesn’t reserve an appointment or send your details. Share your request with our team to confirm your visit.</p></form>`;
  document
    .querySelector("#appointment-form")
    .addEventListener("submit", prepareRequest);
  showDialog(bookingDialog, trigger);
}
function prepareRequest(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (form.elements.date.value < localDate()) {
    form.elements.date.setCustomValidity(
      "Please choose today or a future date.",
    );
    form.elements.date.reportValidity();
    form.elements.date.oninput = () => form.elements.date.setCustomValidity("");
    return;
  }
  const d = new FormData(form);
  const date = new Date(`${d.get("date")}T12:00:00`).toLocaleDateString(
    undefined,
    { month: "long", day: "numeric", year: "numeric" },
  );
  appointmentText = `Hello Salt Glow! I’d love to plan a visit.\nName: ${d.get("name")}\nRitual: ${d.get("service")}\nPreferred date: ${date}\nPreferred time: ${d.get("time")}\nPlease let me know current availability and pricing. Thank you!`;
  document.querySelector("#booking-content").innerHTML =
    `<span class="confirmation-sun">${sun}</span><p class="eyebrow">ONE STEP CLOSER TO STILLNESS</p><h2 id="booking-title">Your moment,<br><em>in the making.</em></h2><p class="dialog-intro">Your request is ready. Copy it below, then paste it into a message to <strong>@saltglow661</strong> on Instagram. Your visit is confirmed only when our team replies.</p><label class="request-label">Your appointment request<textarea id="request-text" rows="8" readonly></textarea></label><button class="button button-brown" id="copy-request">COPY MY REQUEST ${arrow}</button><a class="button button-outline instagram-continue" href="https://www.instagram.com/saltglow661/" target="_blank" rel="noopener noreferrer">CONTINUE ON INSTAGRAM ${arrow}<span class="sr-only"> (opens in a new tab)</span></a><p class="copy-status" role="status"></p><button class="text-link" id="plan-again">START A NEW REQUEST ${arrow}</button>`;
  document.querySelector("#request-text").value = appointmentText;
  document
    .querySelector("#copy-request")
    .addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(appointmentText);
        document.querySelector(".copy-status").textContent =
          "Copied. Paste your request into an Instagram message.";
      } catch {
        const textarea = document.querySelector("#request-text");
        textarea.focus();
        textarea.select();
        document.querySelector(".copy-status").textContent =
          "Your request is selected. Copy it, then paste it into Instagram.";
      }
    });
  document.querySelector("#plan-again").addEventListener("click", () => {
    bookingDialog.close();
    openBooking();
  });
  document.querySelector("#copy-request").focus();
}
document.querySelectorAll("[data-book]").forEach((b) =>
  b.addEventListener("click", () => {
    closeMenu();
    openBooking();
  }),
);
document.querySelectorAll("[data-service]").forEach((b) =>
  b.addEventListener("click", () => {
    const i = Number(b.dataset.service),
      s = services[i];
    document.querySelector("#ritual-content").innerHTML =
      `<div class="ritual-detail-image service-image-${i}"></div><div class="ritual-detail-copy"><p class="eyebrow">${s.category}</p><h2 id="ritual-title">${s.title}</h2><p>${s.detail}</p><p class="ritual-fine">Our team will confirm available treatments, duration, and pricing before you book.</p><button class="button button-brown" id="book-ritual">PLAN MY VISIT ${arrow}</button></div>`;
    document
      .querySelector("#book-ritual")
      .addEventListener("click", () => openBooking(s.title));
    showDialog(ritualDialog);
  }),
);
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
function closeMenu() {
  mobileNav.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  mobileNav.hidden = !open;
});
mobileNav
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !mobileNav.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});
matchMedia("(min-width: 761px)").addEventListener("change", (e) => {
  if (e.matches) closeMenu();
});
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(
      ".intro, .section-top, .service-card, .philosophy-copy, .pause-note, .contact",
    )
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  const navObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          document
            .querySelectorAll(".desktop-nav a")
            .forEach((a) =>
              a.classList.toggle("active", a.hash === `#${entry.target.id}`),
            );
      }),
    { rootMargin: "-15% 0px -60% 0px" },
  );
  ["home", "services", "about", "contact"].forEach((id) =>
    navObserver.observe(document.getElementById(id)),
  );
}
