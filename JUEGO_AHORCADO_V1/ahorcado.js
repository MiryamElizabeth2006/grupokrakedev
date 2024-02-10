//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//Crear Función

let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;


esMayuscula = function(caracter){
     if (caracter >= 'A' && caracter <= 'Z') {
        return true;
    }else{
        return false;
    }
}

//Ingresar Palabra Secreta
guardarPalabra = function(){
    let recuperar = recuperarTexto("txtSecreta");
    let longitudCaracter = recuperar.length;
    mayuscula = esMayuscula(recuperar);

    if(longitudCaracter == 5){
        if(mayuscula == true){
            palabraSecreta = recuperar;
            console.log(recuperar);
        }else if(mayuscula == false){
            alert("Debe ingresar una palabra de 5 letras mayusculas");
        }
    }else{
        alert("Debe ingresar una palabra de 5 letras mayusculas");
    }    
}

mostrarLetra = function(letra, posicion){
    if (posicion == 0) {
        mostrarTexto("div0", letra)
    } else if (posicion == 1) {
        mostrarTexto("div1", letra)
    } else if (posicion == 2) {
        mostrarTexto("div2", letra)
    } else if (posicion == 3) {
        mostrarTexto("div3", letra)
    } else if (posicion == 4) {
        mostrarTexto("div4", letra)
    }

}

validar = function(letra){
   let letrasEncontradas=0;
    for(let i=0; i < palabraSecreta.length; i++){
        if(palabraSecreta.charAt(i) == letra){
            mostrarLetra(letra, i)
            letrasEncontradas++;
        }
    }

    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
    } else{
        coincidencias++;
    }
}

ingresarLetra = function(){

    let recuperado = recuperarTexto("txtLetra"); 
    if(esMayuscula(recuperado)){
        validar(recuperado);
        if(coincidencias == 5){
            alert("Ha ganado");
        }
        if(intentos == 10){
            alert("Ha perdido");
        }
    }else{
        alert("Solo se aceptan mayusculas");
    }
    intentos++;
}




