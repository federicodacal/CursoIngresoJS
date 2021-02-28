function mostrar()
{   
    let numeroUno;
    let numeroDos;
    let division;
    let suma;
    let mensaje;

    numeroUno=prompt("Ingrese el primer número: ");
    numeroUno=parseFloat(numeroUno);
    while(isNaN(numeroUno)==true){
        numeroUno=prompt("Error. Reingrese el primer número");
        numeroUno=parseFloat(numeroUno);
    }

    numeroDos=prompt("Ingrese el segundo número: ");
    numeroDos=parseFloat(numeroDos);
    while(isNaN(numeroDos)==true){
        numeroDos=prompt("Error. Reingrese el segundo número");
        numeroDos=parseFloat(numeroDos);
    }

    if(numeroUno==numeroDos){
        mensaje=`${numeroUno}${numeroDos}`;
    }
    else if(numeroUno>numeroDos){
        division=numeroUno/numeroDos;
        mensaje=`Division: ${division}`;
    }
    else{
        suma=numeroUno+numeroDos;
        if(suma<50){   
        mensaje=`Suma: ${suma}. Es menor a 50.`;
        }
        else{
            mensaje=`Suma: ${suma}`
        }
    }
    alert(mensaje);
}