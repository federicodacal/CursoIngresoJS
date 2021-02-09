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
	alert("Despues del bloque If");
}

/* Intervalos

>= 18 (mayor o igual a 18)
[18, +∞)

>17 (mayor a 17)
(17, +∞)

*/