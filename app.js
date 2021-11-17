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

import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

var animation = lottieWeb.loadAnimation({
  container: document.getElementById('containerSVG'),
  path: 'data.json',
  renderer: 'svg',
  loop: false,
  autoplay: true,
  name: "Demo Animation",
});