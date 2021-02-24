/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos (positvos-negativos). 
*/
function mostrar()
{
    let seguir;
    let contadorNegativos;
    let contadorPositivos;
    let contadorCero;
    let contadorPares;
    let acumuladorNegativos;
    let acumuladorPositivos;
    let promedioPositivos;
    let promedioNegativos;
    let numeroIngresado;
    let resta;

    contadorNegativos=0;
    contadorPositivos=0;
    contadorCero=0;
    contadorPares=0;
    acumuladorNegativos=0;
    acumuladorPositivos=0;
    promedioNegativos=0;
    promedioPositivos=0;

    do {
        numeroIngresado=prompt("Ingrese un número:")
        numeroIngresado=parseInt(numeroIngresado);
        if (numeroIngresado % 2 == 0){
            contadorPares++;
        }
        if (numeroIngresado > 0) {  
           acumuladorPositivos+=numeroIngresado;
           contadorPositivos++;
        } 
        else if(numeroIngresado == 0)
        {
            contadorCero++;
        }
        else {
           acumuladorNegativos+=numeroIngresado;
           contadorNegativos++;
        }
        seguir=prompt("¿Quiere ingresar otro número? s/n");
        seguir=seguir.toLowerCase();
    } while (seguir == 's');

    if(contadorNegativos>0){
        promedioNegativos=acumuladorNegativos/contadorNegativos;
    }
    if(contadorPositivos>0){
        promedioPositivos=acumuladorPositivos/contadorPositivos;
    }

    resta=contadorPositivos-contadorPositivos;

    document.write(`1-Suma de los negativos: ${acumuladorNegativos} <br>
    2-Suma de los positivos: ${acumuladorPositivos} <br>
    3-Cantidad de positivos: ${contadorPositivos}   <br>
    4-Cantidad de negativos: ${contadorNegativos}   <br>
    5-Cantidad de ceros: ${contadorCero}    <br>
    6-Cantidad de números pares: ${contadorPares}    <br>
    7-Promedio de positivos: ${promedioPositivos.toFixed(2)}   <br>
    8-Promedios de negativos: ${promedioNegativos.toFixed(2)} <br>
    9-Diferencia entre positivos y negativos: ${resta} <br>`);
}

// Federico Dacal
// Division "A"