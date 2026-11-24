import "./spa.css";

// CSS background URLs must resolve from the page, including on project sites.
const image = (name) => new URL(`${import.meta.env.BASE_URL}images/spa/${name}`, document.baseURI).href;
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.3"/></svg>';
const logo = `<img class="brand-logo" src="${image("salt-glow-logo.png")}" alt="Salt Glow — Salt + Light Therapy" width="1254" height="1254">`;
const flower =
  '<svg viewBox="0 0 100 100" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width=".7"><ellipse cx="50" cy="50" rx="16" ry="43"/><ellipse cx="50" cy="50" rx="16" ry="43" transform="rotate(45 50 50)"/><ellipse cx="50" cy="50" rx="16" ry="43" transform="rotate(90 50 50)"/><ellipse cx="50" cy="50" rx="16" ry="43" transform="rotate(135 50 50)"/><circle cx="50" cy="50" r="9"/></g></svg>';
document.documentElement.style.setProperty(
  "--ritual-image",
  `url("${image("rituals.webp")}")`,
);
const services = [
  {
    title: "LightStim Red Light Therapy Session",
    category: "LIGHT & UNWIND",
    description: "Settle in for a quiet moment under the warm glow of LightStim red light.",
    detail: "Make time for a LightStim Red Light Therapy Session in a calm, welcoming setting. Our team will explain the experience, answer your questions, and confirm session details before your appointment.",
  },
  {
    title: "Salt Cave Therapy Session",
    category: "SALT & STILLNESS",
    description: "Step into a tranquil salt cave and give yourself permission to slow down.",
    detail: "Take a peaceful pause with a Salt Cave Therapy Session. Relax in a salt-inspired environment, enjoy the softer pace, and ask our team what to expect and how to prepare for your visit.",
  },
  {
    title: "Private Shopping Experience",
    category: "DISCOVER & DELIGHT",
    description: "Discover thoughtful finds with personal attention and time to explore at your own pace.",
    detail: "Enjoy a Private Shopping Experience with personal attention from the Salt Glow team. Browse available clothing, accessories, and wellness-inspired finds in a relaxed setting. Ask us about current selections and appointment availability.",
  },
];

document.querySelector("#app").innerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <a class="wordmark" href="#home" aria-label="Salt Glow home">${logo}</a>
  <nav class="desktop-nav" aria-label="Main navigation"><a class="active" href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
  <div class="header-actions"><button class="button button-outline header-book" data-book>BOOK AN APPOINTMENT ${arrow}</button><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a><button data-book>Book an appointment ${arrow}</button></nav>
</header>
<main id="main">
  <section class="hero" id="home" aria-labelledby="hero-title">
    <div class="hero-copy"><p class="eyebrow"><span></span> A LITTLE STILLNESS. A LITTLE SALT. A LOT OF YOU.</p><h1 id="hero-title">Elevate your<br><em>everyday.</em></h1><p class="hero-description">Step away from the everyday. Settle into a sanctuary of calm, where thoughtful care is all about you.</p><button class="button button-brown" data-book>BOOK AN APPOINTMENT ${arrow}</button><a class="hero-explore" href="#services"><span class="scroll-circle">↓</span> EXPLORE YOUR MOMENT</a><div class="hero-flower">${flower}</div></div>
    <div class="hero-visual"><img class="hero-image" src="${image("retreat.webp")}" alt="Warm travertine spa interior with a tranquil soaking pool, ivory linens, and candlelit alcoves" fetchpriority="high" width="1536" height="1024"><div class="image-wash"></div><div class="photo-caption"><span>A SOFTER PACE.<br>A DEEPER BREATH.</span><span class="caption-line"></span><span>SALT GLOW<br>THE ART OF WELLBEING</span></div><div class="hero-stamp"><span>PAUSE. BREATHE. BLOOM.</span>${logo}<small>FIND YOUR GLOW</small></div></div>
  </section>
  <div class="ritual-strip" aria-label="Our approach"><span>Thoughtful care</span><i>✧</i><span>Natural inspiration</span><i>✧</i><span>Space to slow down</span><i>✧</i><span>Made for your moment</span></div>
  <section class="intro section-wrap" id="about" aria-labelledby="intro-title"><div class="intro-label"><p class="eyebrow">WELCOME TO SALT GLOW</p><span class="little-sun">${logo}</span></div><div class="intro-body"><h2 id="intro-title">A peaceful retreat.<br>A return to <em>yourself.</em></h2><div class="intro-columns"><p>We believe feeling good begins with slowing down. With a love for natural textures, warm spaces, and meaningful care, Salt Glow is an invitation to reconnect with what matters.</p><p>From small moments of stillness to deeply personal rituals, discover a gentler way to care for yourself. Come as you are. Leave with a little more glow.</p></div><a class="text-link" href="#philosophy">THE SALT GLOW PHILOSOPHY ${arrow}</a></div></section>
  <section class="services section-wrap" id="services" aria-labelledby="services-title"><div class="section-top"><div><p class="eyebrow">CARE, CURATED FOR YOU</p><h2 id="services-title">Find your <em>ritual.</em></h2></div><p>However you choose to unwind,<br>there’s a moment here for you.</p></div><div class="service-grid">${services.map((s, i) => `<article class="service-card"><button class="service-image service-image-${i}" data-service="${i}" aria-label="Explore ${s.title}"><span class="service-number">0${i + 1}</span><span class="service-image-arrow">${arrow}</span></button><p class="eyebrow">${s.category}</p><h3><button class="service-title" data-service="${i}">${s.title}</button></h3><p class="service-description">${s.description}</p><button class="text-link" data-service="${i}">EXPLORE RITUAL ${arrow}</button></article>`).join("")}</div><p class="service-note">Your experience is personal. Our team will confirm current treatments and availability with you.</p></section>
  <section class="philosophy" id="philosophy"><div class="philosophy-image"><img src="${image("retreat.webp")}" alt="Natural stone, soft light, and a still pool in a tranquil spa concept" loading="lazy" width="1536" height="1024"><span class="image-label">INSPIRED BY NATURE. CENTERED ON YOU.</span></div><div class="philosophy-copy"><p class="eyebrow">THE SALT GLOW WAY</p><h2>Less rush.<br>More <em>ritual.</em></h2><p>Sometimes, the most restorative thing you can do is give yourself permission to pause.</p><p>Here, we’re inspired by the quiet beauty of nature. The warmth of stone. The softness of linen. The feeling of being cared for. Every detail invites you to be present.</p><a class="text-link" href="#contact">LET’S FIND YOUR MOMENT ${arrow}</a>${flower}</div></section>
  <section class="pause-note section-wrap"><span class="eyebrow">A GENTLE REMINDER</span><p>You don’t have to do more.<br>Sometimes, you just have to <em>be.</em></p><span class="small-star">✧</span></section>
  <section class="contact section-wrap" id="contact"><div><p class="eyebrow">YOUR NEXT MOMENT STARTS HERE</p><h2>A little time.<br><em>Just for you.</em></h2><p>Let the world wait a little. We’d love to help you find your perfect pause.</p><button class="button button-brown" data-book>BOOK AN APPOINTMENT ${arrow}</button></div><div class="contact-details"><span class="little-sun">${logo}</span><h3>Let’s connect.</h3><p>Have a question, or planning your first visit?<br>Start a conversation with our team.</p><a class="text-link" href="https://www.instagram.com/saltglow661/" target="_blank" rel="noopener noreferrer">@SALTGLOW661 ${arrow}<span class="sr-only"> (opens in a new tab)</span></a><p class="contact-fine">Visits and treatment details are personally confirmed.</p></div></section>
