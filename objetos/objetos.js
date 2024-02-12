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