validarPLaca = function () {
    let recuperado;
    recuperado = recuperarTexto("txtPlaca");

    let erroresEstructura = "";
    erroresEstructura = validarEstructura(recuperado);

    let provincia = "";
    provincia = obtenerProvincia(recuperado);


    let tipoVehiculo = "";
    tipoVehiculo = obtenerTipoVehiculo(recuperado);

    let picoPlaca = "";
    picoPlaca = obtenerDiaPicoYPlaca(recuperado);


    if (erroresEstructura == null) {
        mostrarTexto("lblValidar", "Toda la estructura esta bien");
        if (provincia != null) {
            mostrarTexto("lblProvincia", provincia);
            if (tipoVehiculo != null) {
                mostrarTexto("lblTipoVehiculo", tipoVehiculo);
                if (obtenerDiaPicoYPlaca != null) {
                    mostrarTexto("lblPicoPlaca", picoPlaca);
                    mostrarTexto("lblPicoPlaca1", "Sabados, Domingos y Feriado Libre Circulacion");
                }
            } else {
                mostrarTexto("lblTipoVehiculo", "VEHICULO NO EXSITE")
                mostrarTexto("lblProvincia", "");
                mostrarTexto("lblPicoPlaca", "");
                mostrarTexto("lblPicoPlaca1", "");
                mostrarTexto("lblValidar", erroresEstructura);
                
            }
        } else {
            mostrarTexto("lblProvincia", "Provincia no existe");
            mostrarTexto("lblTipoVehiculo", "");
            mostrarTexto("lblPicoPlaca", "");
            mostrarTexto("lblPicoPlaca1", "");
            mostrarTexto("lblValidar", erroresEstructura);
            
        }
    } else {
        mostrarTexto("lblProvincia", "");
        mostrarTexto("lblTipoVehiculo", "");
        mostrarTexto("lblPicoPlaca", "");
        mostrarTexto("lblPicoPlaca1", "");
        mostrarTexto("lblValidar", erroresEstructura);
        
    }
}

limpiar = function () {
    mostrarTextoEnCaja("txtPlaca", "")
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lblTipoVehiculo", "");
    mostrarTexto("lblValidar", "");
    mostrarTexto("lblPicoPlaca");
    mostrarTexto("lblPicoPlaca1");
}