
calcularDescuentoPorVolumen = function(cantidad, precio){
     
     let valorDescuento;
     let iva;

    let subtotal = cantidad * precio;
    iva = subtotal * 0.12;

    if (cantidad >0 && cantidad <3){
        return subtotal;
    }else if (cantidad >=3 && cantidad <= 5){
       valorDescuento =  subtotal * 0.03;
       return valorDescuento;
    }else if(cantidad >=6 && cantidad <= 11){
        valorDescuento = subtotal * 0.04;
        return valorDescuento;
    }else if (cantidad >= 12){
        valorDescuento = subtotal * 0.05;
        return valorDescuento;
    }
}

