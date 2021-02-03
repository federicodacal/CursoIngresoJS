/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos
	var numeroUno; 
	var numeroDos;
	var resultado;
	var respuesta;

	/*
	numeroUno=parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos=parseInt(document.getElementById('txtIdNumeroDos').value);
	*/
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//alert(numeroUno+numeroDos);
	resultado=numeroUno+numeroDos;
	respuesta="El resultado es: " + resultado;
	alert(respuesta);
}

/*
Subconjuntos:
{1;2;3} 
{1;{5;7};3}
function sumar(){var nombre="Pedro"; alert("ok");}

NaN -> Not a Number
*/