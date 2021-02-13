// Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar2()
{
	let edad;
	let mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad < 13){
		mensaje="niño";
	}
	else if (edad < 18){
		mensaje="adolescente";
	}
	else if (edad < 65){
		mensaje="mayor de edad";
	}
	else{
		mensaje="adulto mayor";
	}
	alert(`Ud. es ${mensaje}.`);
}

function mostrar()
{

	let edad;
	let mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad < 13)
	{
		mensaje="niño";
	} else {
		if(edad < 18){
			mensaje="adolescente";
		}else {
			if(edad < 65){
				mensaje="mayor de edad";
			}
			else {
				mensaje="adulto mayor";
			}
		}
	}
	alert(`Ud. es ${mensaje}.`);
}