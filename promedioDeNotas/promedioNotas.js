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

if(decimales > 0 && decimales < 5){
    mostrarImagen("imgNotas", "imagenes/fracaso.gif");
    mostrarTexto("lblmensaje", "REPROBADO");
}else if(decimales >= 5 && decimales <= 8 ){
    mostrarImagen("imgNotas", "imagenes/buentrabajo.gif");
    mostrarTexto("lblmensaje", "BUEN TRABAJO");
}else if(decimales >8 && decimales <= 10){
    mostrarImagen("imgNotas", "imagenes/exito.gif");
    mostrarTexto("lblmensaje", "EXCELENTE");
}else if(decimales < 0 || decimales > 10){
    mostrarImagen("imgNotas", "imagenes/incorecto.gif");
    mostrarTexto("lblmensaje", "DATOS INCORRECTOS");
}
}

