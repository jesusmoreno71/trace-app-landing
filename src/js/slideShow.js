const slideShow = document.getElementById('slideshow');
const slides = document.getElementById('slides');
const indicadores = document.getElementById('indicadores');
const btnCambiar = document.getElementById('cambiar');
let slideActual = 1; //Variable para saber en que slide estamos

const siguienteSlide = () => {
    const primerSlide = slides.children[0];
    const ancho = primerSlide.offsetWidth; //obtenemos el ancho del primer slide

    const velocidad = 200; //velocidad de la transicion de imagenes

    slides.style.transition = `ease-out ${velocidad}ms all`; //Agregamos una transicion
    slides.style.transform = `translateX(-${ancho}px)`;

    setTimeout(() => {
        slides.appendChild(primerSlide); //Nos permite poner un elemento al final de nuestros slides
        slides.style.transition = 'none'; //Quitamos la transicion para que no se vea el salto de imagen
        slides.style.transform = 'translateX(0)'; //Regresamos a la posicion inicial
    }, velocidad);

    //Cambiamos los indicadores
    if(slideActual < slides.children.length) {
        slideActual++;
    } else {
        slideActual = 1;
    } //Si el slide actual es menor al total de slide, aumentamos el slide actual, si no, regresamos al primer slide
    indicadores.querySelector('.active').classList.remove('active');
    indicadores.children[slideActual -1].classList.add('active');
}

setInterval(() => {
    siguienteSlide();
}, 5000); //Hacemos automatico el cambio de slide cada 5 segundos