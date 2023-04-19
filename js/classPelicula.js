export default class Pelicula{
    #codigo;
    #titulo;
    #descripcion;
    #imagen;
    #genero;
    #anio;
    #duracion;
    #pais;
    #reparto;
    #estado;
    constructor(titulo, descripcion, imagen, genero, anio, duracion, pais,reparto){
        this.#codigo = uuidv4();
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#genero = genero;
        this.#anio = anio;
        this.#duracion = duracion;
        this.#pais = pais;
        this.#reparto = reparto;
        this.#estado = false;
    }
    // crear los getters y setters
    // getters
    get codigo() {
        return this.#codigo;
    }
    get titulo() {
        return this.#titulo;
    }
    get descripcion() {
        return this.#descripcion;
    }
    get imagen() {
        return this.#imagen;
    }
    get genero() {
        return this.#genero;
    }
    get anio() {
        return this.#anio;
    }
    get duracion() {
        return this.#duracion;
    }
    get pais() {
        return this.#pais;
    }
    get reparto() {
        return this.#reparto;
    }
    get estado() {
        return this.#estado;
    }
    
    // setters
    set codigo(newCodigo) {
        this.#codigo = newCodigo;
    }
    set titulo(newTitulo) {
        this.#titulo = newTitulo;
    }
    set descripcion(newDescripcion) {
        this.#descripcion = newDescripcion;
    }
    set imagen(newImagen) {
        this.#imagen = newImagen;
    }
    set genero(newGenero) {
        this.#genero = newGenero;
    }
    set anio(newAnio) {
        this.#anio = newAnio;
    }
    set duracion(newDuracion) {
        this.#duracion = newDuracion;
    }
    set pais(newPais) {
        this.#pais = newPais;
    }
    set reparto(newReparto) {
        this.#reparto = newReparto;
    }
    set estado(newEstado) {
        this.#estado = newEstado;
    }
    //stringify accede a este metodo
    toJSON(){
        return {
            codigo: this.codigo,
            titulo: this.titulo,
            descripcion: this.descripcion,
            imagen: this.imagen,
            genero: this.genero,
            anio: this.anio,
            duracion: this.duracion,
            pais: this.pais,
            reparto: this.reparto
        }
    }
}