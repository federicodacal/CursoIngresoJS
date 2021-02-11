/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.". 
*/
function mostrar()
{
	let horaDelDia;
	let mensaje;
	horaDelDia=document.getElementById('txtIdHora').value;
	horaDelDia=parseInt(horaDelDia);

	if (horaDelDia >= 1 && horaDelDia < 25) {
		switch (horaDelDia) {
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				mensaje="Es de mañana.";
				break;
			default:
				mensaje="No es de mañana.";
				break;
		}
	} 
	else {
		mensaje="Dato no válido";
	}
	
	alert(mensaje);
}

// Federico Dacal
// Division "A"