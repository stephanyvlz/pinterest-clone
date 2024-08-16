const flecha = document.querySelector('.dropdown');
const menu = document.querySelector('.menu');

flecha.addEventListener('click', () => {
    menu.classList.toggle('hide');
});

window.addEventListener('load', () => {
    const tema = document.getElementById('tema');
    tema.addEventListener("click", () => {
        const estilo1 = document.getElementById('style1');
        const estilo2 = document.getElementById('style2');
    
        if (estilo1.disabled) {
            estilo1.disabled = false;
            estilo2.disabled = true;
        } else {
            estilo1.disabled = true;
            estilo2.disabled = false;
        }
    })
    });