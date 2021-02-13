/*Al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	let mes;
	let mensaje;

	mes=document.getElementById('txtIdMes').value;

	switch (mes) {
		case "Febrero":
			mensaje="Tiene 28 días.";		
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 días.";
		break;
		default:
			mensaje="Tiene 31 días.";
			break;
	}
	alert(`El mes es ${mes}. ${mensaje}`);
}

// Federico Dacal
// Division "A"