calcularPromediosNotas = function(){
let promedio;
let resultado;
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


}

