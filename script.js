// =====================================
// AutoSweep Website JavaScript
// =====================================

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section, .card, .box").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Header background while scrolling
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "rgba(5,7,10,0.98)";
        header.style.boxShadow = "0 0 20px rgba(0,245,196,.2)";
    } else {
        header.style.background = "rgba(5,7,10,.90)";
        header.style.boxShadow = "none";
    }

});

// Button glow effect
document.querySelectorAll(".btn, .btn-outline").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Hero image floating with mouse movement
const robot = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {

    if (!robot) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    robot.style.transform =
        `translate(${x}px, ${y}px)`;

});

// Typing effect
const text = "Autonomous Cleaning Powered by AI";
const typingElement = document.querySelector(".small");

if (typingElement) {

    let i = 0;

    typingElement.innerHTML = "";

    function typing() {

        if (i < text.length) {

            typingElement.innerHTML += text.charAt(i);
            i++;

            setTimeout(typing, 70);

        }

    }

    typing();

}

// Back to top button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#00F5C4";
topBtn.style.color = "#000";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.boxShadow = "0 0 20px #00F5C4";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Console welcome message
console.log("%cWelcome to AutoSweep 🚀",
    "color:#00F5C4;font-size:20px;font-weight:bold;");