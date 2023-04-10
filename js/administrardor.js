import Pelicula from "./classPelicula.js";
const btnEditar = document.getElementById('btnEditar');
const btnAgregar = document.getElementById('btnAgregar');
const formularioPelicula = document.getElementById('formAdministrarPelicula');
btnEditar.addEventListener('click',crearPeli);
btnAgregar.addEventListener('click',mostrarModalPeli);
formularioPelicula.addEventListener('submit',cargarPelicula)

const modalPelicula = new bootstrap.Modal(document.getElementById('modalAgregar'));


// crear una nueva peli

function crearPeli(){
    let nuevaPeli = new Pelicula('Super Mario','algo','url','aventura',2023,'2hs','EEUU','-');
console.log(nuevaPeli)
}

function mostrarModalPeli(){
    //abrir la ventana
    modalPelicula.show()
    console.log('aqui vamos a crear una peli')
}

function cargarPelicula(e){
    e.preventDefault();
    console.log('creando la pelicula...');
    modalPelicula.hide();
}