let frutas =["pera", "manzana", "banana"];

probarBusqueda = function(){
   let frutaIngresada = recuperarTexto("txtFrutas");
   let resultado = buscar(frutaIngresada);
   if(resultado==null){
    alert("NO EXISTE LA FRUTA");
   }else{
    alert(frutaIngresada+" EXISTE EN EL CESTO !!!");
   }
}

buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null; 
    for(let i =0;frutas.length;i++){
        elemento = frutas[i];
        if(fruta = elemento){
            frutaEncontrada = elemento;
            break;
        }
    }

    return frutaEncontrada;
}