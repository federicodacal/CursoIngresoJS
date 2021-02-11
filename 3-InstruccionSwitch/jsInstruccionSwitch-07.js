function mostrar()
{
	let destino;
	let mensaje;

	destino=document.getElementById('txtIdDestino').value;

	switch (destino) {
		case "Bariloche":
			mensaje="se encuentra al Oeste.";
			break;
		case "Cataratas":
			mensaje="se encuentra al Norte.";
			break;
		case "Mar del plata":
			mensaje="se encuentra al Este.";
			break;
		case "Ushuaia":
			mensaje="se encuentra al Sur.";
			break;
	}
	alert(`${destino} ${mensaje}`);
}