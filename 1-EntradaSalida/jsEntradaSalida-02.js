/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado; 
	alert(nombreIngresado); // undefined, null, vacio -> Importante saber cuando ocurren
	// alert(noExiste); -> Da Error: "8 Uncaught ReferenceError: noExiste is not defined"
	nombreIngresado = prompt("Please enter your name", "Usuario");
	/*
	alert("nombreIngresado");
	alert(nombreIngresado);
	*/
	alert("Hola, " + nombreIngresado);
}

/*
Reglas de Entrega:
Nombre y Apellido: Federico Dacal
Consigna:
Al presionar el botón 'Mostrar'
debemos lograr tomar un dato por '=prompt()'
y luego mostrarlo por 'alert()'.
*/

/*
GDB Online compiler and debugger 
*/