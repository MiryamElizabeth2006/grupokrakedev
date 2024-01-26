

calcularValorDescuento = function(monto, porcentajeDescuento){
 //monto es el valor sin descuento
 let valorDescuento = (monto *porcentajeDescuento) /100;
 return valorDescuento;
}

calcularIva = function(monto){
    
    let iva = monto *0.12;
    return iva; 

}

calcularSubtotal = function(precio, cantidad){
    let totalPagar = precio * cantidad;
    return totalPagar;
}

calcularTotal = function(subtotal, descuento, iva){
let total = subtotal-descuento+iva;
return total;
}
