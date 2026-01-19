const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('#nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navList.classList.remove('show'); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});