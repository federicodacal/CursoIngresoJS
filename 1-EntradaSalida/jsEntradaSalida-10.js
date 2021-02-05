/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let descuento;

	importe=document.getElementById('txtIdImporte').value;
	//parseFloat -> el dinero puede tener decimales
	importe=parseFloat(importe);	

	// descuento=importe*(25/100);
	descuento=importe*0.25;
	resultado=importe-descuento;

	resultado=document.getElementById('txtIdResultado').value=resultado;
	alert(`El precio con descuento es $${resultado} y el descuento es de $${descuento}`);
}

// not defined -> variable no fue creada o no existe
// undefined -> variable creada pero no tuvo asignada valor
/*
Testing parseInt:

testeo=parseInt(4);				// 4
testeo=parseInt("5");			// 5
testeo=parseInt("Juan");		// NaN
testeo=parseInt("6Juan");		// 6 	(toma los numeros hasta que se encuentra con un caracter no numerico)
testeo=parseInt("Juan6");		// NaN 	(no puede tomar el número)
testeo=parseInt("");			// NaN
testeo=parseInt(" ");			// NaN
testeo=parseInt(variableNoExiste);	// Error variableNoExiste is not defined
*/