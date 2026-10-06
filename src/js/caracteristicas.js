const previews = document.getElementById('previews');
const tabs = document.getElementById('tabs');

tabs.addEventListener('click', (e) => {
    e.preventDefault();

    const selectedTab = e.target.closest('.tab'); //Guardamos la pestaña seleccionada a la que le dimos click
    if(selectedTab) { //Condicional para que solo se ejecute si damos clicj en una pestaña y no en cualquier otro lugar
        const id = selectedTab.dataset.id; //Obtenemos el id de la pestaña seleccionada
        
        previews.querySelector('.active').classList.remove('active');
        previews.querySelector(`[data-id="${id}"]`).classList.add('active'); //Agregamos la clase active al id que corresponda con data-id de la pestaña seleccionada

        tabs.querySelector('.active').classList.remove('active');
        tabs.querySelector(`[data-id="${id}"]`).classList.add('active');
    }
});