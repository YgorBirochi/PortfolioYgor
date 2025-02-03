// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const linksNavegacao = document.querySelectorAll('nav a');
    
    // Toggle Menu Mobile
    const toggleMenu = () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    };

    // Fechar Menu ao clicar fora
    const fecharMenu = (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    };

    // Scroll Header
    const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    };

    // Scroll Suave
    const scrollSuave = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offset = 80;

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });

        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    };

    // Observer para Animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px -25% 0px' 
    });

    // Event Listeners
    menuToggle.addEventListener('click', toggleMenu);
    document.addEventListener('click', fecharMenu);
    window.addEventListener('scroll', handleScroll);
    linksNavegacao.forEach(link => link.addEventListener('click', scrollSuave));
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});