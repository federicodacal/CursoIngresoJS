/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    resultadoSuma=precioUno+precioDos+precioTres;
	respuesta="El resultado de la suma de precios es: " + resultadoSuma;
	alert(respuesta);
}

function Promedio () 
{   
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;
    let promedio;
    const CANTIDAD_PRECIOS = 3;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    resultadoSuma=precioUno+precioDos+precioTres;
    promedio = resultadoSuma/CANTIDAD_PRECIOS;
    respuesta="El promedio de precios es: " + promedio.toFixed(2);
	alert(respuesta);
}

function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;
    const IVA = 21/100;
    // const IVA = 0.21;
    let precioConIva;
    let costoIva;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    resultadoSuma=precioUno+precioDos+precioTres;
    costoIva=(resultadoSuma*IVA);
    precioConIva=resultadoSuma+costoIva;
    precioConIva=precioConIva.toFixed(2);
    respuesta=`El precio final con IVA incluido es: $${precioConIva} y  el costo del IVA es:  $${costoIva}.`;
	alert(respuesta);
}
/*
Nombre: Federico Dacal
TP: Ferrete Facturacion
*/