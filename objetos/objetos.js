probarAtributos = function(){
    let persona = {
        nombre : "Pedro",
        apellido : "Morales",
        edad : 24,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estaVivo == false){
        console.log("No esta vivo");
    }else{
        console.log("Esta vivo");
    }
}

crearProducto = function(){
    let producto1 = {
        nombre:"sandia",
        precio:2.50,
        stock: 10
    }
    let producto2 ={
        nombre:"piña",
        precio:1.50,
        stock: 5     
    }

    console.log("el nombre del producto 1 es: "+producto1.nombre);
    console.log("el precio del producto 2 es: "+producto2.precio);

    if(producto1.stock > producto2.stock){
        console.log("el producto 1 tiene mayor stock: "+producto1.stock+"  "+"y el producto 2 tiene meonor stock: "+producto2.stock);
    }else if(producto1.stock < producto2.stock){
        console.log("el producto 1 tiene menor stock: "+producto1.stock+"  "+"y el producto 2 tiene mayor stock: "+producto2.stock);
    }else if(producto1.stock == producto2.stock){
        console.log("el producto 1 tiene igual stock: "+producto1.stock+"  "+"que con el producto 2: "+producto2.stock);
    }

}

crearCliente = function(){
    let cliente = {
        cedula:175564,
        nombre: "Aron"
    };

    let cliente1 = {};
    cliente1.nombre = "Lulu";
    cliente1.apellido = "Caicedo";
    cliente1.cedula = 1755646732;

}

probarIncrementarSaldo = function(){
    let cta ={numero:12345, saldo: 34.0}
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}

probarDeterminarMayor = function(){
    let per1 ={nombre:"Daniel", edad:45}
    let per2 ={nombre:"Luisa", edad:48}
    let mayor;
    mayor = determinarMayor(per1, per2);
    if (mayor != null){
        console.log("El mayor es: "+mayor.nombre);
    }
}

incrementarSaldo = function(cuenta, monto){
    cuenta.saldo +=monto;
}

determinarMayor = function(persona1, persona2){

    if(persona1.edad > persona2.edad){
        return persona1;
    }else if(persona2.edad > persona1.edad){
        return persona2;
    }else{
        return null;
    }

}