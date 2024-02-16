let notas = [];

agregarElementos = function () {

    notas.push(5);
    notas.push(10);

    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR;
    for (indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }

}

generarTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla = "<table><tr><td>Uno</td></tr>" +
        "<tr><td>Dos</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarNotas = function () {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>Nota</th></tr>";
    let miNota;

    for (i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>"
    }

    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}


probarAgregar = function () {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota)
    mostrarNotas();

}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;

    for (i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}

ejecutarPromedio = function () {
    let retorno;
    retorno = calcularPromedio();
    mostrarTexto("lblPromedio", "Su promedio es" + retorno);
}