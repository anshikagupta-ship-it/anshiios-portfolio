console.log("JavaScript is connected!");
// Select all navbar links
const navLinks = document.querySelectorAll("nav a");

// Add click event to each link
navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================= Scroll Reveal =================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section =>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ================= Active Navigation =================

const allSections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ================= CARD ANIMATION =================

const cards = document.querySelectorAll(
".skill-card, .project-card, .timeline-content, .contact-card"
);

const cardObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

cards.forEach((card,index)=>{

    card.style.transitionDelay=`${index*0.15}s`;

    cardObserver.observe(card);

});

// ================= DARK MODE =================

const themeButton = document.querySelector("#theme-toggle");

// Check saved theme when page loads
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeButton.textContent = "☀️";

        localStorage.setItem("theme","dark");

    }else{

        themeButton.textContent = "🌙";

        localStorage.setItem("theme","light");

    }

});

// ================= TYPING ANIMATION =================

const typingText = document.querySelector("#typing-text");

const words = [
    "Full Stack Developer 💻",
    "AI Enthusiast 🤖",
    "Google Gemini Student Ambassador 🌟",
    "Marketing Lead @ Vibeesta 🚀"
];

let wordIndex = 0;
let letterIndex = 0;

function type(){

    if(letterIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1800);

    }

}

function erase(){

    if(letterIndex > 0){

        typingText.textContent = words[wordIndex].substring(0,letterIndex-1);

        letterIndex--;

        setTimeout(erase,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

        setTimeout(type,400);

    }

}

type();

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            function updateCounter(){

                if(count < target){

                    count += speed;

                    counter.textContent = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector("#nav-links");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// Close menu after clicking a link
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// ================= Scroll To Top =================

const scrollBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});