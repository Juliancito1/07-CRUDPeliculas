import Pelicula from "./classPelicula.js";
import { cantidadCaracteres } from "./helpers.js";
import { sumarioValidaciones } from "./helpers.js";

const btnEditar = document.getElementById('btnEditar');
const btnAgregar = document.getElementById('btnAgregar');
const codigo = document.getElementById('codigo');
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const imagen = document.getElementById('imagen');
const genero = document.getElementById('genero');
const duracion = document.getElementById('duracion');
const anio = document.getElementById('anio');
const pais = document.getElementById('pais');
const reparto = document.getElementById('reparto');
const msjFormulario = document.getElementById('msjFormulario');

const formularioPelicula = document.getElementById('formAdministrarPelicula');

//trabajar las peliculas para que vuelvan a ser un objeto del tipo Pelicula.
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];
console.log(listaPeliculas);

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
    //validar los datos
    let sumario = sumarioValidaciones(titulo.value, descripcion.value, imagen.value, duracion.value, genero.value,anio.value,pais.value,reparto.value);
    if(sumario.length === 0)
    {
        console.log('creando la pelicula...');
        //crear la pelicula
        let nuevaPeli = new Pelicula(titulo.value,descripcion.value,imagen.value,genero.value,anio.value,duracion.value,pais.value,reparto.value);
        //almacenar la peli en LocalStorage
        listaPeliculas.push(nuevaPeli);
        guardarenLocalStorage();
        //limpiar el formulario
        limpiarFormularioPeliculas();
        //crear modal
        modalPelicula.hide();
    }
    else{
        msjFormulario.className = 'alert alert-danger mt-3';
        msjFormulario.innerHTML = sumario;
    }
    
}

function guardarenLocalStorage(){
    localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas)); // para objetos publicos funciona
}

function limpiarFormularioPeliculas(){
    formularioPelicula.reset()
}