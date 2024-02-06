llamarTasaInteres = function(){
    let interes;
    let decimal;

    interes = calcularTasaInteres("txtIngreso");
    decimal = interes.toFixed(2)
    mostrarTexto("lblIngreso", "El valor de la  tasa de interes es: "+decimal);
}

llamarCuota = function(){
    let pago;
    let valor;
     pago  = calcularCapacidadPago("txtEdad", "txtIngresos", "txtEgresos");
     valor = pago.toFixed(2);
     mostrarTexto("lblcuota", "El valor de la cuota que puede pagar mensulamete es: "+ valor);   
}

llamarDsecuento = function(){
    let descuentos;
    let descDescimal;
    descuentos = calcularDescuento("txtPrecio", "txtCantidad");
    descDescimal= descuentos.toFixed(2);

    mostrarTexto("lblDescuento", "Valor a pagar: "+ descDescimal);
}

llamarColesterol = function(){
    determinarColesterol("txtColesterol");
}

llamarClave = function(){
    let clave;
    clave = recuperarTexto("txtClave");
    validarClave(clave);
}

llamarMayuscula = function(){
    let mayus;
    mayus = recuperarTexto("txtMayus");
    esMayuscula(mayus);
}

llamarMinuscula = function(){
    let minus;
    minus= recuperarTexto("txtMinuscula");
    esMinuscula(minus);
}

llamarDigito = function(){
    let digitar;
    digitar = recuperarTexto("txtDigito");

    esDigito(digitar);
}