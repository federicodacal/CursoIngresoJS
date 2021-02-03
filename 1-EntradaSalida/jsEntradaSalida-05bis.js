/*
5  bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"
*/

function mostrar()
{	
    var nombre;
    var apellido;
    var edad;

	nombre=prompt("Ingrese Nombre");
    document.getElementById('txtIdNombre').value= nombre;
    
	apellido=prompt("Ingrese Apellido");

	edad=prompt("Ingrese Edad");
    document.getElementById('txtIdEdad').value= edad;
    
    alert(apellido + ", Usted se llama " + nombre + " y tiene " + edad + " años.");
}

/*
Nombre: Federico Dacal
Ejercicio 5bis
*/