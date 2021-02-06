/*1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 3 para resolverlo.
*/

function mostrar()
{
    let producto;
    let precio;
    let aumento;
	let porcentajeAumento;
    let resultado;
    let mensaje;

    producto=prompt("Ingrese Producto");
    precio=document.getElementById('txtIdNombre').value;
	precio=parseFloat(precio);

    // console.log(producto);
    // console.log(precio);

    porcentajeAumento=30;
    aumento=precio*porcentajeAumento/100;
	resultado=precio+aumento;
    mensaje=`El producto es ${producto} y su precio final es: $${resultado}`;
    alert(mensaje);
}

/*
2. En el ejercicio 10 de entrada y salida, se debe pedir el nombre del producto, tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
*/

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

/* 
3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)
UTILIZAR EL EJERCICIO 8 para resolverlo
*/

function SacarResto()
{
    let numeroUno;
	let numeroDos;
	let suma;
    let promedio;
    let modulo;
    let mensaje;

	numeroUno=document.getElementById('txtIdNumeroDividendo').value;
	numeroDos=document.getElementById('txtIdNumeroDivisor').value;
	numeroUno=parseInt(numeroUno);
    console.log(numeroUno);
	numeroDos=parseInt(numeroDos);
    console.log(numeroDos);

    suma=numeroUno+numeroDos;
    console.log(suma);
    promedio=suma/2;
    console.log(promedio);
    modulo=numeroUno%numeroDos;
    console.log(modulo);

    mensaje=`El resultado de la suma es ${suma}, el promedio es ${promedio} y el modulo es ${modulo}`;
    console.log(mensaje);
}

/* 
Nombre: Federico Dacal
Division: A
*/