function mostrar()
{
	let edad;
	//Tomar edad
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad==15){
		alert("La edad es 15.");
	}
	else {
		alert("La edad no es 15.");
	}
	alert("Fin de la función.");
}

/*
15 == 15 -> True
"15" == "15" -> True
"15" == 15 -> True
15 == "15" -> True
15 === 15 -> True
"15" === "15" -> True
"15" === 15 -> False
15 === "15" -> False
*/