// CON IF ELSE

function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño=document.getElementById('txtIdMes').value;

	if (mesDelAño == "Enero") {
		mensaje="Que comiences bien el año!!!";
	} 
	else {
		if (mesDelAño == "Marzo") {
			mensaje="Comienzan las clases!";
		} 
		else {
			if (mesDelAño == "Julio") {
				mensaje="Llegan las vacaciones!";
			}
			else{
				if (mesDelAño == "Diciembre") {
					mensaje="Felices Fiestas!";
				}
				else{
					mensaje="";
				}
			}
		}
	}
	alert(`El mes es ${mesDelAño}. ${mensaje}`);

}