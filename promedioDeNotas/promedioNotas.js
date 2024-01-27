calcularPromediosNotas = function(){
let promedio;
let nota1Float;
let nota2Float;
let nota3Float;
let decimales;

nota1Float = recuperarFloat("txtNota1");
nota2Float = recuperarFloat("txtNota2");
nota3Float = recuperarFloat("txtNota3");

promedio = calcularPromedio(nota1Float, nota2Float, nota3Float);
decimales = promedio.toFixed(2);

mostrarTexto("lblResultado", decimales);

if(decimales > 7){
    mostrarImagen("imgNotas", "imagenes/exito.gif");
}else{
    mostrarImagen("imgNotas", "imagenes/fracaso.gif");
}
}

