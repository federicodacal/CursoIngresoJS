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

    // txtIdPrecioUno  txtIdPrecioDos  txtIdPrecioTres
    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

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

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
	precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    resultadoSuma=precioUno+precioDos+precioTres;
    promedio = resultadoSuma/3;
    respuesta="El promedio de precios es: " + promedio;
	alert(respuesta);
}
function PrecioFinal () 
{
	
}
/*
Nombre: Federico Dacal
TP: Ferrete Facturacion
*/