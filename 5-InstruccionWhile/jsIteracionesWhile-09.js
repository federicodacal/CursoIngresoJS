/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let seguir;
	let flag;

	flag=0;

	do {
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		if(flag == 0){	
		// flag se utiliza para guardar el primer número en caso que el user decida ingresar sólo uno
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flag=1;
		}
		if(numeroIngresado > numeroMaximo){
			numeroMaximo=numeroIngresado;
		}
		else if (numeroIngresado < numeroMinimo){
			numeroMinimo=numeroIngresado;
		}
		seguir=prompt("¿Quiere ingresar otro número? s/n");
		seguir=seguir.toLowerCase();
	} while (seguir == 's');

	document.getElementById('txtIdMaximo').value=`El máximo es ${numeroMaximo}`;
	document.getElementById('txtIdMinimo').value=`El mínimo es ${numeroMinimo}`;
}

/*
Pasos:
1) Declaramos variables
2) Estructurar bucle del tipo "mientras el usuario quiera" (do while)
3) Pedir números (dentro del bucle)
4) Debo reconocer si estoy pidiendo por primera vez (dentro del bucle)
	de ser así inicializo max y min
	de lo contrario me fijo si tengo un nuevo maximo o nuevo minimo
	y actualizo de ser necesario.
5) Muestro información (fuera del bucle)
+) Testear funcionalidades por etapas antes de finalizar el programa
*/

function repaso()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let seguir;
	let flag;

	flag=0;

	do {
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		if(flag == 0 || numeroIngresado > numeroMaximo){
			numeroMaximo=numeroIngresado;
		}
		if (flag == 0 || numeroIngresado < numeroMinimo){
			numeroMinimo=numeroIngresado;
			flag=1;
			// flag se guarda en la última condición
		}
		seguir=prompt("¿Quiere ingresar otro número? s/n");
		seguir=seguir.toLowerCase();
	} while (seguir == 's');

	document.getElementById('txtIdMaximo').value=`El máximo es ${numeroMaximo}`;
	document.getElementById('txtIdMinimo').value=`El mínimo es ${numeroMinimo}`;
}