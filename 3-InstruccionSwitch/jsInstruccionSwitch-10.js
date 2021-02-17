function mostrarIfSwitch()
{
	let destino;
	let estacion;
	let mensaje;
	let respuesta;

	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch (estacion) {
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas")
				{
					mensaje="es disponible";
				}
				else {
					mensaje="no es disponible";
				}
			break;
		case "Invierno":
			if(destino == "Bariloche")
				{
					mensaje="es disponible";
				}
				else {
					mensaje="no es disponible";
					}
		case "Primavera":
			if (destino == "Bariloche") 
				{
					mensaje="no es disponible";
				} 
				else {
					mensaje="es disponible";
				}
			break;		
		default:
				mensaje="es disponible";
			break;
	}

	respuesta=`En ${estacion} ${mensaje} viajar a ${destino}`;
	alert(respuesta);
}

function mostrar()
{
	let destino;
	let estacion;
	let mensaje;
	let respuesta;

	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					mensaje="se viaja";
					break;
				default:
					mensaje="no se viaja";
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					mensaje="se viaja";
					break;
				default:
					mensaje="no se viaja";
					break;
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					mensaje="no se viaja";
					break;
				default:
					mensaje="se viaja";
					break;
			}
			break;
		default:
			mensaje="se viaja";
			break;
	}

	respuesta=`En ${estacion} ${mensaje} a ${destino}`;
	alert(respuesta);
}

// Federico Dacal
// Division "A"
// Switch 10