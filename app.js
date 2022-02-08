const header = document.querySelector("header");
const sectionTwo = document.querySelector("#work");

const topMargin = header.offsetHeight;
const bottomMargin = window.innerHeight - header.offsetHeight;

const options = {
  rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
}

const observer = new IntersectionObserver(([entry]) => {
  const color = entry.isIntersecting ? "#021d45" : "#fff";
  document.documentElement.style.setProperty('--text', color);
}, options);

observer.observe(sectionTwo);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header nav li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};

const primaryNav = document.querySelector(".primary-navbar");
const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility == "false"){
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  }
  else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

const swup = new swup()