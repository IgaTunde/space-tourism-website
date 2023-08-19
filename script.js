const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const destinationLinks = document.querySelectorAll(".destination-links")
const crewLInks = document.querySelectorAll('.crew-link')
const technologyLinks = document.querySelectorAll(".technology-link");

//Nav Menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("hidden");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.add("hidden");
  });
});
 
document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll(".nav-link");
  const body = document.body;

  navigationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      body.classList.add("page-transition"); 
      const destination = this.getAttribute("href");
      setTimeout(() => {
        window.location.href = destination; 
      }, 500); 
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll(".destination-link");
  const body = document.body;

  navigationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      body.classList.add("page-transition"); 
      const destination = this.getAttribute("href");
      setTimeout(() => {
        window.location.href = destination; 
      }, 300);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll(".crew-link");
  const body = document.body;

  navigationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      body.classList.add("page-transition"); 
      const destination = this.getAttribute("href");
      setTimeout(() => {
        window.location.href = destination; 
      }, 300);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll(".technology-link");
  const body = document.body;

  navigationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      body.classList.add("page-transition"); 
      const destination = this.getAttribute("href");
      setTimeout(() => {
        window.location.href = destination; 
      }, 300);
    });
  });
});