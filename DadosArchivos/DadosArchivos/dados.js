jugar = function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio );
    if(aleatorio>3){
        cambiarTexto("lblTexto", " ES MAYOR A 3 GANASTE!!!");
    }else{
        cambiarTexto("lblTexto", " ES MENOR A 3 PERDISTE :(");
    }
}
//Función lanzar Dados
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();//entre -0-1
    numeroMultiplicado = aleatorio*6;

    numeroEntero = parseInt(numeroMultiplicado); //entre 0-5

    valorDado = numeroEntero+1;//entre 0-6

    return valorDado;
}
//No rcibe parametros
//reotrna un número aleatorio 1-6
