document.addEventListener("DOMContentLoaded", () => {
    const perfilTexto = document.getElementById('nome-digitar');

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
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggles = document.querySelectorAll('[data-theme-toggle]');
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
    }

    themeToggles.forEach(btn => {
        btn.addEventListener('click', toggleDarkMode);
    });

    // Verificar o estado salvo
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Atualizar ícones
    function updateIcons() {
        themeToggles.forEach(icon => {
            icon.style.display = body.classList.contains('dark-mode') ? 
                (icon.classList.contains('fa-moon') ? 'none' : 'block') :
                (icon.classList.contains('fa-sun') ? 'none' : 'block');
        });
    }
    updateIcons();
    body.addEventListener('theme-change', updateIcons);
});
window.addEventListener("scroll", function(){
    const header = document.getElementById("header");
    const scrollPosition = window.scrollY;
    const scrollInicio = 10;

    if(scrollPosition > scrollInicio){
        header.classList.add('movi')
    } else{
        header.classList.remove('movi')
    }
})

