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
    getCodigo() {
        return this.#codigo;
    }
    getTitulo() {
        return this.#titulo;
    }
    getDescripcion() {
        return this.#descripcion;
    }
    getImagen() {
        return this.#imagen;
    }
    getGenero() {
        return this.#genero;
    }
    getAnio() {
        return this.#anio;
    }
    getDuracion() {
        return this.#duracion;
    }
    getPais() {
        return this.#pais;
    }
    getReparto() {
        return this.#reparto;
    }
    getEstado() {
        return this.#estado;
    }
    
    // setters
    setCodigo(newCodigo) {
        this.#codigo = newCodigo;
    }
    setTitulo(newTitulo) {
        this.#titulo = newTitulo;
    }
    setDescripcion(newDescripcion) {
        this.#descripcion = newDescripcion;
    }
    setImagen(newImagen) {
        this.#imagen = newImagen;
    }
    setGenero(newGenero) {
        this.#genero = newGenero;
    }
    setAnio(newAnio) {
        this.#anio = newAnio;
    }
    setDuracion(newDuracion) {
        this.#duracion = newDuracion;
    }
    setPais(newPais) {
        this.#pais = newPais;
    }
    setReparto(newReparto) {
        this.#reparto = newReparto;
    }
    setEstado(newEstado) {
        this.#estado = newEstado;
    }
    //stringify accede a este metodo
    toJSON(){
        return {
            codigo: this.getCodigo(),
            titulo: this.getTitulo(),
            descripcion: this.getDescripcion(),
            imagen: this.getImagen(),
            genero: this.getGenero(),
            anio: this.getAnio(),
            duracion: this.getDuracion(),
            pais: this.getPais(),
            reparto: this.getReparto()
        }
    }
}