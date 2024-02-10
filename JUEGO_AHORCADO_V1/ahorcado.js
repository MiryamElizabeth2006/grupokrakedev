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
        alert("La letra no es parte de la palabra");
        errores++;
        mostrarAhorcado();
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

mostrarAhorcado = function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
}



