/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	let sexoIngresado;
	let sexoUsuario;

	sexoIngresado=prompt("Ingrese f ó m.");
	sexoUsuario=sexoIngresado.toLowerCase();
	console.log(sexoUsuario);

	while(!(sexoUsuario == "f" || sexoUsuario == "m")){
		alert("Dato inválido.");
		sexoIngresado=prompt("Ingrese f ó m.");
		sexoUsuario=sexoIngresado.toLowerCase();
		console.log(sexoUsuario);
	}

	document.getElementById('txtIdSexo').value=`Seleccionó "${sexoUsuario}".`;
}