/*
Dacal Federico

Debemos realizar la carga de 5(cinco) productos de prevención de contagio
de cada una debo obtener los siguientes datos: 
el tipo (validar "barbijo" , "jabón" o "alcohol") , 
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra 
c) Cuántas unidades de jabones hay en total 
*/
function uno()
{
	let contadorVueltas;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let alcoholMasBaratoPrecio;
	let alcoholMasBaratoUnidades;
	let alcoholMasBaratoMarca;
	let alcoholMasBaratoFabricante;
	let flagAlcohol;
	let contadorBarbijo;
	let contadorAlcohol;
	let contadorJabon;
	let acumuladorBarbijo;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let promedio;

	flagAlcohol=0;
	contadorVueltas=0;
	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;

	// for(contadorVueltas==0; contadorVueltas>5; contadorVueltas++)
	while(contadorVueltas < 5)
	{
		tipoIngresado=prompt("Ingrese el tipo del producto");
		while(isNaN(tipoIngresado)==false || tipoIngresado != "barbijo" && tipoIngresado != "alcohol" && tipoIngresado != "jabon")
		{
			tipoIngresado=prompt("Error, ingrese un tipo válido (barbijo, alcohol, jabon)");
		}

		precioIngresado=prompt("Ingrese precio");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado=prompt("Error, ingrese un precio válido (entre 100 y 300)");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese cantidad de productos");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)==true || cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada=prompt("Error, ingrese una cantidad válida (entre 1 y 1000)");
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		marcaIngresada=prompt("Ingrese la marca");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Error, ingrese una marca válida");
		}

		fabricanteIngresado=prompt("Ingrese fabricante");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Error, ingrese un fabricante válido");
		}
		/*
		a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		*/
	/*	if(tipoIngresado == "alcohol" && precioIngresado < alcoholMasBaratoPrecio || flagAlcohol==0)
		{
				alcoholMasBaratoPrecio=precioIngresado;
				alcoholMasBaratoFabricante=fabricanteIngresado;
				alcoholMasBaratoUnidades=cantidadIngresada;
				alcoholMasBaratoMarca=marcaIngresada;
				flagAlcohol=1;
		}
	*/
		/*
		b) Del tipo con mas unidades, el promedio por compra 
		*/
		switch (tipoIngresado) {
			case "barbijo":
				acumuladorBarbijo+=cantidadIngresada;
				contadorBarbijo++;
				break;
			case "jabon":
				contadorJabon++;
				acumuladorJabon+=cantidadIngresada;
				break;
			case "alcohol":
				if(contadorAlcohol==0 || precioIngresado < alcoholMasBaratoPrecio)
				{
						alcoholMasBaratoPrecio=precioIngresado;
						alcoholMasBaratoFabricante=fabricanteIngresado;
						alcoholMasBaratoUnidades=cantidadIngresada;
						alcoholMasBaratoMarca=marcaIngresada;
						//flagAlcohol=1;
				}
				acumuladorAlcohol+=cantidadIngresada;
				contadorAlcohol++;
				break;
		}
		contadorVueltas++;	
	}

	if (acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
		{
			promedio=acumuladorBarbijo/contadorBarbijo;
		} 
		else if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
		{
			promedio=acumuladorAlcohol/contadorAlcohol;
		} 
		else 
		{
			promedio=acumuladorJabon/contadorJabon;
		}
	
		/*
		c) Cuántas unidades de jabones hay en total 
		*/
	
	// c)
	alert(`La cantidad total de jabones es: ${acumuladorJabon}`);
	// b)
	alert(`El promedio del tipo con mas unidades por compra es ${promedio}`);
	// a)
	if(contadorAlcohol != 0)
	{
		alert(`El acohol más barato es ${alcoholMasBaratoMarca} de ${alcoholMasBaratoFabricante} el precio es $${alcoholMasBaratoPrecio} y la cantidad de unidades es ${alcoholMasBaratoUnidades}`);	
	}
}

