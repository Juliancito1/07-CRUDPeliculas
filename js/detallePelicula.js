//extraer el parametro
const parametroCodigo = new URLSearchParams(window.location.search);
console.log(parametroCodigo.get('codigo'))
//buscar la pelicula
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];
const peliBuscada = listaPeliculas.find(pelicula => pelicula.codigo === parametroCodigo.get('codigo')); 

console.log(peliBuscada);
//mostrar los datos de la peli
let detalle = document.getElementById('seccionDetalle');
detalle.innerHTML = `<div class="card col-lg-10">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${peliBuscada.imagen}" class="card-img-top" alt="${peliBuscada.titulo}">
  </div>
  <div class="col-md-7">
    <div class="card-body">
      <h5 class="card-title">${peliBuscada.titulo}</h5>
      <p class="card-text">${peliBuscada.descripcion}</p>
      <p class="card-text"><small>Genero <span class="badge text-bg-info text-light rounded-pill">${peliBuscada.genero}</span></small></p>
      <p class="card-text"><small>Año: ${peliBuscada.anio}</small></p>
      <p class="card-text"><small>Duracion: ${peliBuscada.duracion}</small></p>
      <p class="card-text"><small>Pais: ${peliBuscada.pais}</small></p>
      <p class="card-text"><small>Reparto: ${peliBuscada.reparto}</small></p>
    </div>
  </div>
</div>
</div>`