let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzmientos(resultado);
    
   
}

modificarPuntos = function(numero){
puntos = puntos+numero;
cambiarTexto("lblPuntos", puntos);
//Si el jugador obtiene más de 20 puntos mostrar un mensaje en pantalla ganaste
if(puntos > 20){
cambiarTexto("lblMensaje", "GANASTE!!!");
}

}

//No recibe parametro
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
//muestra en pantalla
modificarLanzmientos = function(){
    
     lanzamientos = lanzamientos-1;
        cambiarTexto("lblLanzadas", lanzamientos);
    //Si los lanzamientos llegan  0 mostrar el mensaje game over
    if(lanzamientos == 0 & puntos < 20){

        cambiarTexto("lblMensaje", "GAMEOVER!!!");
        

    }else if(lanzamientos == 0 & puntos > 20){
        cambiarTexto("lblMensaje", "GANASTE!!!");
        
    }
    
    }

limpiarDado = function(){
    //colocar puntaje en 0 y lanzamiento en 5
     limpiar("lblPuntos", "0");
     limpiar("lblLanzadas", "5");
//el limpiado va en las variables y pantalla
    lanzamientos = 5;
    puntos = 0;
//quitar la imagen de los dados ""
    cambiarImagen("imgDado", " ");

    cambiarTexto("lblMensaje", " ");
}



//funcion mostrar cara, recibe el numero que quiere mostrar
//nuestra la imagen correspondiente al numero que recibe
mostrarCara = function(numero){
if(numero == 1){//el == se compara, mientras que con igual se asigna
    cambiarImagen("imgDado", "dados1.png");
}else if(numero == 2){
    cambiarImagen("imgDado", "dados2.png");
}else if(numero == 3){
    cambiarImagen("imgDado", "dados3.png");
}else if(numero == 4){
    cambiarImagen("imgDado", "dados4.png");
}else if(numero == 5){
    cambiarImagen("imgDado", "dados5.png");
}else if(numero == 6){
    cambiarImagen("imgDado", "dados6.png");
}
}


lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}