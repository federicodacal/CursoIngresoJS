/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreNuevo;
	// nombreNuevo=txtIdNombre.value;
	// nombreNuevo=document.getElementById('txtIDnombr3').value; // Da Error -> 8 Uncaught TypeError: Cannot read property 'value' of null
	nombreNuevo=document.getElementById('txtIdNombre').value;
	alert(nombreNuevo);

	document.getElementById('txtIdNombre').value = ""; // Reemplaza valor en caja de texto (por la cadena de caracteres vacía)
}


