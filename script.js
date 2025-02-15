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

