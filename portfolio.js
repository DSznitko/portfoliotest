// MENU ANIMATIONS

const burger = document.querySelector(".burger");
const hamburger = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-times");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header")
const lis = document.querySelectorAll(".menu a");

const menuToggler = () => {
  hamburger.classList.toggle("show");
  cross.classList.toggle("show");
  menu.classList.toggle("show");
  header.classList.toggle("show");
  lis.forEach((li, index) =>{
   if (li.style.animation) {
     li.style.animation = "";
   } else {
    li.style.animation = `menu 0.5s ease forwards ${index / 4 }s`;
   }
  }) 
}

burger.addEventListener("click", menuToggler);
lis.forEach(li => li.addEventListener("click", menuToggler))
  

//ARROW DOWN ANIMATION

gsap.to(".arrow-down", {y:"40px", duration: 1, ease: "power3.in", yoyo: true, repeat: -1})

// ABOUT ME SECTION

gsap.registerPlugin(ScrollTrigger);


gsap.fromTo(".about-me-title", {opacity:0, y:"-30%"}, {opacity:1, y:0, duration:1.8, ease:"power4.inOut", scrollTrigger: {
  trigger: ".about-me"
}})

gsap.to(".my-img", {filter:"blur(0px)", duration: 1, ease:"power1.in", delay: .8, scrollTrigger:{
trigger: ".about-me",
}});

gsap.fromTo(".about-me-text", {opacity:0, x:"-50%"}, {opacity:1, x:0, ease:"bounce.out", delay:1.2, scrollTrigger: {
  trigger: ".about-me"
}})


//STACK SECTION ANIMATIONS

const stackBoxes = document.querySelectorAll(".stack-box");

stackBoxes.forEach(box => {
  gsap.fromTo(box, {opacity:0, y:80}, {opacity: 1, y:0, ease: "circ.in", stagger: 0.5, duration: 1, scrollTrigger:{
    trigger: box
  }})
})
stackBoxes.forEach(box => {
  gsap.fromTo(box.children, {scale: 0}, {scale: 1, ease: "circ.in", delay: 0.2, duration: 1, scrollTrigger:{
    trigger: box
  }})
})

gsap.fromTo(".stack-title", {y:"-30%", opacity:0}, {opacity: 1, y:0, duration: 1.8, ease:"power4.inOut", scrollTrigger: {
  trigger: ".stack"
}})


gsap.fromTo(".skills-list", {x:60, opacity:0}, {opacity: 1, x:0, duration: .8, stagger: .4, ease:"power4.inOut", scrollTrigger: {
  trigger: ".other-title",
}})


// PROJECT SECTIONS ANIMATIONS

const projects = document.querySelectorAll(".project-box");


projects.forEach(project => {
  gsap.fromTo(project, {opacity:0, y:80}, {opacity: 1, y:0, ease: "circ.in", stagger: 0.5, duration: 1, scrollTrigger:{
    trigger: project
  }})
})

gsap.fromTo(".projects-title", {y:"-30%", opacity:0}, {opacity: 1, y:0, duration: 1.8, ease:"power4.inOut", scrollTrigger: {
  trigger: ".projects-section"
}})

gsap.fromTo(".tech-icons", { scale:1}, { scale:1.2, duration: .5, yoyo: true, repeat: -1, stagger: 0.2, ease:"power2.in"})


gsap.to(".github-link-icon", { scale: 1.3, duration:3,  repeat: "-1", ease:"elastic.out(1, 0.3)"})


// CONTACT ANIMATIONS
gsap.fromTo(".contact-title", {y:"-30%", opacity:0}, {opacity: 1, y:0, duration: 1.8, ease:"power4.inOut", scrollTrigger: {
  trigger: ".contact"
}})

gsap.fromTo(".contact-link", {x:60, opacity:0}, {opacity: 1, x:0, duration: .8, stagger: .4, ease:"power4.inOut", scrollTrigger: {
  trigger: ".contact",
}})

gsap.fromTo(".form", {y:60, opacity:0}, {opacity: 1, y:0, duration: .8,  ease:"power2.inOut", scrollTrigger: {
  trigger: ".form",
}})

//ARROW UP ANIMATION

const showArrowUp = () => {
const arrowUp = document.querySelector(".arrow-up");
const contactSection = document.querySelector(".contact")

let contactSectionHeight = contactSection.getBoundingClientRect().top
let windowHeight = window.innerHeight;


 contactSectionHeight < windowHeight  ? arrowUp.classList.add("active") : arrowUp.classList.remove("active")
}

window.addEventListener("scroll", showArrowUp)