if (new URLSearchParams(window.location.search).has("studio")) {
  document.title = "Salt Glow — Customer Studio";
  await import("./style.css");
  await import("./studio.js");
} else {
  await import("./spa.js");
}
