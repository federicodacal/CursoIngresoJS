/*
Al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado=prompt("Ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9){
		alert("El numero no se encuentra entre 0 y 9.");
		numeroIngresado=prompt("Ingrese un número entre 0 y 9.");
		numeroIngresado=parseInt(numeroIngresado);
	}
	document.getElementById('txtIdNumero').value=`El numero ingresado es ${numeroIngresado}.`;
}