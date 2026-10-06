const btnVideo = document.getElementById('btn-video');
const overlayVideo = document.getElementById('overlay-video');

//Agregamos un evento 'click' al boton de video para que agregue la clase 'active' al overlay de video y muestre el video
btnVideo.addEventListener('click', () => {
    overlayVideo.classList.add('active');
});

//Agregamos un evento 'click' al overlay de video para que quite la clase 'active' al dar click en el overlay y cierre el video
overlayVideo.addEventListener('click', () => {
    overlayVideo.classList.remove('active');
});