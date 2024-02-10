//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//Crear Función

let palabraSecreta;

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

validar = function(){
   let letrasEncontradas=0;
    for(let i=0; i < palabraSecreta.length; i++){
        if(palabraSecreta.charAt(i)==letra){
            mostrarLetra(letra, i)
            letrasEncontradas++
        }
    }
}

