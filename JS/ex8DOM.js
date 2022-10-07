const card = document.querySelector('.card');
const titulo = document.querySelector('h5');

card.addEventListener('mousemove', mostrarEvento);

function mostrarEvento(evento) {

    console.log(evento);

    titulo.textContent = `Eixo X: ${evento.offsetX} Eixo Y: ${evento.offsetY}`;
}