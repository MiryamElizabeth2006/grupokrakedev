let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0985425874", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1745646732", nombre: "Mariana", apellido: "Sanchez", sueldo: 600.0 }
]

let esNuevo = false;

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");

    deshabilitarCajaBoton();
    mostrarEmpleados();
}

ejecutarNuevo = function () {

    esNuevo = true;

    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");

    habilitarComponente("btnGuardar");
}


buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}


agregarEmpleado = function (empleado) {
    let resultadoEmpleado;
    resultadoEmpleado = buscarEmpleado(empleado.cedula);

    if (resultadoEmpleado == null) {
        return true;
    } else {
        return false;
    }
}

mayuscula = function (caracter) {
    if (caracter >= 'A' && caracter <= 'Z') {
        return true;
    } else {
        return false;
    }
}


guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let caracteresCedula;
    let valorNombre = recuperarTexto("txtNombre");
    let caracteresNombre;
    let valorApellido = recuperarTexto("txtApellido");
    let caracteresApellido;
    let valorSueldo = recuperarFloat("txtSueldo");

    let empleadoGuardados;

    let objetoEmpleado = {};

    let mayusculaNombre = Mayuscula(valorNombre);
    let mayusculaApellido = Mayuscula(valorApellido);

    caracteresCedula = valorCedula.length;
    caracteresNombre = valorNombre.length;
    caracteresApellido = valorApellido.length;
    if (caracteresCedula == 10) {
        mostrarTexto("lblErrorCedula", "");
        if (caracteresNombre >= 3 && mayusculaNombre == true) {
            mostrarTexto("lblErrorNombre", "");
            if (caracteresApellido >= 3 && mayusculaApellido == true) {
                mostrarTexto("lblErrorApellido", "");
                if (valorSueldo >= 400 && valorSueldo <= 5000) {
                    mostrarTexto("lblErrorSueldo", "");
                    if (esNuevo == true) {
                        objetoEmpleado.cedula = valorCedula;
                        objetoEmpleado.nombre = valorNombre;
                        objetoEmpleado.apellido = valorApellido;
                        objetoEmpleado.sueldo = valorSueldo;

                        empleadoGuardados = agregarEmpleado(objetoEmpleado);

                        if (empleadoGuardados == true) {
                            empleados.push(objetoEmpleado);
                            alert("Empleado Gurdado Correctamente");
                            mostrarEmpleados();
                            deshabilitarCajaBoton();
                        } else {
                            alert("Ya existe un empleado con la cedula " + valorCedula + " " + "En lugar de " + valorCedula);
                        }
                    } else {
                        alert("Revise sus datos !!!");
                    }
                } else {
                    mostrarTexto("lblErrorSueldo", "El valor del suledo debe ser entre 400 y 5000 dolares");
                }
            } else {
                mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres y deben de ser Mayusculas");
            }
        } else {
            mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres y deben de ser mayusculas");
        }
    } else {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 numeros");
    }

}





mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table> <tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +

        "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];

        contenidoTabla += "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}

deshabilitarCajaBoton = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

    deshabilitarComponente("btnGuardar");
}