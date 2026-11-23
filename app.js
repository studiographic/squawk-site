// Squawk site: stamp the boarding pass once it's on screen, and respect reduced motion for the preview video.
document.documentElement.classList.add("js");

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const video = document.querySelector(".phone-screen");
if (video && reduce) {
  video.removeAttribute("autoplay");
  video.pause();
  video.controls = true;
}

const ticket = document.querySelector(".ticket");

// Punch the ticket's two notches exactly where the perforation runs.
const tear = ticket && ticket.querySelector(".facts");
const placeNotches = () => ticket.style.setProperty("--notch-y", tear.offsetTop + "px");
if (tear) {
  placeNotches();
  new ResizeObserver(placeNotches).observe(ticket);
  document.fonts && document.fonts.ready.then(placeNotches);
}
if (ticket && "IntersectionObserver" in window && !reduce) {
  ticket.classList.add("pre");
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      ticket.classList.replace("pre", "stamped");
      io.disconnect();
    }
  }, { threshold: 0.6 });
  io.observe(ticket);
}
