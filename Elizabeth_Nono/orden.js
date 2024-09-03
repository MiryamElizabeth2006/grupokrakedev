let personas = [
    {nombre:"Marcos", edad: 18},
    {nombre:"Roberto", edad: 15},
    {nombre:"Kate", edad: 25},
    {nombre:"Diana", edad: 12},
    {nombre:"Benja", edad: 5}
]
agregarPersona = function(){
    let nombreRecuperada = recuperarTexto("txtNombre");
    let edadRecuperada = recuperarInt("txtEdad");

    let nombreLongitud = nombreRecuperada.length;

    if(nombreLongitud >= 3){
        if(edadRecuperada >= 0 && edadRecuperada <= 100){
            let nuevaPersona = {};
            nuevaPersona.nombre = nombreRecuperada;
            nuevaPersona.edad = edadRecuperada;

            personas.push(nuevaPersona);
            alert("Prsona agregada Correctamente");
            mostrarTabla();
        }else{
            mostrarTexto("lblErrorEdad", "La edad debe estar entre 0 y 100"); 
        }
    }else{
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres");
    }
}
    

mostrarTabla = function(){
    let cmpTabla = document.getElementById("tablaPersonas");
    let tablaPersonas = "<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "<tr>";

    let elementoPersona;

    for(let i = 0;i<personas.length;i++){
        elementoPersona = personas[i];
        tablaPersonas +=
        "<tr><td>"+ elementoPersona.nombre + "</td>"+
        "<td>" + elementoPersona.edad +"</td>"+
        "</tr>" 
    }

    tablaPersonas += "</table>";
    cmpTabla.innerHTML = tablaPersonas;

}

encontrarMayor = function(){
    let personaMayor = personas[0];
    let elementoPersona;

    for(let i = 1 ;i < personas.length;i++){
        elementoPersona = personas[i];

        if(elementoPersona.edad > personaMayor.edad){
            personaMayor = elementoPersona;
            console.log(personaMayor);
        }
    }
    return personaMayor;
}

determinarMayor = function(){
    let mayor = encontrarMayor();

    mostrarTexto("lblMostrar","El o la mayor es: "+ mayor.nombre +" Con la edad de "+ mayor.edad+ " años")

}



encontrarMenor = function(){
    let personaMenor = personas[0];
    let elementoPersona;

    for(let i = 1 ;i < personas.length;i++){
        elementoPersona = personas[i];

        if(elementoPersona.edad < personaMenor.edad){
            personaMenor = elementoPersona;
            console.log(personaMenor);
        }
    }
    return personaMenor;
}

determinarMenor = function(){
    let menor = encontrarMenor();

    mostrarTexto("lblMostrar","El o la menor es: "+ menor.nombre +" Con la edad de "+ menor.edad+ " años")

}