calcularTasaInteres = function(ingresoAnual){

    let float = recuperarFloat(ingresoAnual);
    
     if(float < 300000){
        floatResult= float * 0.16;
        return floatResult;
     }else if(float >= 300000 && float < 500000){
        floatResult = float *0.15;
        return floatResult;
     }else if(float >= 500000 && float < 1000000){
        floatResult = float *0.14;
        return floatResult;
     }else if(float >= 1000000 && float < 2000000){
        floatResult = float *0.13;
        return floatResult;
     }else if(float >= 2000000){
        floatResult = float *0.12;
        return floatResult;
     }
}

calcularCapacidadPago = function(edad, ingreso, egresos){
    let edadint;
    let ingresofloat;
    let egresofloat;
    let result;
    let capacidad;

    edadint = recuperarInt(edad);
    ingresofloat = recuperarFloat(ingreso);
    egresofloat= recuperarFloat(egresos);

    result = ingresofloat - egresofloat;

    if(edadint > 50){ 
        capacidad = result *0.30;
        return capacidad;
    }else if(edadint <= 50){
        capacidad = result * 0.40;
        return capacidad;
    }
}

calcularDescuento = function(precio, cantidad){
    let preciofloat;
    let cantidadint;
    let calculo;
    let descuento;
    let pagar;

    preciofloat = recuperarFloat(precio);
    cantidadint = recuperarInt(cantidad);

    calculo= preciofloat*cantidadint;
    
    if(cantidadint > 0 && cantidadint < 3){
        return calculo;
    }else if(cantidadint >= 3 &&cantidadint <= 5){
        descuento = calculo * 0.02;
        pagar = calculo - descuento;
        return pagar;
    }else if(cantidadint >=6 && cantidadint <= 11){
        descuento = calculo * 0.03;
        pagar = calculo - descuento;
        return pagar;
    }else if(cantidadint >= 12){
        descuento = calculo * 0.04;
        pagar = calculo - descuento;
        return pagar;
    }

}

determinarColesterol = function(nivelDeColesterol){
    let nivel;
    nivel = recuperarFloat(nivelDeColesterol);
    if(nivel < 100){
        mostrarTexto("lblColesterol", "Su nivel de colesterol es optimo (lo mejor para su salud)")
    }else if(nivel >=100 && nivel <= 159){
        mostrarTexto("lblColesterol", "Su nivel de colesterol es casi optimo")
    }else if(nivel >= 160 && nivel <= 189){
        mostrarTexto("lblColesterol", "Su nivel de colesterol es Alto")
    }else if(nivel >= 190){
        mostrarTexto("lblColesterol", "Su nivel de colesterol es muy Alto !!!")
    }
}

validarClave = function(clave){
    let caracter;
    caracter = clave.length;
    if (caracter>= 8 && caracter<= 16) {
        mostrarTexto("lblCLave", "Clave valida");
    } else {
        mostrarTexto("lblCLave", "Clave invalida");
    }
}

esMayuscula = function(caracter){
    let mayuscula;
    mayuscula = caracter.charCodeAt(0);

    if (mayuscula >= 65 && mayuscula <= 90)  {
        mostrarTexto("lblMayus", "Es mayuscula y su codigo ASCII es: "+mayuscula);
    }else{
        mostrarTexto("lblMayus", "No pertenece a las mayusculas y su codigo ASCII es: "+mayuscula);
    }
}

esMinuscula = function(caracter){
    let minuscula;
    minuscula = caracter.charCodeAt(0);

    if (minuscula >= 97 && minuscula <= 122)  {
        mostrarTexto("lblMinuscula", "Es Minuscula y su codigo ASCII es: "+minuscula);
    }else if(minuscula == 225)
    {
        mostrarTexto("lblMinuscula", "Es una Minuscula con tílde y su código ASCII es:  "+minuscula);
    }else if(minuscula == 233){
        mostrarTexto("lblMinuscula", "Es una Minuscula con tílde y su código ASCII es:  "+minuscula);
    }else if(minuscula == 237){
        mostrarTexto("lblMinuscula", "Es una Minuscula con tílde y su código ASCII es:  "+minuscula);
    }else if(minuscula == 243){
        mostrarTexto("lblMinuscula", "Es una Minuscula con tílde y su código ASCII es:  "+minuscula);
    }else if(minuscula == 250){
        mostrarTexto("lblMinuscula", "Es una Minuscula con tílde y su código ASCII es:  "+minuscula);
    }else{
        mostrarTexto("lblMinuscula", "No pertenece a ninguna y su código ASCII es: "+minuscula)
    }
}

esDigito = function(caracter){
    let digito;
    digito = caracter.charCodeAt(0);

    if (digito >= 48 && digito <= 57){
        mostrarTexto("lblDigito", "Es un digito y su  codigo ASCII:  "+digito);
    }else{
        mostrarTexto("lblDigito", "No es un digito y su codigo ASCII es:  "+digito);
    }
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){

    notaMatematica = recuperarFloat("txtMate");
    notaFisica = recuperarFloat("txtFisica");
    notaGeometria = recuperarFloat("txtGeometria");

    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria >90){
        mostrarTexto("lblPermiso", "Tienes permiso para Salir");
    }else{ 
        mostrarTexto("lblPermiso", "No tienes permiso para Salir");
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica = recuperarFloat("txtM");
    notaFisica = recuperarFloat("txtF");
    notaGeometria = recuperarFloat("txtG");

    if (notaMatematica > 90 || notaFisica > 90 && notaGeometria > 80){
        mostrarTexto("lblPermiso2", "Tienes permiso para Salir");
    }else{ 
        mostrarTexto("lblPermiso2", "No tienes permiso para Salir");
    }
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    notaMatematica = recuperarFloat("txtM1");
    notaFisica = recuperarFloat("txtF2");
    notaGeometria = recuperarFloat("txtG3");

    if (notaMatematica > 90 && notaFisica > 90 || notaGeometria > 80 && notaFisica > notaMatematica){
        mostrarTexto("lblPermiso3", "Tienes permiso para Salir");
    }else{ 
        mostrarTexto("lblPermiso3", "No tienes permiso para Salir");
    }
}
