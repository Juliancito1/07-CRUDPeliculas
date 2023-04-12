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

export function sumarioValidaciones(titulo,descripcion,imagen,duracion){
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
    if(resumen.length !== 0){
        return resumen;
    }else{
        console.log('todo esta ok con el formulario');
        return '';
    }
}