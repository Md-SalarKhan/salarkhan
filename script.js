window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
/* ===============================
   ⌨️ SMOOTH TYPING + RANDOM COLORS
================================ */

const words = [
  "SEO Specialist",
  "Shopify Specialist",
  "Amazon Specialist",
  "Etsy Specialist",
  "eBay Specialist",
];

const colors = [
  "#ff004f",
  "#00ffcc",
  "#ffa500",
  "#00ff00",
  "#1e90ff",
  "#ff69b4",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let currentColor = getRandomColor();

function typeEffect() {
  const currentWord = words[wordIndex];
  typingText.style.color = currentColor;

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), 1600); // pause
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      currentColor = getRandomColor(); // NEW COLOR EVERY LOOP
    }
  }

  const isMobile = window.innerWidth <= 768;

  setTimeout(
    typeEffect,
    isDeleting ? (isMobile ? 80 : 100) : isMobile ? 120 : 150
  );
}

typeEffect();
/* ===============================
   🎥 SCROLL REVEAL LOGIC
================================ */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((reveal) => {
  revealObserver.observe(reveal);
});
/* ===============================
   📱 MOBILE MENU TOGGLE 
================================ */

const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* ✅ CLOSE MENU AFTER CLICK */
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
/* SMOOTH SCROLL (ONLY FOR INTERNAL # LINKS) */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    if (target.length > 1 && document.querySelector(target)) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* ACTIVE NAV LINK */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
/* ===============================
   🧊 NAVBAR BLUR ON SCROLL
================================ */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
/* ===============================
   🧊 NAVBAR APPEAR ON SCROLL UP
================================ */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    nav.classList.add("active");
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("active");
    nav.classList.remove("shrink");
  }
});

/* Show background on hover */
nav.addEventListener("mouseenter", () => {
  nav.classList.add("active");
});

nav.addEventListener("mouseleave", () => {
  if (window.scrollY <= 5) {
    nav.classList.remove("active");
  }
});
/* ===============================
   💡 PRICING CARD SPOTLIGHT
================================ */

document.querySelectorAll(".pricing-card.spotlight").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});
