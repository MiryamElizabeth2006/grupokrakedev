puntosUsuario=0
puntoComputador=0
juego = function(){
    let elemento1;
    let elemneto2;
    elemento1 = generarElemento1();
    elemneto2 = generarElemento2();

    generarRuta1(elemento1);
    generarRuta2(elemneto2);

    determinarGanador(elemento1);
    determinarGanador(elemneto2);

    if(elemento1 == elemneto2){
        mostrarTexto("lblGanador","Empate");
    }else if(elemento1 == 1 && elemneto2 == 2){
        mostrarTexto("lblGanador","Perdiste");
    }else if(elemento1 == 1 && elemneto2 == 3){
        mostrarTexto("lblGanador","Ganaste");
    }else if(elemento1 == 2 && elemneto2 == 1){
        mostrarTexto("lblGanador","Ganaste");
    }else if(elemento1 == 2 && elemneto2 == 3){
        mostrarTexto("lblGanador","Perdiste");
    }else if(elemento1 == 3 && elemneto2 == 1){
        mostrarTexto("lblGanador","Perdiste");
    }else if(elemento1 == 3 && elemneto2 == 2){
        mostrarTexto("lblGanador","Ganaste");
    }
}