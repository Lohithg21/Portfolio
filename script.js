function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
    "achievements",
    "contact",
  ];
  let current = "home";
  const scrollY = window.scrollY + 100;
  const docH = document.documentElement.scrollHeight;
  const winH = window.innerHeight;
  if (scrollY + winH >= docH - 60) {
    current = "contact";
  } else {
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (
        el &&
        el.getBoundingClientRect().top <= 100 &&
        el.getBoundingClientRect().bottom >= 100
      )
        current = id;
    });
  }
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.toggle(
      "active",
      a.textContent.toLowerCase() === current ||
        (a.textContent.toLowerCase() === "achievements" &&
          current === "achievements"),
    );
  });
  document.querySelectorAll(".mob-link").forEach((a) => {
    a.classList.toggle("active", a.textContent.toLowerCase() === current);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".fade-in,.slide-left,.slide-right")
  .forEach((el) => observer.observe(el));

function toggleExpand(imgId, btnId) {
  const el = document.getElementById(imgId);
  const btn = document.getElementById(btnId);
  el.classList.toggle("open");
  btn.classList.toggle("open");
}
