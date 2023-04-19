export function cantidadCaracteres(texto,min,max){
    if(texto.length >= min && texto.length <= max)
    {
        console.log('cantidad de caracteres correcto');
        return true;
    }else{
        console.log('cantidad de caracteres incorrecto');
        return false;
    }
}

function validarDuracion(value){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(value))
    {
        console.log('digito valido de 1 a 3 caracteres');
        return true;
    }
    else{
        console.log('no paso la expresion regular del tiempo')
        return false;
    }
}

function validarURLImagen(value){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if(patron.test(value)){
        console.log('url valida');
        return true;
    }else{
        console.log('url invalida');
        return false;
    }
}

function validarGenero(texto){
    if(texto.length > 0 && (texto === 'Aventura' || texto  === 'Accion' || texto === 'Drama' || texto === 'Terror')){
        console.log('genero valido')
        return true;
    }
    else{
        console.log('genero invalido')
        return false;
    }
}

//agregar la validacion año 1895 - (año actual + 1)
function validarAnio(value){
    let patron = /^[0-9]{4}$/;
    if(patron.test(value) && value >= 1895 && value <= 2024)
    {
        console.log('anio correcto');
        return true;
    }
    else
    {
        console.log(value);
        console.log('anio incorrecto')
        return false;
    }
}
//validacion para el pais
function validarPais(texto){
    let patron = /[A-Z]{1}/;
    if(texto.length > 0 && patron.test(texto))
    {
        console.log('pais correcto');
        return true;
    }
    else{
        console.log('pais incorrecto');
        return false;
    }
}
//validacion para el reparto
function validarReparto(texto){
    let patron = /([A-Z])[a-z]+[$,]{1}[\s]/
    if(texto.length > 0 && patron.test(texto))
    {
        console.log("reparto correcto");
        return true;
    }
    else{
        console.log("reparto incorrecto");
        return false;
    }
}

export function sumarioValidaciones(titulo,descripcion,imagen,duracion,genero,anio,pais,reparto){
    let resumen = '';
    if(!cantidadCaracteres(titulo,3,100))
    {
        resumen += 'Corregir el campo del titulo debe contener entre 3 y 100 caracteres <br>';
    }
    if(!cantidadCaracteres(descripcion,10,200))
    {
        resumen += 'Corregir la cantidad de caracteres de la descripción <br>';
    }
    if(!validarDuracion(duracion))
    {
        resumen += 'Corregir la duracion, debe ser un numero de 3 digitos como maximo <br>';
    }
    if(!validarURLImagen(imagen))
    {
        resumen += 'Corregir la URL de la imagen, la extension debe ser .jpg, .gif o .png <br>';
    }
    if(!validarGenero(genero)){
        resumen += 'Seleccione un genero de la lista de opciones <br>'
    }
    if(anio.value !== 0 && !validarAnio(anio)){
        resumen += 'Ingrese un año válido entre 1895 y 2024 <br>'
    }
    if(pais.value !== 0 && !validarPais(pais)){
        resumen += 'Ingrese el pais con la primera letra mayúscula <br>'
    }
    if(reparto.value !== 0 && !validarReparto(reparto)){
        resumen += 'Ingrese el reparto usando una coma al final de cada actor/actriz <br>'
    }
    if(resumen.length !== 0){
        return resumen;
    }else{
        console.log('todo esta ok con el formulario');
        return '';
    }
}