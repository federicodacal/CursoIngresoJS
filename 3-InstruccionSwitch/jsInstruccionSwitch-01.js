// CON SWITCH

function mostrar()
{
	let mes;
	let mensaje;

	mes=document.getElementById('txtIdMes').value;
	
	switch (mes) {
		case "Enero": 
			mensaje="Que comiences bien el año!!!";
			break;
		case "Marzo":
			mensaje="Comienzan las clases!";
			break;
		case "Julio":
			mensaje="Llegan las vacaciones!";
			break;
		case "Diciembre":
			mensaje="Felices Fiestas!";
			break;
		default:
			mensaje="";
			break;
	}
	alert(`El mes es ${mes}. ${mensaje}`);
}
