esMayuscula1 = function(caracter){
    let mayuscula;
    mayuscula = caracter.charCodeAt(0);

    if (mayuscula >= 65 && mayuscula <= 90)  {
        return true;
    }else{
        return false;
    }
}

esMayuscula2 = function(caracter){
    let mayuscula;
    mayuscula = caracter.charCodeAt(1);

    if (mayuscula >= 65 && mayuscula <= 90)  {
        return true;
    }else{
        return false;
    }
}

esMayuscula3 = function(caracter){
    let mayuscula;
    mayuscula = caracter.charCodeAt(2);

    if (mayuscula >= 65 && mayuscula <= 90)  {
        return true;
    }else{
        return false;
    }
}

esGuion = function(caracter){
    let guionk;
    guionk = caracter.charCodeAt(3);
    if (guionk == 45){
        return  true;
    }else{
        return false;
    }
}

esDigito1 = function(caracter){ 
    let digito;
    digito = caracter.charCodeAt(4);
    if (digito >= 48 && digito <= 57){
       return true;
    }else{
        return false;
    }
}

esDigito2 = function(caracter){ 
    let digito;
    digito = caracter.charCodeAt(5);
    if (digito >= 48 && digito <= 57){
       return true;
    }else{
        return false;
    }
}

esDigito3 = function(caracter){ 
    let digito;
    digito = caracter.charCodeAt(6);
    if (digito >= 48 && digito <= 57){
       return true;
    }else{
        return false;
    }
}

esDigito4 = function(caracter){ 
    let digito;
    digito = caracter.charCodeAt(7);
    if (digito >= 48 && digito <= 57){
       return true;
    }else{
        return false;
    }
}




