const body = document.body;
const intro = document.querySelector("#intro");
const main = document.querySelector("#main-content");
const openButton = document.querySelector("#openExperience");
const notReadyButton = document.querySelector("#notReady");
const reassurance = document.querySelector("#reassurance");
const music = document.querySelector("#bgMusic");
const soundToggle = document.querySelector("#soundToggle");
const soundLabel = document.querySelector("#soundLabel");
const siteHeader = document.querySelector("#siteHeader");
const scrollProgress = document.querySelector("#scrollProgress");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

let experienceIsOpen = false;
let scrollFrame = null;

function setMusicState(isPlaying) {
  soundToggle.setAttribute("aria-pressed", String(isPlaying));
  soundToggle.setAttribute("aria-label", isPlaying ? "Jeda musik" : "Putar musik");
  soundLabel.textContent = isPlaying ? "Jeda" : "Musik";
}

async function playMusic() {
  music.volume = 0.48;

  try {
    await music.play();
    setMusicState(true);
  } catch {
    setMusicState(false);
  }
}

function createPaperBurst() {
  if (prefersReducedMotion.matches) return;

  const colors = ["#b91c1c", "#fee2e2", "#ffffff", "#18181b"];

  for (let index = 0; index < 22; index += 1) {
    const piece = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 22 + Math.random() * 0.35;
    const distance = 90 + Math.random() * 260;

    piece.className = "paper-piece";
    piece.style.setProperty("--size", `${5 + Math.random() * 8}px`);
    piece.style.setProperty(
      "--piece-color",
      colors[Math.floor(Math.random() * colors.length)],
    );
    piece.style.setProperty("--travel-x", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty(
      "--travel-y",
      `${Math.sin(angle) * distance + 130}px`,
    );
    piece.style.setProperty("--rotation", `${Math.random() * 760 - 380}deg`);
    piece.style.setProperty("--duration", `${800 + Math.random() * 550}ms`);
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  }
}

function openExperience() {
  if (experienceIsOpen) return;

  experienceIsOpen = true;
  intro.classList.add("is-leaving");
  body.classList.remove("is-locked");
  body.classList.add("experience-open");
  main.removeAttribute("inert");
  main.setAttribute("aria-hidden", "false");
  createPaperBurst();
  playMusic();

  const finishOpening = () => {
    intro.hidden = true;
    window.scrollTo({ top: 0, behavior: "auto" });
    document.querySelector("#hero").focus({ preventScroll: true });
    updateScrollUI();
  };

  if (prefersReducedMotion.matches) {
    finishOpening();
  } else {
    window.setTimeout(finishOpening, 520);
  }
}

function showReassurance() {
  reassurance.textContent =
    "Nggak apa-apa. Ambil waktu sebentar—suratnya tetap menunggu di sini.";
  notReadyButton.textContent = "Oke, buka pelan-pelan";
  notReadyButton.removeEventListener("click", showReassurance);
  notReadyButton.addEventListener("click", openExperience, { once: true });
}

function toggleMusic() {
  if (music.paused) {
    playMusic();
  } else {
    music.pause();
    setMusicState(false);
  }
}

function updateScrollUI() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;

  scrollProgress.style.transform = `scaleX(${progress})`;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 48);
  scrollFrame = null;
}

function requestScrollUpdate() {
  if (scrollFrame === null) {
    scrollFrame = window.requestAnimationFrame(updateScrollUI);
  }
}

function initialiseReveals() {
  const revealElements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08,
    },
  );

  revealElements.forEach((element) => observer.observe(element));
}

openButton.addEventListener("click", openExperience);
notReadyButton.addEventListener("click", showReassurance);
soundToggle.addEventListener("click", toggleMusic);
music.addEventListener("pause", () => setMusicState(false));
music.addEventListener("play", () => setMusicState(true));
music.addEventListener("error", () => {
  setMusicState(false);
  soundLabel.textContent = "Tanpa musik";
  soundToggle.setAttribute("aria-label", "Musik tidak dapat dimuat");
});
window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate, { passive: true });

initialiseReveals();
updateScrollUI();
