let notas = [];

agregarElementos = function(){
    
    notas.push(5);
    notas.push(10);

    console.log(notas.length);
}

recorrerArreglo = function(){
    let notaR;
    for(indice=0;indice<notas.length;indice++){ 
    notaR = notas[indice];
    console.log(notaR);
    }

}

probarAgregar = function(){
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function(nota){
    notas.push(nota)

}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio;

    for(i=0;i < notas.length; i++){
        sumaNotas += notas[i];
    }
    promedio = sumaNotas/notas.length;
    return promedio;
}

ejecutarPromedio = function(){
    let retorno;
    retorno = calcularPromedio();
    mostrarTexto("lblPromedio", "Su promedio es"+retorno);
}