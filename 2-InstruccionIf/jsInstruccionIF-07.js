// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	let edad;
	let estadoCivil;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;

	console.log(estadoCivil);

	if(edad < 18 && estadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}
}