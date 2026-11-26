// this is for word animationn

var typed = new Typed(".text", {
    strings: ["Dibyendu Kar", "My Portfolio"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//  HAMBURGER
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");
    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.replace("bx-menu", "bx-x");
        menuIcon.setAttribute("aria-expanded", "true");

    } else {
        icon.classList.replace("bx-x", "bx-menu");
        menuIcon.setAttribute("aria-expanded", "false");
    }
});

// close menu after click hamburgur

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        const icon = menuIcon.querySelector("i");
        icon.classList.replace("bx-x", "bx-menu");
        menuIcon.setAttribute("aria-expanded", "false");
    });
});
