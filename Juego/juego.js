puntosUsuario=0
puntosComputador=0
juego = function(){
    let elemento1;
    let elemneto2;
    elemento1 = generarElemento1();
    elemneto2 = generarElemento2();

    generarRutaUsuario(elemento1);
    generarRutaComputador(elemneto2);

    determinarGanador(elemento1);
    determinarGanador(elemneto2);

    if(elemento1 == elemneto2){
        mostrarTexto("lblGanador","Empate");
    }else if(elemento1 == 1 && elemneto2 == 2){
        mostrarTexto("lblGanador","Perdiste");
        modificarPuntosComputadora();
    }else if(elemento1 == 1 && elemneto2 == 3){
        mostrarTexto("lblGanador","Ganaste");
        modificarPuntosUsuario();
    }else if(elemento1 == 2 && elemneto2 == 1){
        mostrarTexto("lblGanador","Ganaste");
        modificarPuntosUsuario();
    }else if(elemento1 == 2 && elemneto2 == 3){
        mostrarTexto("lblGanador","Perdiste");
        modificarPuntosComputadora();
    }else if(elemento1 == 3 && elemneto2 == 1){
        mostrarTexto("lblGanador","Perdiste");
        modificarPuntosComputadora();
    }else if(elemento1 == 3 && elemneto2 == 2){
        mostrarTexto("lblGanador","Ganaste");
        modificarPuntosUsuario();
    }
}

modificarPuntosUsuario = function(){
    puntosUsuario = puntosUsuario + 1;
    mostrarTexto("lblPuntajeUsuario", "Puntuacion: " + puntosUsuario);
    if(puntosUsuario == 5){
        mostrarTexto("lblGanador", "Has Ganado el Juego");
    } 
}

modificarPuntosComputadora = function(){
    puntosComputador = puntosComputador + 1;
    mostrarTexto("lblPuntajeComputador", "Puntuacion: " + puntosComputador);
    if(puntosComputador == 5){
        mostrarTexto("lblGanador", "Computador te ha vencido");
    } 
}

