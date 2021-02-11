function mostrar()
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