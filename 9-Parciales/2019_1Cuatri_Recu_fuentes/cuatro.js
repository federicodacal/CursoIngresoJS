function mostrar()
{
    let numeroUno;
    let numeroDos;
    let potencia;
    let resta;
    let resto;

    numeroUno=prompt("Ingrese el primer número");
    numeroUno=parseFloat(numeroUno);
    while(isNaN(numeroUno)==true){
        numeroUno=prompt("Error. Ingrese el primer número");
        numeroUno=parseFloat(numeroUno);
    }

    numeroDos=prompt("Ingrese el segundo número");
    numeroDos=parseFloat(numeroDos);
    while(isNaN(numeroDos)==true){
        numeroDos=prompt("Error. Ingrese el segundo número");
        numeroDos=parseFloat(numeroDos);
    }

    if(numeroUno==numeroDos){
        potencia=Math.pow(numeroUno,2);
        mensaje=potencia;
    }
    else if(numeroUno!=numeroDos && numeroUno%numeroDos==0){
        resta=numeroUno-numeroDos;
        mensaje=resta;
    }
    else{
        resto=numeroUno%numeroDos;
        mensaje=resto;
        if(resto>3){
            mensaje=`El resto es mayor a 3: ${resto}`;
        }
    }
    alert(mensaje);
}
