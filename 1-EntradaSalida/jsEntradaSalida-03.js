/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreNuevo;
	// nombreNuevo=txtIdNombre.value;
	// nombreNuevo=document.getElementById('txtIDnombr3').value; // Da Error -> 8 Uncaught TypeError: Cannot read property 'value' of null
	nombreNuevo=document.getElementById('txtIdNombre').value;
	alert(nombreNuevo);

	document.getElementById('txtIdNombre').value = ""; // Reemplaza valor en caja de texto (por la cadena de caracteres vacía)
}

/****************************** 
EJERCICIO 10bis (1)
******************************/

/*
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

    console.log(producto);
    console.log(precio);

    porcentajeAumento=30;
    aumento=precio*porcentajeAumento/100;
	resultado=precio+aumento;
    mensaje=`El producto es ${producto} y su precio final es: $${resultado}`;
    alert(mensaje);
}
*/