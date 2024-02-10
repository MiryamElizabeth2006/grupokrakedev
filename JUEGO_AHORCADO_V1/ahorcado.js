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
            palabraSecreta = mayuscula;
            console.log(recuperar);
        }else if(mayuscula == false){
            alert("Debe ingresar una palabra de 5 letras mayusculas");
        }
    }else{
        alert("Debe ingresar una palabra de 5 letras mayusculas");
    }    
}


