
validarEstructura = function (placa) {
    let longitudCaracteres = placa.length;
    let mensaje = "";
    let mayuscula1 = esMayuscula1(placa);
    let mayuscula2 = esMayuscula2(placa);
    let mayuscula3 = esMayuscula3(placa);
    let guion = esGuion(placa);
    let digito1 = esDigito1(placa);
    let digito2 = esDigito2(placa);
    let digito3 = esDigito3(placa);
    let digito4 = esDigito4(placa);


    if (longitudCaracteres == 7 || longitudCaracteres == 8) {
        if (mayuscula1 == true) {
            if (mayuscula2 == true) {
                if (mayuscula3 == true) {
                    if (guion == true) {
                        if (digito1 == true) {
                            if (digito2 == true) {
                                if (digito3 == true) {
                                    if (longitudCaracteres == 8) {
                                        if (digito4 == true) {
                                            return null;
                                        } else {
                                            return mensaje = "EL OCTAVO CARACTER DEBE DE SER UN DIGITO";
                                        }
                                    } else {
                                        return null;
                                    }
                                } else {
                                    return mensaje = "EL SEPTIMO CARACTER DEBE DE SER UN DIGITO";
                                }
                            } else {
                                return mensaje = "EL SEXTO CARACTER DEBE DE SER UN DIGITO";
                            }
                        } else {
                            return mensaje = "EL QUINTO CARACTER DEBE DE SER UN DIGITO";
                        }
                    } else {
                        return mensaje = "EL CUARTO CARACTER DEBE DE SER UN GUION";
                    }
                } else {
                    return mensaje = "EL TERCER CARACTER DEBE SER MAYUSCULA";
                }
            } else {
                return mensaje = "EL SEGUNDO CARACTER DEBE SER MAYUSCULA";
            }
        } else {
            return mensaje = "EL PRIMER CARACTER DEBE SER MAYUSCULA";
        }
    } else {
        return mensaje = "Debe de ser igual a 7 u 8 digitos";
    }
}


obtenerProvincia = function (placa) {
    let mensaje = "";
    mayuscula = placa.charCodeAt(1);

    if (mayuscula == 65) {
        return mensaje = "Es de la provincia del Azuay";
    } else if (mayuscula == 66) {
        return mensaje = "Es de la provincia de Bolivar";
    } else if (mayuscula == 85) {
        return mensaje = "Es de la provincia de Cañar";
    } else if (mayuscula == 67) {
        return mensaje = "Es de la provincia del Carchi";
    } else if (mayuscula == 88) {
        return mensaje = "Es de la provincia del Cotopaxi";
    } else if (mayuscula == 72) {
        return mensaje = "Es de la provincia de Chimborazo";
    } else if (mayuscula == 79) {
        return mensaje = "Es de la provincia de El Oro";
    } else if (mayuscula == 69) {
        return mensaje = "Es de la provincia de Esmeraldas";
    } else if (mayuscula == 87) {
        return mensaje = "Es de la provincia de Galapagos";
    } else if (mayuscula == 71) {
        return mensaje = "Es de la provincia del Guayas";
    } else if (mayuscula == 73) {
        return mensaje = "Es de la provincia del Imbabura";
    } else if (mayuscula == 76) {
        return mensaje = "Es de la provincia del Loja";
    } else if (mayuscula == 82) {
        return mensaje = "Es de la provincia de Los Rios";
    } else if (mayuscula == 77) {
        return mensaje = "Es de la provincia de Manabi";
    } else if (mayuscula == 86) {
        return mensaje = "Es de la provincia de Morona Santiago";
    } else if (mayuscula == 78) {
        return mensaje = "Es de la provincia de Napo";
    } else if (mayuscula == 83) {
        return mensaje = "Es de la provincia de Pastaza";
    } else if (mayuscula == 80) {
        return mensaje = "Es de la provincia de Pichincha";
    } else if (mayuscula == 75) {
        return mensaje = "Es de la provincia de Sucumbios";
    } else if (mayuscula == 81) {
        return mensaje = "Es de la provincia de Orellana";
    } else if (mayuscula == 84) {
        return mensaje = "Es de la provincia de Tugurahua";
    } else if (mayuscula == 90) {
        return mensaje = "Es de la provincia de Zamora Chinchipe";
    } else if (mayuscula == 89) {
        return mensaje = "Es de la provincia del Santa Elena";
    } else {
        return null;
    }
}

obtenerTipoVehiculo = function (placa) {
    let mensaje = "";
    mayuscula = placa.charCodeAt(1);

    if (mayuscula == 65 || mayuscula == 90) {
        return mensaje = "Vehiculos Comerciales(Taxis y AutoBuses)";
    } else if (mayuscula == 69) {
        return mensaje = "Vehiculos gubernamentales";
    } else if (mayuscula == 88) {
        return mensaje = "Vehiculos de uso oficial";
    } else if (mayuscula == 83) {
        return mensaje = "Vehiculos del Gobierno provincial";
    } else if (mayuscula == 77) {
        return mensaje = "Vehiculos municipales";
    } else if (mayuscula != 65 & mayuscula != 90 & mayuscula != 69 & mayuscula != 88 & mayuscula != 83 & mayuscula != 77) {
        return mensaje = "Vehiculo particular o privado";
    } else {
        return null;
    }

}

obtenerDiaPicoYPlaca = function(placa) {
    let mensaje = "";
    let ultimoDigito;
    let ultimoCaracter;
    let longitudCaracteres = placa.length;
    ultimoDigito =placa.charCodeAt(6);
    ultimoCaracter =placa.charCodeAt(7);

    if(longitudCaracteres == 7){
        if (ultimoDigito == 49 || ultimoDigito == 50){
            return mensaje = "Pico y Placa es el dia lunes";
        }else if(ultimoDigito == 51 || ultimoDigito == 52){
            return mensaje = "Pico y Placa es el dia Martes";
        }else if(ultimoDigito == 53 || ultimoDigito == 54){
            return mensaje = "Pico y Placa es el dia Miercoles";
        }else if(ultimoDigito == 55 || ultimoDigito == 56){
            return mensaje = "Pico y Placa es el dia Jueves";
        }else if(ultimoDigito == 48 || ultimoDigito == 57){
            return mensaje = "Pico y Placa es el dia Viernes";
        }else{
            return null;
        }
    }else if (longitudCaracteres == 8){
        if (ultimoCaracter == 49 || ultimoCaracter == 50){
            return mensaje = "Pico y Placa es el dia lunes";
        }else if(ultimoCaracter == 50 || ultimoCaracter == 51){
            return mensaje = "Pico y Placa es el dia Martes";
        }else if(ultimoCaracter == 53 || ultimoCaracter == 54){
            return mensaje = "Pico y Placa es el dia Miercoles";
        }else if(ultimoCaracter == 55 || ultimoCaracter == 56){
            return mensaje = "Pico y Placa es el dia Jueves";
        }else if(ultimoCaracter == 48 || ultimoCaracter == 57){
            return mensaje = "Pico y Placa es el dia Viernes";
        }else{
            return null;
        }
    }

    
}

