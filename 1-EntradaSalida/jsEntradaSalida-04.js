/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreNuevo;
	// Tomar dato -> nombreNuevo=document.getElementById('txtIdNombre').value;
	nombreNuevo=prompt("Ingrese Nombre");
	document.getElementById('txtIdNombre').value="Su nombre es " + nombreNuevo; //Muestra Datos
}

/*
Entrada de Datos:
	nombreNuevo=prompt("Ingrese Nombre");
	nombreNuevo=document.getElementById('txtIdNombre').value;

Mostrar Datos:
	alert(nombre);
	document.getElementById('txtIdNombre').value=nombreNuevo;
*/
