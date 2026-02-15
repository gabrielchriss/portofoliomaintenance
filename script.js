
/* =========================
   AOS SCROLL ANIMATION
========================= */
AOS.init({
  duration: 1200,
  once: true,
  easing: "ease-in-out",
  offset: 80
});


/* =========================
   CINEMATIC INTRO SCREEN
========================= */
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  if (!intro) return;

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 1s ease";
    setTimeout(() => intro.style.display = "none", 1000);
  }, 2600);
});


/* =========================
   SMOOTH TYPING EFFECT
========================= */
const typingEl = document.getElementById("typing");

if (typingEl) {
  const texts = [
    "Web Developer",
    "Laravel Developer",
    "Frontend Enthusiast",
    "UI/UX Lover"
  ];

  let i = 0;
  let j = 0;
  let current = "";
  let deleting = false;

  function typeEffect() {
    current = texts[i];
    typingEl.textContent = current.substring(0, j);

    if (!deleting && j++ === current.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

    if (deleting && j-- === 0) {
      deleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(typeEffect, deleting ? 40 : 90);
  }

  typeEffect();
}


/* =========================
   PARTICLES BACKGROUND
========================= */
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 800 } },
      color: { value: "#42a5f5" },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#42a5f5",
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}


/* =========================
   RADIAL SKILL ANIMATION
========================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      const percent = circle.dataset.percent;
      const progress = circle.querySelector(".progress");

      const radius = progress.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      progress.style.strokeDasharray = circumference;
      progress.style.strokeDashoffset =
        circumference - (percent / 100) * circumference;

      progress.style.transition = "stroke-dashoffset 2s ease";

      observer.unobserve(circle);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".radial").forEach(el => observer.observe(el));


/* =========================
   PROJECT CARD 3D TILT
========================= */
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


/* =========================
   SMOOTH SCROLL NAVBAR
========================= */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


/* =========================
   SCROLL TO TOP BUTTON
========================= */
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.style.opacity = "1";
    toTop.style.pointerEvents = "auto";
  } else {
    toTop.style.opacity = "0";
    toTop.style.pointerEvents = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* =========================
   CURSOR GLOW (DESKTOP ONLY)
========================= */
if (window.innerWidth > 768) {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", e => {
    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";
  });
}
