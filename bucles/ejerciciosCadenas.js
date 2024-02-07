EjecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena){
    //0123456
    //Juanito
    let caracter;

    for(posicion = 0;posicion < cadena.length;posicion++){
        caracter = cadena.charAt(posicion)
        console.log("Caracter "+ caracter + " Posicion " + posicion);
    }

    for(posicion = 0;posicion <= cadena.length-1;posicion++){
        caracter = cadena.charAt(posicion)
        console.log("CARACTER "+ caracter + " Posicion " + posicion);
    }
}

ejecutarPrueba2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    InvertirCadena(mensaje);
}

InvertirCadena = function(cadena){
    let resultado = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
      resultado = resultado + cadena[i];
      mostrarTexto("lblInvertir", resultado);
    }
    
}