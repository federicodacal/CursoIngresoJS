/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Reservo espacio en Memoria para guardar el nombre
	var nombreNuevo;
	// Tomar dato -> nombreNuevo=document.getElementById('txtIdNombre').value;
	// Guardo en la variable nombre el valor que escribió el usuario en la ventana 'prompt'
	nombreNuevo=prompt("Ingrese Nombre");
	// Copio el nombre guardado en la variable nombreNuevo dentro de la caja de texto
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
