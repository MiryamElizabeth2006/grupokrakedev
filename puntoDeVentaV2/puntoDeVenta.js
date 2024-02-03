

calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let producto;
    let precio;
    let cantidad;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let redondeo;
    let error1 = false;
    let error2 = false;

    producto = recuperarTexto("txtProducto");
    cantidad = recuperarTexto("txtCantidad");
    precio = recuperarTexto("txtPrecio");

    let conteo;
    conteo = producto.length;

    if (producto == "") {
        error2 = true;
        mostrarTexto("lblMensaje1", "CAMPO OBLIGATORIO");
    } else if (conteo > 10) {
        error1 = true;
        mostrarTexto("lblMensaje1", "Mas Caracteres de lo permitido");
    }
    if (cantidad == "") {
        error2 = true;
        mostrarTexto("lblMensaje2", "CAMPO OBLIGATORIO");
    } else if (cantidad > 100) {
        error1 = true;
        mostrarTexto("lblMensaje2", "Cantidad de Producto excedido");
    }
    if (precio == "") {
        error2 = true;
        mostrarTexto("lblMensaje3", "CAMPO OBLIGATORIO");
    } else if (precio > 50) {
        error1= true;
        mostrarTexto("lblMensaje3", "Precio excedido de lo normal");

    } else if (error1 == false && error2 == false) {
        if (cantidad >= 0 && cantidad < 3) {

            valorIVA = (cantidad * precio) * 0.12;
            valorSubtotal = cantidad * precio;
            valorTotal = valorSubtotal + valorIVA;
            valorDescuento = 0.0;
            redondeo = valorTotal.toFixed(2);

            mostrarTexto("lblDescuento", valorDescuento);
            mostrarTexto("lblValorIVA", valorIVA)
            mostrarTexto("lblSubtotal", valorSubtotal);
            mostrarTexto("lblTotal", redondeo);
        } else {

            valorDescuento = calcularDescuentoPorVolumen(cantidad, precio);
            valorIVA = (cantidad * precio) * 0.12;
            valorSubtotal = cantidad * precio;
            valorTotal = valorSubtotal + valorIVA - valorDescuento;

            redondeo = valorTotal.toFixed(2);

            mostrarTexto("lblDescuento", valorDescuento);
            mostrarTexto("lblValorIVA", valorIVA)
            mostrarTexto("lblSubtotal", valorSubtotal);
            mostrarTexto("lblTotal", redondeo);
        }
    }
}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblMensaje1", "");
    mostrarTexto("lblMensaje2", "");
    mostrarTexto("lblMensaje3", "");

}
/* SI TODO FUNCIONA, HACER UN PUSH */