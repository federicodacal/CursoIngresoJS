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
	let mensaje;

	importe=document.getElementById('txtIdImporte').value;
	//parseFloat -> el dinero puede tener decimales
	importe=parseFloat(importe);	

	/* 
	descuento=promt("Ingrese descuento");
	descuento=parseInt(descuento); */

	// descuento=importe*(25/100);
	descuento=importe*0.25;
	resultado=importe-descuento;

	resultado=document.getElementById('txtIdResultado').value=resultado;
	mensaje=`El precio con descuento es $${resultado} y el descuento es de $${descuento}`;
	alert(mensaje);
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

/****************************** 
EJERCICIO 10bis (2)
******************************/

/*
function mostrarAumento()
{
    let producto;
    let precio;
    let descuento;
    let porcentajeDescuento;
    let resultado;
    let mensaje;

    producto=prompt("Ingrese Producto");
    porcentajeDescuento=prompt("Ingrese Descuento %");
    porcentajeDescuento=parseFloat(porcentajeDescuento);
    precio=document.getElementById('txtIdImporte').value;
	precio=parseFloat(precio);

    descuento=precio*porcentajeDescuento/100;
    resultado=precio-descuento;
    mensaje=`Ud. compro ${producto} con un %${porcentajeDescuento} de descuento. El precio final es ${resultado}`;
    alert(mensaje);

    document.getElementById('txtIdResultado').value=mensaje;
}
*/