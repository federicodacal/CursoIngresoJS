// Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).

function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	/* If anidados:

	if (edad >=13){
		if(edad <=17){
			alert("Es adolescente.");
		}
	}
	*/

	// Condicional Compuesto
	if(edad >= 13 && edad <= 17){
		alert("Es adolescente.");
	}

	else if (edad >= 18){
		alert("Es mayor de edad.");
	}
}