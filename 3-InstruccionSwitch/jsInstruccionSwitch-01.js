// CON SWITCH

function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;
	
	switch (mesDelAño) {
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
	alert(`El mes es ${mesDelAño}. ${mensaje}`);
}
