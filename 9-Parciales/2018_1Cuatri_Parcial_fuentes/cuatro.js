function mostrar()
{
    let numeroUno;
    let numeroDos;
    let resta;
    let suma;
    let mensaje;

    numeroUno=prompt("Ingrese el primer número: ");
    numeroUno=parseInt(numeroUno);
    numeroDos=prompt("Ingrese el segundo número: ");
    numeroDos=parseInt(numeroDos);

    if(numeroUno==numeroDos){
        mensaje=`${numeroUno}${numeroDos}`;
    }
    else{
        if(numeroUno > numeroDos){
            resta=numeroUno-numeroDos;
            mensaje=resta;
        }
        else{
            if(numeroDos > numeroUno){
                suma=numeroUno+numeroDos;
                mensaje=suma;
            }
        }
    }
    if(suma > 10){
        mensaje=`La suma es ${suma} y superó el 10`;
    }
    alert(mensaje);
}
