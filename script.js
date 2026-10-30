gsap.registerPlugin(ScrollTrigger);


const root = document.documentElement;
const darkModeToggle = document.querySelector("#darkModeToggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const replayButton = document.querySelector("#replayBtn");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const themeStorageKey = "yummys-theme";
const savedTheme = localStorage.getItem(themeStorageKey);


if (savedTheme === "dark") {
  root.classList.add("dark");
}


function syncThemeButton() {
  const darkModeIsOn = root.classList.contains("dark");
  darkModeToggle.setAttribute("aria-pressed", String(darkModeIsOn));
  darkModeToggle.setAttribute("aria-label", darkModeIsOn ? "Switch to light mode" : "Switch to dark mode");
  darkModeToggle.textContent = darkModeIsOn ? "Light mode" : "Dark mode";
  themeColorMeta.setAttribute("content", darkModeIsOn ? "#21152E" : "#6F46A0");
}


syncThemeButton();


darkModeToggle.addEventListener("click", function () {
  root.classList.toggle("dark");
  localStorage.setItem(themeStorageKey, root.classList.contains("dark") ? "dark" : "light");
  syncThemeButton();


  if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    
    gsap.to(darkModeToggle, { rotation: "+=360", duration: 0.45, ease: "power2.out" });
  }
});


contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formStatus.textContent = "Thanks! This sample form is not connected to an inbox yet.";
});


const motion = gsap.matchMedia();


motion.add("(prefers-reduced-motion: no-preference)", function () {


  const introTimeline = gsap.timeline({ defaults: { duration: 0.45, ease: "power2.out" } });


  introTimeline
    .from("#brandLockup", { y: -14, opacity: 0 })
    .from(".hero-item", { y: 24, opacity: 0, stagger: 0.1 }, "-=0.2")
    .from("#heroArtwork", { x: 40, opacity: 0, duration: 0.55 }, "-=0.2")
    .from(".site-nav .nav-link", { y: -10, opacity: 0, stagger: 0.06, duration: 0.3 }, "<")
    .from("#darkModeToggle", { scale: 0.92, opacity: 0, duration: 0.3 }, "-=0.12");


  replayButton.hidden = false;
  const replayIntro = function () {
    introTimeline.restart();
  };
  replayButton.addEventListener("click", replayIntro);


  gsap.fromTo("#progressBar", { scaleX: 0 }, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });


  gsap.utils.toArray(".reveal").forEach(function (section) {
   
    gsap.from(section, {
      y: 28,
      opacity: 0,
      duration: 0.65,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });
  });


  return function () {
    replayButton.removeEventListener("click", replayIntro);
  };
});


motion.add("(prefers-reduced-motion: reduce)", function () {
  replayButton.hidden = true;
});



