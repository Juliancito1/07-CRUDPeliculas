class Pelicula{
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
        this.#codigo = 0;
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
    setCodigo(codigo) {
        this.#codigo = codigo;
    }
    setTitulo(titulo) {
        this.#titulo = titulo;
    }
    setDescripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    setImagen(imagen) {
        this.#imagen = imagen;
    }
    setGenero(genero) {
        this.#genero = genero;
    }
    setAnio(anio) {
        this.#anio = anio;
    }
    setDuracion(duracion) {
        this.#duracion = duracion;
    }
    setPais(pais) {
        this.#pais = pais;
    }
    setReparto(reparto) {
        this.#reparto = reparto;
    }
    setEstado(estado) {
        this.#estado = estado;
    }
}