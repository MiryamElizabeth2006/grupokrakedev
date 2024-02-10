validarPassword = function(password){
    let longitud;
    let errores = "";
    longitud = password.length;

    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneCaracterEspecial = false;

    
    for (let i = 0; i < longitud; i++) {
         let caracter = password[i];
      
        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        }
  
        if (caracter >= '0' && caracter <= '9') {
            tieneDigito = true;
        }

        if (caracter == '*' || caracter == '-' || caracter == '_') {
            tieneCaracterEspecial = true;
        }
    }

    if (longitud < 8 || longitud > 16) {
        errores += "La contraseña debe tener entre 8 y 16 caracteres. ";
    }
    if (password != tieneMayuscula) {
        errores += "La contraseña debe contener al menos una letra mayúscula. ";
    }
    if (password != tieneDigito) {
        errores += "La contraseña debe contener al menos un digito. ";
    }
    if (password != tieneCaracterEspecial) {
        errores += "La contraseña debe contener al menos uno de los siguientes caracteres especiales: *, - o _. ";
    }
    return errores;
}

function ejecutarValidacion() {
    let recuperar = recuperarTexto("txtPassword");
    let validar = validarPassword(recuperar);

    if (validar == "") {
        cambiarTexto("lblMensaje","Contraseña correcta.");
    } else {
        cambiarTexto("lblMensaje", "Errores de validacion:" + validar);
    }
}