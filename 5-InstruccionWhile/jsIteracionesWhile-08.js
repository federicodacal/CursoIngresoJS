/*
Al presionar el botón pedir números hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
    let numeroIngresado;
    let acumuladorPostivo;
    let acumuladorNegativo;
    let flag; 
    let seguir;

    acumuladorPostivo=0; // 0 es elemento neutro con respecto a la suma y resta
    acumuladorNegativo=1; // 1 es el elemento neutro con respecto a la multiplicacion y division
    flag = 0;

    do {
        numeroIngresado=prompt("Ingrese un número:")
        numeroIngresado=parseInt(numeroIngresado);
        // console.log(numeroIngresado);
        if (numeroIngresado >= 0) { // mayor o igual porque el número 0, en este caso, es considerado postivo
           // console.log("Positivo");
           acumuladorPostivo+=numeroIngresado;
        } else {
           // console.log("Negativo");
           flag = 1;
            // Se utiliza flag y no un contador porque sólo necesitamos saber si el user entró al menos 1 vez (sin la necesidad de seguir contando)   
           acumuladorNegativo*=numeroIngresado;
        }
        seguir=prompt("¿Quiere ingresar otro número? s/n");
		seguir=seguir.toLowerCase();
    } while (seguir == 's');

    // Si variable flag mantiene el valor 0 luego del ciclo Do While significa que no entró al else de "Negativo"
    if (flag == 0){
        acumuladorNegativo=0;
    }
    document.getElementById('txtIdSuma').value=`La suma de los positivos es ${acumuladorPostivo}`;
    document.getElementById('txtIdProducto').value=`El producto de los negativos es ${acumuladorNegativo}`;
}

/*
Pasos:
1) Declaracion de variables
2) Estructurar bucle del tipo "mientras el usuario quiera" (do while)
3) Pedir números (dentro del bucle)
4) Analizar el signo de cada número (dentro del bucle)
5) Acumular el número en el acumulador que corresponda (dentro del bucle)
6) Mostrar resultados (fuera del bucle)
+) Testear funcionalidades por etapas antes de finalizar el programa
*/