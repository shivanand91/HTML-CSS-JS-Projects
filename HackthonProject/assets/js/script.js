const mobile_nav = document.querySelector(".hamburger-menu");

const nav_header = document.querySelector(".header");


const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());