const header = document.querySelector("header")
const sectionOne = document.querySelector(".uc")
const sectionTwo = document.querySelector(".work")
const sectionThree = document.querySelector(".about")

const sectionOneOptions = {
    
}

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {   
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled")
        } else {
            header.classList.remove("nav-scrolled")
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne)