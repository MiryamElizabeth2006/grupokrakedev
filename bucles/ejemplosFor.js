mostrarNumeros = function () {
    console.log("Antes del for");

    for (let i = 0; i < 4; i++) {
        console.log(i);
    }


    console.log("Despues del for");
}

mostrarNumeros1 = function () {
    console.log("Antes del for");

    for (let indice = 0; indice <= 5; indice++) {
        console.log(indice);
    }


    console.log("Despues del for");
}

mostrarPares = function () {
    console.log("Antes del for");
    for (x = 2; x <= 10; x += 2) {
        console.log(x);
    }


    console.log("Despues del for");
}

mostrarInverso = function () {
    console.log("Antes del for");
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }

    console.log("Despues del for");
}

hackearNasaPelis = function () {
    //hackeando Nasa 0%.....100%
    for (porcentaje = 0; porcentaje < 100; porcentaje += 10) {
        console.log("hackeando nasa "+porcentaje+"%");
    }
    console.log("La Nasa ha sido Hackeada");
}

numerosImpares= function(){
    console.log("Antes del for");
    for(impares = 1;impares<=21;impares+=2){
        console.log(impares);
    }
    console.log("Despues del for")
}