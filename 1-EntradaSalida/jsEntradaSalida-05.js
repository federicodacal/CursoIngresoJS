/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	nombre=prompt("Ingrese Nombre");
	document.getElementById('txtIdNombre').value="Su nombre es " + nombre;

	var edad;
	edad=prompt("Ingrese Edad");
	document.getElementById('txtIdEdad').value="Su edad es " + edad;
}

/*
Nombre: Federico Dacal
Consigna: Debemos lograr tomar nombre y edad por ID.value
mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años"
*/