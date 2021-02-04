/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/* 
	let x = 30;
	let y = 20;
	let z;

	z = x + y;

	alert(z);

	Operador "+" puede concatenar o sumar:
	string + string -> string
	string + number -> string
	number + string -> string
	number + number -> number
	*/

	let numeroUno; 
	let numeroDos;
	let resultado;
	let respuesta;

	/*
	parseInt, parseFloat

	let x = "20";
	let y = "10";
	let z;

	x = parseInt(x);
	y = parseInt(y);

	z = x + y;
	alert(z);

	let pi = "3.14";
	pi = parseFloat(pi);
	alert(pi);

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