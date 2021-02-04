/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre=prompt("Ingrese Nombre");
	document.getElementById('txtIdNombre').value="Su nombre es " + nombre;

	edad=prompt("Ingrese Edad");
	document.getElementById('txtIdEdad').value="Su edad es " + edad + " años.";

	// Concatenacion
	alert("Ud. se llama " + nombre + " y tiene " + edad + " años.");

	//Concatenacion con 'Back Tick' (Ctrl + Alt + } o Alt Gr + })
	alert(`Ud. se llama ${nombre} y tiene ${edad} años (usando Back Tick).`);
}

/*
Nombre: Federico Dacal
Consigna: Debemos lograr tomar nombre y edad por ID.value
mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años"
*/