</main>
<footer class="site-footer"><div class="footer-top"><a class="wordmark" href="#home" aria-label="Salt Glow home">${logo}</a><p>A softer pace. A warmer welcome.<br>A little more glow.</p><a class="back-top" href="#home">BACK TO TOP <span>↑</span></a></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Salt Glow. All rights reserved.</span><span>Made for moments of wellbeing.</span></div><p class="concept-note">Spa imagery is illustrative. Please confirm services and availability with our team.</p></footer>
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
  document.querySelector("#booking-content").innerHTML = `
    <p class="eyebrow">MAKE ROOM FOR YOU</p>
    <h2 id="booking-title">Plan your <em>pause.</em></h2>
    <p class="dialog-intro">Choose your experience and preferred appointment. Our team will personally confirm availability, pricing, and any standing arrangement.</p>
    <form id="appointment-form">
      <fieldset class="booking-section"><legend>Your details</legend>
        <div class="form-row">
          <label for="first-name">First name<input id="first-name" name="firstName" autocomplete="given-name" required maxlength="80"></label>
          <label for="last-name">Last name<input id="last-name" name="lastName" autocomplete="family-name" required maxlength="80"></label>
        </div>
        <label for="booking-phone">Phone number<input id="booking-phone" type="tel" inputmode="tel" name="phone" autocomplete="tel" placeholder="(555) 123-4567" required maxlength="40"></label>
        <label for="booking-email">Email<input id="booking-email" type="email" name="email" autocomplete="email" placeholder="you@example.com" required maxlength="254"></label>
      </fieldset>
      <fieldset class="booking-section"><legend>Your appointment</legend>
        <label for="booking-service">Service<select id="booking-service" name="service" required><option value="">Choose your service</option>${services.map(s => `<option${s.title === service ? " selected" : ""}>${s.title}</option>`).join("")}</select></label>
        <div class="shopping-fields" id="shopping-fields" hidden>
          <label for="shopping-comments">Occasion or style you’re shopping for<textarea id="shopping-comments" name="shoppingComments" rows="3" maxlength="1000" placeholder="Tell us about the occasion, styles, colors, or pieces you’d love to explore." aria-describedby="shopping-help" disabled></textarea></label>
          <p class="field-help" id="shopping-help">Help us pull options before you arrive. If you’re unsure, let us know you’d like some inspiration.</p>
        </div>
        <div class="form-row">
          <label for="booking-date">Preferred date<input id="booking-date" type="date" name="date" min="${localDate()}" required></label>
          <label for="booking-time">Preferred time<input id="booking-time" type="time" name="time" required></label>
        </div>
        <p class="field-help">Choose the date and time you’d like to come in. Our team will confirm the opening with you.</p>
      </fieldset>
      <div class="standing-option">
        <label class="checkbox-label" for="standing-appointment"><input id="standing-appointment" type="checkbox" name="standing" aria-controls="standing-fields" aria-describedby="standing-help"><span>Make this a standing appointment</span></label>
        <p class="field-help" id="standing-help">Request a recurring visit at your preferred time.</p>
        <div id="standing-fields" hidden>
          <label for="booking-frequency">How often?<select id="booking-frequency" name="frequency" required disabled><option value="weekly">Every week</option><option value="fortnightly">Every two weeks</option><option value="four-weekly">Every four weeks</option><option value="monthly">Every month (same date)</option></select></label>
          <p class="field-help">The date above is your first visit. Weekly visits repeat on the same weekday; monthly visits use the same date. Recurring appointments are arranged with our team.</p>
        </div>
      </div>
      <button class="button button-brown" type="submit">PREPARE MY REQUEST ${arrow}</button>
      <p class="form-fine">All fields shown are required except the standing-appointment option. Your details stay in this form until you choose to copy and share them. This planner doesn’t send your request or reserve an appointment.</p>
    </form>`;
  const form = document.querySelector("#appointment-form");
  const updateShopping = () => {
    const isShopping = form.elements.service.value === "Private Shopping Experience";
    document.querySelector("#shopping-fields").hidden = !isShopping;
    form.elements.shoppingComments.disabled = !isShopping;
    form.elements.shoppingComments.required = isShopping;
  };
  form.elements.service.addEventListener("change", updateShopping);
  updateShopping();
  form.elements.standing.addEventListener("change", () => {
    const standing = form.elements.standing.checked;
    document.querySelector("#standing-fields").hidden = !standing;
    form.elements.frequency.disabled = !standing;
  });
  form.addEventListener("input", () => {
    for (const field of [form.elements.firstName, form.elements.lastName, form.elements.phone, form.elements.date, form.elements.time, form.elements.shoppingComments]) field.setCustomValidity("");
  });
  form.addEventListener("submit", prepareRequest);
  showDialog(bookingDialog, trigger);
}
function prepareRequest(e) {
  e.preventDefault();
  const form = e.currentTarget;
  for (const field of [form.elements.firstName, form.elements.lastName, form.elements.shoppingComments]) {
    if (!field.disabled && field.required && !field.value.trim()) {
      field.setCustomValidity("Please enter a response.");
      field.reportValidity();
      return;
    }
  }
  const phoneDigits = form.elements.phone.value.replace(/\D/g, "");
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    form.elements.phone.setCustomValidity("Please enter a phone number with 7 to 15 digits, including a country code if needed.");
    form.elements.phone.reportValidity();
    return;
  }
  const requestedDateTime = new Date(`${form.elements.date.value}T${form.elements.time.value}`);
  if (!Number.isFinite(requestedDateTime.getTime()) || requestedDateTime <= new Date()) {
    form.elements.time.setCustomValidity("Please choose a future date and time.");
    form.elements.time.reportValidity();
    return;
  }
  const d = new FormData(form);
  const date = requestedDateTime.toLocaleDateString(undefined, { weekday:"long", month:"long", day:"numeric", year:"numeric" });
  const time = requestedDateTime.toLocaleTimeString(undefined, { hour:"numeric", minute:"2-digit" });
  const frequencies = { weekly:"Every week", fortnightly:"Every two weeks", "four-weekly":"Every four weeks", monthly:"Every month (same date)" };
  const lines = [
    "Hello Salt Glow! I’d love to request an appointment.",
    `First name: ${d.get("firstName").trim()}`,
    `Last name: ${d.get("lastName").trim()}`,
    `Phone: ${d.get("phone").trim()}`,
    `Email: ${d.get("email").trim()}`,
    `Service: ${d.get("service")}`,
    `Preferred date: ${date}`,
    `Preferred time: ${time}`,
  ];
  lines.push(form.elements.standing.checked
    ? `Standing appointment: ${frequencies[d.get("frequency")]}, starting ${date} at ${time}. Please confirm the recurring schedule.`
    : "Standing appointment: No — one-time appointment.");
  if (d.get("service") === "Private Shopping Experience") lines.push(`Shopping occasion or style: ${d.get("shoppingComments").trim()}`);
  lines.push("Please confirm availability, pricing, and appointment details. Thank you!");
  appointmentText = lines.join("\n");
  document.querySelector("#booking-content").innerHTML =
    `<span class="confirmation-sun">${logo}</span><p class="eyebrow">ONE STEP CLOSER TO STILLNESS</p><h2 id="booking-title">Your moment,<br><em>in the making.</em></h2><p class="dialog-intro">Your request is ready. Copy it below, then paste it into a message to <strong>@saltglow661</strong> on Instagram. Your visit is confirmed only when our team replies.</p><label class="request-label">Your appointment request<textarea id="request-text" rows="8" readonly></textarea></label><button class="button button-brown" id="copy-request">COPY MY REQUEST ${arrow}</button><a class="button button-outline instagram-continue" href="https://www.instagram.com/saltglow661/" target="_blank" rel="noopener noreferrer">CONTINUE ON INSTAGRAM ${arrow}<span class="sr-only"> (opens in a new tab)</span></a><p class="copy-status" role="status"></p><button class="text-link" id="plan-again">START A NEW REQUEST ${arrow}</button>`;
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
      `<div class="ritual-detail-image service-image-${i}"></div><div class="ritual-detail-copy"><p class="eyebrow">${s.category}</p><h2 id="ritual-title">${s.title}</h2><p>${s.detail}</p><p class="ritual-fine">Our team will confirm available treatments, duration, and pricing before you book.</p><button class="button button-brown" id="book-ritual">BOOK AN APPOINTMENT ${arrow}</button></div>`;
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
