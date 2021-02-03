/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno
	var numeroDos
	var resultado

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	respuesta="El resultado de la suma es: " + resultado;
	alert(respuesta);
}

function restar()
{
	var numeroUno
	var numeroDos
	var resultado

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno-numeroDos;
	respuesta="El resultado de la resta es: " + resultado;
	alert(respuesta);
}

function multiplicar()
{ 
	var numeroUno
	var numeroDos
	var resultado

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;
	respuesta="El resultado de la multiplicacion es: " + resultado;
	alert(respuesta);
}

function dividir()
{
	var numeroUno
	var numeroDos
	var resultado

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno/numeroDos;
	respuesta="El resultado de la division es: " + resultado;
	alert(respuesta);
}

/*
Nombre: Federico Dacal
Ejercicio 7 
*/