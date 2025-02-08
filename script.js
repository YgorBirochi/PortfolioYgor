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

document.addEventListener("DOMContentLoaded", () => {
    // Elementos DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const linksNavegacao = document.querySelectorAll('nav a');
    const perfilTexto = document.getElementById('nome-digitar');
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const projetos = document.querySelectorAll('.grid figure');

    // Efeito de Digitação no Nome
    const nome = "Ygor Birochi";
    let index = 0;

    function escreverTexto() {
        if (index < nome.length) {
            perfilTexto.innerHTML += nome.charAt(index);
            index++;
            setTimeout(escreverTexto, 150);
        }
    }

    window.onload = setTimeout(() => {
        escreverTexto();
    }, 800)

    // Efeito de Aparição Suave ao Rolar a Página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    });

    scrollElements.forEach((el) => observer.observe(el));

    // Scroll Header
    const handleScroll = () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    };

    // Scroll Suave
    const scrollSuave = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        const offset = 80;

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: "smooth"
        });

        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    };

    // Event Listeners
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });

    window.addEventListener("scroll", handleScroll);
    linksNavegacao.forEach(link => link.addEventListener("click", scrollSuave));
});
document.querySelectorAll('.grid figure').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let x = (e.offsetX / card.offsetWidth) * 20 - 10;
        let y = (e.offsetY / card.offsetHeight) * 20 - 10;
        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    const totalItems = document.querySelectorAll(".carousel-track figure").length;
    const visibleItems = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;
    
    function updateCarousel() {
        const itemWidth = document.querySelector(".carousel-track figure").offsetWidth + 20; // +20 para gap
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < totalItems - visibleItems) {
            index++;
        } else {
            index = 0; // Volta para o início
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalItems - visibleItems; // Vai para o último slide visível
        }
        updateCarousel();
    });

    window.addEventListener("resize", () => {
        updateCarousel();
    });
});