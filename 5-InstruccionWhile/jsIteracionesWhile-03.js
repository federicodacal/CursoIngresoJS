/*
Al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	let claveIngresada;
	claveIngresada=prompt("Ingrese la clave.");

	while(claveIngresada != "utn750"){
	alert("Clave incorrecta.");
	claveIngresada=prompt("Por favor, ingrese la clave.");
	}
	alert("Ingresaste!");
}

// Federico Dacal
// Division "A"

function mostrarDoWhile()
{
	let claveIngresada;

	do{
		claveIngresada=prompt("Por favor, ingrese la clave.");
	}
	while(claveIngresada != "utn750");
	alert("Ingresaste!");
}