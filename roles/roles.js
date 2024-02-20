let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0985425874", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1745646732", nombre: "Mariana", apellido: "Sanchez", sueldo: 600.0 }
]


let esNuevo = false;

let roles = [];

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");

    deshabilitarComponente("btnGuardarRol");

    deshabilitarCajaBoton();
    mostrarEmpleados();
    mostrarRoles();
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


modificarEmpleado = function (empleado) {
    let empleadoEncontrado = buscarEmpleado(empleado.cedula);

    if (empleadoEncontrado != null) {
        empleadoEncontrado.nombre = empleado.nombre;
        empleadoEncontrado.apellido = empleado.apellido;
        empleadoEncontrado.sueldo = empleado.sueldo;
    }

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

    let mayusculaNombre = mayuscula(valorNombre);
    let mayusculaApellido = mayuscula(valorApellido);

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
                            limpiar();
                            esNuevo = false

                        } else if (empleadoGuardados == false) {

                            modificarEmpleado(objetoEmpleado);
                            alert("Empleado Modificado Exitosamente");
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


mostrarOpcionEmpleado= function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
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

deshabilitarCajaBoton = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");

    deshabilitarComponente("btnGuardar");
}


ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let empleado = buscarEmpleado(valorCedula);

    if (empleado == null) {
        alert("Empleado no Existe");
    } else {
        alert("Empleado encontrado");
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);

        
    }

    esNuevo = true;

    deshabilitarComponente("txtCedula");

    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");

    habilitarComponente("btnGuardar");  
}

limpiar = function () {

    mostrarTextoEnCaja("txtCedula", " ");
    mostrarTextoEnCaja("txtNombre", " ");
    mostrarTextoEnCaja("txtApellido", " ");
    mostrarTextoEnCaja("txtSueldo", " ");
    mostrarTextoEnCaja("txtBusquedaCedula", " ");

    esNuevo = false;

    deshabilitarCajaBoton();
}

buscarPorRol = function(){
    let rolCedula= recuperarTexto("txtBusquedaCedulaRol");
    let busqueda = buscarEmpleado(rolCedula);

    if (busqueda != null){
        alert("Datos encontrados");
        mostrarTexto("infoCedula", busqueda.cedula);
        mostrarTexto("infoNombre", busqueda.nombre +" "+ busqueda.apellido);
        mostrarTexto("infoSueldo", busqueda.sueldo);

    }else{
        alert("Datos no encontrados", "");
        mostrarTexto("infoCedula", "");
        mostrarTexto("infoNombre", "");
        mostrarTexto("infoSueldo", "");  
    }
}

calcularAporteEmpleado = function(sueldo){
    let porcentajeSueldo;
    let totalAporte;
    porcentajeSueldo = sueldo * 9.45;
    totalAporte = porcentajeSueldo/100;
    aporteDeciamales = totalAporte.toFixed(2);
    return aporteDeciamales;
}
calcularValorAPagar = function(sueldo, aporteIESS, descuento){
    let result = (aporteIESS+descuento);
    let valorPagar;
    valorPagar = sueldo - result;

    return valorPagar;
}

calcularRol = function(){
    let recuperarSueldo = recuperarIntDiv("infoSueldo");
    let recuperarDescuento = recuperarFloat("txtDescuentos");
    let aporteEmpleado = calcularAporteEmpleado(recuperarSueldo);
    

    if(recuperarDescuento >= 0 && recuperarDescuento<=recuperarSueldo){
        let valorPagar = calcularValorAPagar(recuperarSueldo, aporteEmpleado, recuperarDescuento);
        let decimales = valorPagar.toFixed(2);

        mostrarTexto("infoIESS", aporteEmpleado);
        mostrarTexto("infoPago", decimales);

        habilitarComponente("btnGuardarRol");
    }
}

buscarRol = function(cedula){
    let elemento;
    let encontrado = null;
    for(let i=0; i< roles.length; i++){
        elemento = roles[i];

        if(elemento.cedula == cedula){
            encontrado == elemento;
            break;
        }
    }
    return encontrado;
}

agregarRol = function(rol){
    let buscar = buscarRol(rol.cedula);
    if(buscar == null){
        roles.push(rol);
        return true
    }else{
        alert("Ya existe un empleado con la cédula: "+ rol.cedula);
        return false
    }
}

calcularAporteEmpleador = function(sueldo){
    let valor = (sueldo * 11.15)/100;
    return valor
}

guardarRol = function(){
    let cedula = recuperarTextoDiv("infoCedula");;
    let nombre = recuperarTextoDiv("infoNombre");;
    let sueldo = recuperarFloatDiv("infoSueldo");;
    let valorAPagar = recuperarFloatDiv("infoPago");;
    let iessEmpleado = recuperarFloatDiv("infoIESS");

    let aporteEmpleador = calcularAporteEmpleador(sueldo);

    let objetoRol = {}
    objetoRol.cedula = cedula;
    objetoRol.nombre = nombre;
    objetoRol.sueldo = sueldo;
    objetoRol.valorPagar = valorAPagar;
    objetoRol.valorIess = iessEmpleado;
    objetoRol.valorEmpleador = aporteEmpleador;

    let agregar = agregarRol(objetoRol);
    if(agregar == true){
        alert("Exito")
        deshabilitarComponente("btnGuardarRol");
    }

    mostrarRoles();
    mostrarTotales();
}

mostrarRoles = function(){
    let cmpTabla = document.getElementById("tablaResumen");
    let tablaDatos = "<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th>"+
    "<tr>";

    let rolElement;

    for(let i = 0;i<roles.length;i++){
        rolElement = roles[i];
        tablaDatos +=
        "<tr><td>"+ rolElement.cedula + "</td>"+
        "<td>" + rolElement.nombre +"</td>"+
        "<td>"+ rolElement.valorPagar + "</td>"+
        "<td>"+ rolElement.valorIess + "</td>"+
        "<td>"+ rolElement.valorEmpleador+"</td>"+
        "</tr>" 
    }

    tablaDatos += "</table>";
    cmpTabla.innerHTML = tablaDatos;

}

mostrarTotales = function(){
    let totalEmpleado = 0.0;
    let totalEmpleador = 0.0;
    let totalAPagar = 0.0;
    let datos;

    for(let i = 0;i<roles.length;i++){
        datos = roles[i];
        totalEmpleado += datos.valorIess;
        totalEmpleador += datos.valorEmpleador;
        totalAPagar += datos.valorPagar;
    }

    mostrarTexto("infoTotalPago", totalAPagar);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);

    let nomina = totalAPagar + totalEmpleado + totalEmpleador;

    mostrarTexto("infoNomina", nomina);
}
