/*
Al presionar el botón pedir números hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
    let numeroIngresado;
    let acumulador;
    let seguir;

    numeroIngresado=prompt("Ingrese un número.");
    numeroIngresado=parseInt(numeroIngresado);

    do{
        seguir=prompt("¿Ingresar otro número? s/n."); 
        numeroIngresado=prompt("Ingrese un número."); 
        if(numeroIngresado < 0){
            acumulador+=acumulador;
            numeroIngresado*acumulador;
        }
        else{
            acumulador+=acumulador;
            numeroIngresado+acumulador;
        }   
    }
    while(seguir == 's');

    document.getElementById('txtIdSuma').value=`La suma de los positivos es ${hola}`;
    document.getElementById('txtIdProducto').value=`El producto de los negativos es ${chau}`;
}
