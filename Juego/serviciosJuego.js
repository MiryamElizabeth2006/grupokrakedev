obtenerAleatorio = function () {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 3;

    numeroEntero = parseInt(numeroMultiplicado);

    valorDado = numeroEntero + 1;

    return valorDado;
}

generarElemento1 = function () {
    let aleatorio;
    aleatorio = obtenerAleatorio();
    piedra = 1;
    papel = 2;
    tijera = 3;

    if (aleatorio == 1) {
        mostrarTexto("lblObjetoUsuario", "Piedra");
        return piedra;
    } else if (aleatorio == 2) {
        mostrarTexto("lblObjetoUsuario", "Papel");
        return papel;
    } else if (aleatorio == 3) {
        mostrarTexto("lblObjetoUsuario", "Tijera");
        return tijera;
    }
}
generarElemento2 = function () {
    let aleatorio;
    aleatorio = obtenerAleatorio();
    piedra = 1;
    papel = 2;
    tijera = 3;

    if (aleatorio == 1) {
        mostrarTexto("lblObjetoComputador", "Piedra");
        return piedra;
    } else if (aleatorio == 2) {
        mostrarTexto("lblObjetoComputador", "Papel");
        return papel;return papel;
    } else if (aleatorio == 3) {
        mostrarTexto("lblObjetoComputador", "Tijera");
        return tijera;
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {

    if (eleccionJugador1 == eleccionJugador2) {
        return 0;
    } else if (eleccionJugador1 > eleccionJugador2) {
        return 1;
    }else if(eleccionJugador1 < eleccionJugador2){
        return 2;
    }
}

generarRutaUsuario = function(nombre){
    if(nombre == 1){
        mostrarImagen("imgUsuario", "imagenes/piedra.png");
    }else if(nombre == 2){
        mostrarImagen("imgUsuario", "imagenes/papel.png");
    }else if(nombre == 3){
        mostrarImagen("imgUsuario", "imagenes/tijera.png");
    }
}

generarRutaComputador = function(nombre){
    if(nombre == 1){
        mostrarImagen("imgComputador", "imagenes/piedra.png");
    }else if(nombre == 2){
        mostrarImagen("imgComputador", "imagenes/papel.png");
    }else if(nombre == 3){
        mostrarImagen("imgComputador", "imagenes/tijera.png");
    }
}