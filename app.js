const header = document.querySelector("header");
const sectionTwo = document.querySelector(".work");

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