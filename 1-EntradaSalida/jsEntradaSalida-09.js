/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;
	// El calculo de porcentaje de un valor se obtiene multiplicando el valor por el porcentaje y dividirlo por 100

	sueldo=document.getElementById('txtIdSueldo').value;
	//parseFloat -> el dinero puede tener decimales
	sueldo=parseFloat(sueldo);

	//aumento = sueldo*10/100;
	aumento = sueldo*0.1;
	resultado = sueldo+aumento;

	resultado=document.getElementById('txtIdResultado').value=resultado;
	alert(`El sueldo es ${resultado} y el aumento es de ${aumento}`);	
}
