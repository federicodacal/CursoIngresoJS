function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	switch (mesDelAño) {
		case "Febrero":
			mensaje="Este mes no tiene mas de 29 dias.";
			break;
		default:
			mensaje="Este mes tiene 30 días o más.";
			break;
	}
	alert(`El mes es ${mesDelAño}. ${mensaje}`);
}
