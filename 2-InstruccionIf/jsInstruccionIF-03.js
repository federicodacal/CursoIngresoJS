// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar()
{
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	if (edadIngresada >= 18){
		alert("Es mayor de edad.");
	}
	else {
		alert("No es mayor de edad.");
	}
	alert("Termina la funcion");
}