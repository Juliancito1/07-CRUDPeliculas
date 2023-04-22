import Pelicula from "./classPelicula.js";
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

//Manejadores de eventos
//btnEditar.addEventListener('click',crearPeli);
btnAgregar.addEventListener('click',mostrarModalPeli);
formularioPelicula.addEventListener('submit',cargarPelicula)

const modalPelicula = new bootstrap.Modal(document.getElementById('modalAgregar'));

//trabajar las peliculas para que vuelvan a ser un objeto del tipo Pelicula.
// let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || []; //esto me devuelve un objeto tipo Object
let listaPeliculas = localStorage.getItem('listaPeliculas');
if(!listaPeliculas){
    //si lista peliculas no existe en Localstorage
    listaPeliculas = [];
}
else{
    //si lista peliculas tiene datos, quiero transformarlo en un array de objetos pelicula
    listaPeliculas = JSON.parse(listaPeliculas).map( (pelicula)=> new Pelicula(pelicula.titulo,pelicula.descripcion, pelicula.imagen, pelicula.genero, pelicula.anio,pelicula.duracion, pelicula.pais, pelicula.reparto));
}
console.log(listaPeliculas);

cargaInicial();

function cargaInicial(){
    //verificar si listaPeliculas tiene datos
    if(listaPeliculas.length > 0){
        //dibujes los datos en la tabla
        listaPeliculas.map((pelicula, indice) => crearFila(pelicula,indice))
    }
    //else seria mostrar un mensaje que no hay datos para cargar o dejo la tabla vacia
}

function crearFila(pelicula, indice){
    //aqui dibujo el TR
    let datosTablaPelicula = document.querySelector('tbody');
    datosTablaPelicula.innerHTML += `<tr>
    <th>${indice + 1}</th>
    <td>${pelicula.titulo}</td>
    <td class="text-truncate">${pelicula.descripcion}</td>
    <td class="text-truncate">${pelicula.imagen}</td>
    <td>${pelicula.genero}</td>
    <td>
    <button class="bi bi-pencil-square btn btn-warning" id="btnEditar"></button> 
    <button class="bi bi-x-square btn btn-danger" onclick="borrarPelicula()"></button>
    </td>
  </tr>`
}



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
        //dibujar la fila;
        let indicePeli = listaPeliculas.length - 1;
        crearFila(nuevaPeli,indicePeli);
        //mostrar un cartel al usuario
        Swal.fire(
            'Pelicula Creada',
            'La pelicula ingresada fue creada correctamente',
            'success'
          )
        //Verificar cantidad de caracteres en el campo de la descripcion
        //Ocultar pasado x tiempo o una vez enviada la pelicula el alert con los errores.
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

window.borrarPelicula= () =>{
    console.log('aqui borro la peli');
}