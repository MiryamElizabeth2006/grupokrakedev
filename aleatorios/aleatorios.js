 
 numerosAleatorios = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();//entre -0-1
    numeroMultiplicado = aleatorio*100;

    numeroEntero = parseInt(numeroMultiplicado); //entre 0-99

    valorDado = numeroEntero+1;//entre 0-100

    console.log(valorDado);

    return valorDado;
 }

 generarAleatorios = function(){
    let aleatorios = [];
    let cajaRecuperado;
    let aleatoriosGuardado;
    let miAleatorio;

    cajaRecuperado = recuperarInt("txtAleatorio");

    if (isNaN(cajaRecuperado) || cajaRecuperado < 5 || cajaRecuperado > 20) {
        alert("Por favor, ingrese un numero valido entre 5 y 20.");
      }else{
        for(i=0;i<cajaRecuperado;i++){
            aleatoriosGuardado = numerosAleatorios();
            aleatorios.push(aleatoriosGuardado);
            miAleatorio = aleatorios[i];
        }
    
        mostrarResultados(aleatorios);
    
      }   
 }

 mostrarResultados  = function(arregloNumeros){
    let tabla;

    let cmpTabla = document.getElementById("divTabla");

    tabla = "<table><tr><th>Numeros Aleatorios</th></tr>";
    tabla += "<tr><td>";
    tabla += arregloNumeros;
    tabla += "</td></tr>"
    tabla += "</table>"
    cmpTabla.innerHTML = tabla;
 }