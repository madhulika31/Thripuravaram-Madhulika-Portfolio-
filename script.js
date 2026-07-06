// Typing Animation

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "CSE Student",
    "HTML | CSS | JavaScript"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Dark Mode

const theme = document.querySelector(".theme");

theme.onclick = () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme.innerHTML = "☀️";
    } else {
        theme.innerHTML = "🌙";
    }
};


// Sticky Navbar Shadow

window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";
    }

});


// Reveal Animation on Scroll

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

}

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = ".8s";
});

window.addEventListener("scroll", revealSections);

revealSections();


// Active Navigation

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});


// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting me! I'll get back to you soon.");

    form.reset();

});
