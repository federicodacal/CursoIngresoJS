/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseFloat(sueldo);

	aumento = sueldo * 0.10;
	resultado = sueldo + aumento;

	resultado=document.getElementById('txtIdResultado').value=resultado;
	alert(`El sueldo es ${resultado} y el aumento es de ${aumento}`);	
}
