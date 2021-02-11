function mostrar()
{
	let destino;
	let mensaje;

	destino=document.getElementById('txtIdDestino').value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			mensaje="Frío";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje="Calor";
			break;	
	}
	alert(`Destino: ${destino}, Clima: ${mensaje}`);
}	