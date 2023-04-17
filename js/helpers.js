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

//agregar la validacion año 1985 - (año actual + 1)
//validacion para el pais
//validacion para el reparto

export function sumarioValidaciones(titulo,descripcion,imagen,duracion,genero){
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
    if(resumen.length !== 0){
        return resumen;
    }else{
        console.log('todo esta ok con el formulario');
        return '';
    }
}