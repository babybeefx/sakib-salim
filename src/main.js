import header from "./sections/header";
import hero from "./sections/hero";
import video from "./sections/video";
import brands from "./sections/brands";
import experience from "./sections/experience";
import education from "./sections/education";
import contact from "./sections/contact";

import { resumeData } from "./data/resumeData";

const app = document.getElementById("app");

/* RENDER */
app.innerHTML = `
  ${header()}
  ${hero()}
  ${video()}

  ${experience(resumeData)}
  ${education(resumeData)}

  ${brands()}

  ${contact()}
`;

/* VIDEO TOGGLE */
function initVideoToggle() {
  const longBtn = document.getElementById("pill-long");
  const shortBtn = document.getElementById("pill-short");

  const longSection = document.getElementById("long-form");
  const shortSection = document.getElementById("short-form");

  if (!longBtn || !shortBtn) return;

  longBtn.onclick = () => {
    longSection.classList.remove("hidden");
    shortSection.classList.add("hidden");
    longBtn.classList.add("active-pill");
    shortBtn.classList.remove("active-pill");
  };

  shortBtn.onclick = () => {
    shortSection.classList.remove("hidden");
    longSection.classList.add("hidden");
    shortBtn.classList.add("active-pill");
    longBtn.classList.remove("active-pill");
  };
}
initVideoToggle();

/* VIDEO MODAL */
window.openVideo = function(id) {
  const modal = document.getElementById("video-modal");
  const frame = document.getElementById("video-frame");

  if (!modal || !frame) return;

  frame.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

window.closeVideo = function() {
  const frame = document.getElementById("video-frame");
  const modal = document.getElementById("video-modal");

  if (frame) frame.src = "";
  if (modal) modal.classList.add("hidden");
};

/* NAV ACTIVE SYSTEM */
const sections = [
  { id: "video", nav: "nav-portfolio" },
  { id: "experience", nav: "nav-experience" },
  { id: "education", nav: "nav-education" },
  { id: "contact", nav: "nav-contact" }
];

function setActiveNav() {
  let current = "";

  sections.forEach(section => {
    const el = document.getElementById(section.id);
    if (!el) return;

    const rect = el.getBoundingClientRect();

    if (
      rect.top <= window.innerHeight * 0.4 &&
      rect.bottom >= window.innerHeight * 0.4
    ) {
      current = section.nav;
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("nav-active");
  });

  if (current) {
    document.getElementById(current)?.classList.add("nav-active");
  }
}

window.addEventListener("scroll", setActiveNav);
setActiveNav();

/* LOADER FIX */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 400);
});