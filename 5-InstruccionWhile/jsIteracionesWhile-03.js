/*
Al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	let claveIngresada;
	claveIngresada=prompt("Ingrese la clave.");

	while(claveIngresada != "utn750"){
	alert("Clave es incorrecta.");
	claveIngresada=prompt("Por favor, ingrese la clave");
	}
	
}
