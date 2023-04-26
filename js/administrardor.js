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
let estadoPelicula = true;

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
    listaPeliculas = JSON.parse(listaPeliculas).map( 
        (pelicula)=> 
        new Pelicula(
            pelicula.codigo,
            pelicula.titulo,
            pelicula.descripcion, 
            pelicula.imagen, 
            pelicula.genero, 
            pelicula.anio,
            pelicula.duracion, 
            pelicula.pais, 
            pelicula.reparto));
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
    <button class="bi bi-pencil-square btn btn-warning" id="btnEditar" onclick="editarPelicula('${pelicula.codigo}')"></button> 
    <button class="bi bi-x-square btn btn-danger" onclick="borrarPelicula('${pelicula.codigo}')"></button>
    </td>
  </tr>`
}

let spanCaracter = document.getElementById('contadorcaracter');
const maximoCaracter = 500;

const contarCaracteres = () => {
    let cantidadCaracteres = descripcion.value.length;
    let contar = maximoCaracter - cantidadCaracteres;
    spanCaracter.textContent = contar + "/500"
}
descripcion.addEventListener('keydown',contarCaracteres)


function mostrarModalPeli(){
    estadoPelicula = true;
    //abrir la ventana
    modalPelicula.show()
    console.log('aqui vamos a crear una peli')
}

function cargarPelicula(e){
    e.preventDefault();
    if(estadoPelicula){
        crearPelicula();
    }
    else{
        actualizarPelicula();
    }
    
    
}

function crearPelicula(){
    //validar los datos
    let sumario = sumarioValidaciones(titulo.value, descripcion.value, imagen.value, duracion.value, genero.value,anio.value,pais.value,reparto.value);
    if(sumario.length === 0)
    {
        console.log('creando la pelicula...');
        //crear la pelicula
        let nuevaPeli = new Pelicula(
            undefined,
            titulo.value,
            descripcion.value,
            imagen.value,
            genero.value,
            anio.value,
            duracion.value,
            pais.value,
            reparto.value);
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
        setTimeout(() => {
            msjFormulario.style.display = 'none'
        },3000)
        msjFormulario.style.display = 'block'
    }
}

function guardarenLocalStorage(){
    localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas)); // para objetos publicos funciona
}

function limpiarFormularioPeliculas(){
    formularioPelicula.reset()
}

window.borrarPelicula= (codigo) =>{

    Swal.fire({
        title: 'Esta seguro de borrar la pelicula?',
        text: "No se puede revertir este proceso posteriormente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
        // aqui hago todo lo necesario para borrar
        console.log(codigo)
        console.log('aqui borro la peli');
        //busco en el array de pelicula la peli que quiero 
        let posicionPeli = listaPeliculas.findIndex(pelicula => pelicula.codigo === codigo)
        console.log(posicionPeli)
        //borrar del array el objeto pelicula
        listaPeliculas.splice(posicionPeli,1);
        //igualar los datos del local storage
        guardarenLocalStorage();
        //quitar la fila de la tabla
        let datosTablaPelicula = document.querySelector('tbody');
        //console.log(datosTablaPelicula.children[posicionPeli]);
        datosTablaPelicula.removeChild(datosTablaPelicula.children[posicionPeli]);
        //todo: actualizar la fila de la tabla como el update
          Swal.fire(
            'Borramos la pelicula',
            'La pelicula seleccionada fue eliminada correctamente',
            'success'
          )
        }
      })
}

window.editarPelicula = (codigoUnico) =>{
    //mostrar la ventana modal
    const pelicula = listaPeliculas.find(peli => peli.codigo === codigoUnico);
    console.log(pelicula);
    modalPelicula.show();
    //completar los datos en el modal
    codigo.value = pelicula.codigo;
    titulo.value = pelicula.titulo;
    descripcion.value = pelicula.descripcion;
    imagen.value = pelicula.imagen;
    genero.value = pelicula.genero;
    anio.value = pelicula.anio;
    duracion.value = pelicula.duracion;
    pais.value = pelicula.pais;
    reparto.value = pelicula.reparto;
    //el estado de la variable bandera
    estadoPelicula = false;
}

function actualizarPelicula(){
    //validar los datos
    //necesito la pelicula que estoy editando
    let posicionPelicula = listaPeliculas.findIndex(peli => peli.codigo === codigo.value)
    //actualizar las propiedades de esa pelicula
    listaPeliculas[posicionPelicula].titulo = titulo.value;
    listaPeliculas[posicionPelicula].descripcion = descripcion.value;
    listaPeliculas[posicionPelicula].imagen = imagen.value;
    listaPeliculas[posicionPelicula].genero = genero.value;
    listaPeliculas[posicionPelicula].anio = anio.value;
    listaPeliculas[posicionPelicula].duracion = duracion.value;
    listaPeliculas[posicionPelicula].pais = pais.value;
    listaPeliculas[posicionPelicula].reparto = reparto.value;
    //actualizar el localstorage
    guardarenLocalStorage();
    //mostrar un msj
    Swal.fire(
        "Pelicula Editada",
        "La pelicula seleccionada fue editada corrrectamente",
        "success"
    );
    //se vea en la tabla
    let datosTablaPelicula = document.querySelector('tbody');
    datosTablaPelicula.children[posicionPelicula].children[1].innerText = titulo.value;
    datosTablaPelicula.children[posicionPelicula].children[2].innerText = descripcion.value;
    datosTablaPelicula.children[posicionPelicula].children[3].innerText = imagen.value;
    datosTablaPelicula.children[posicionPelicula].children[4].innerText = genero.value;
    //limpiar el formulario
    limpiarFormularioPeliculas();
    //cerrar el modal
    modalPelicula.hide();
}