/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let seguir;

	// Inicializar contador y acumulador
	contador=0;
	acumulador=0;
	seguir = 's';
	
	while(seguir == 's'){
		numeroIngresado=parseInt(prompt("Ingrese un número: "));
		acumulador+=numeroIngresado;
		contador++;
		seguir=prompt("¿Quiere ingresar otro número? s/n");
		seguir=seguir.toLocaleLowerCase();
	}
	promedio=acumulador/contador;
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}

/*
Estructura iterativa Do While

while(condicion)
{
	sentencias
}

do 
{
	sentencias
}
while(condicion);
*/

function mostrarDoWhile()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let seguir;

	// Inicializar contador y acumulador
	contador=0;
	acumulador=0;
	
	do
	{
	numeroIngresado=parseInt(prompt("Ingrese un número: "));
	acumulador+=numeroIngresado;
	contador++;
	seguir=prompt("¿Quiere ingresar otro número? s/n");
	seguir=seguir.toLocaleLowerCase();
	}
	while(seguir == 's');

	promedio=acumulador/contador;
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}