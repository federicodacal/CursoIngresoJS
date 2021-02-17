// CON IF ELSE

function mostrar()
{
	let mes;
	let mensaje;

	mes=document.getElementById('txtIdMes').value;

	/*
	if (mes == "Enero"){
		mensaje="Que comiences bien el año!!!";
		}
		else if (mes == "Marzo"){
			mensaje="Comienzan las clases!";	
		}
		else if (mes == "Julio"){
			mensaje="Llegan las vacaciones!";
		}
		else if (mes == "Diciembre"){
			mensaje="Felices Fiestas!";
		}
		else{
			mensaje="";
		}
	*/

	if (mes == "Enero") {
		mensaje="Que comiences bien el año!!!";
	} 
	else {
		if (mes == "Marzo") {
			mensaje="Comienzan las clases!";
		} 
		else {
			if (mes == "Julio") {
				mensaje="Llegan las vacaciones!";
			}
			else{
				if (mes == "Diciembre") {
					mensaje="Felices Fiestas!";
				}
				else{
					mensaje="";
				}
			}
		}
	}
	alert(`El mes es ${mes}. ${mensaje}`);

}