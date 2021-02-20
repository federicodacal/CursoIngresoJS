/* 1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos).
*/

function repaso()
{
    let numeroIngresado;
    let contadorIntervalo;
    let contador;
    let mensaje;

    contador=0;
    contadorIntervalo=0;
    while(contador<5){
        numeroIngresado=prompt(`Ingrese el numero:`);
        numeroIngresado=parseInt(numeroIngresado);
        if(numeroIngresado>=10 && numeroIngresado<=20){
            contadorIntervalo++;
        }
        contador++;
    }
    mensaje=`Ud. ingresó ${contadorIntervalo} números mayores que 10 y menores que 20`;
    alert(mensaje);
}

// Federico Dacal
// Division "A"

/*
2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.
*/

function mostrar()
{
    let numeroIngresado;
    let contadorIntervalo;
    let acumuladorIntervalo;
    let respuesta;
    let promedio;
    let mensaje;

    contadorIntervalo=0;
    acumuladorIntervalo=0;
    respuesta='s';
    while(respuesta=='s'){
        numeroIngresado=prompt(`Ingrese el numero:`);
        numeroIngresado=parseInt(numeroIngresado);
        if(numeroIngresado>=10 && numeroIngresado<=20){
            contadorIntervalo++;
            acumuladorIntervalo+=numeroIngresado;
        }
        respuesta=prompt("¿Desea continuar ingresando números? s/n");
    }  
    // console.log(contadorIntervalo);
    // console.log(acumuladorIntervalo);
    promedio=acumuladorIntervalo/contadorIntervalo;
    mensaje=`Ud. ingresó ${contadorIntervalo} números mayores que 10 y menores que 20 y el promedio es ${promedio}`;
    alert(mensaje);
}