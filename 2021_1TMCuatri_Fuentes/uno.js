// DACAL FEDERICO
// DIVISION "A"

/*
Debemos realizar la carga de una compra de 5 (cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{	
	let nombre;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let tipoInflamable;
	let marca;
	let repeticiones;

	let contadorAlcohol;
	let contadorIac;
	let contadorQuat;
	let acumuladorUnidadesAlcohol;
	let acumuladorUnidadIac;
	let acumuladorUnidadesQuat;

	let acumuladorUnidadesIgnifugo;
	let acumuladorUnidadesCombustible;
	let acumuladorUnidadesExplosivo;
	let mensajeMayorInflamable;

	let promedioUndiadesAlcohol;
	let promedioUnidadesIac;
	let promedioUnidadesQuat;

	let contadorIacPrecio200oMenos;

	let flagPrimerProducto;
	let precioMasCaro;
	let marcaMasCara;
	let tipoMasCaro;

	contadorAlcohol=0;
	contadorIac=0;
	contadorQuat=0;
	acumuladorUnidadesAlcohol=0;
	acumuladorUnidadIac=0;
	acumuladorUnidadesQuat=0;
	contadorIacPrecio200oMenos=0;
	flagPrimerProducto=0;

	acumuladorUnidadesIgnifugo=0;
	acumuladorUnidadesCombustible=0;
	acumuladorUnidadesExplosivo=0;

	for(repeticiones=0;repeticiones<1;repeticiones++){

		nombre=prompt("Ingrese nombre del producto");
		while(isNaN(nombre)==false){
			nombre=prompt("Error. Reingrese el nombre del producto");
		}

		tipoProducto=prompt("Ingrese el tipo del producto (alcohol, iac o quat)");
		tipoProducto=tipoProducto.toLowerCase();
		while(isNaN(tipoProducto)==false || tipoProducto!="alcohol" && tipoProducto!="iac" && tipoProducto!="quat"){
			tipoProducto=prompt("Error. Reingrese el tipo del producto");
			tipoProducto=tipoProducto.toLowerCase();
		}

		precio=prompt("Ingrese el precio del prodcuto (entre $100 y $300):");
		precio=parseFloat(precio);
		while(isNaN(precio)==true || precio<100 || precio>300){
			precio=prompt("Error. Reingrese el precio del prodcuto (entre $100 y $300):");
			precio=parseFloat(precio);
		}

		cantidadUnidades=prompt("Ingrese el cantidad unidades del prodcuto (entre 1 y 1000):");
		cantidadUnidades=parseFloat(cantidadUnidades);
		while(isNaN(cantidadUnidades)==true || cantidadUnidades<1 || cantidadUnidades>1000){
			cantidadUnidades=prompt("Error. Reingrese el cantidad unidades del prodcuto (entre 1 y 1000):");
			cantidadUnidades=parseFloat(cantidadUnidades);
		}

		tipoInflamable=prompt("Ingrese el tipo de inflamable (ignifugo, combustible, explosivo)");
		tipoInflamable=tipoInflamable.toLowerCase();
		while(isNaN(tipoInflamable)==false || tipoInflamable!="ignifugo" && tipoInflamable!="combustible" && tipoInflamable!="explosivo"){
			tipoInflamable=prompt("Error. Reingrese el tipo de inflamable");
			tipoInflamable=tipoInflamable.toLowerCase();
		}

		marca=prompt("Ingrese marca del producto");
		while(isNaN(marca)==false){
			marca=prompt("Error. Reingrese el marca del producto");
		}

		switch (tipoProducto) {
			case "alcohol":
				contadorAlcohol++;
				acumuladorUnidadesAlcohol+=cantidadUnidades;
				break;
			case "iac":
				contadorIac++;
				acumuladorUnidadIac+=cantidadUnidades;
				if(precio<201){
					contadorIacPrecio200oMenos++;
				}
				break;
			default: // quat
				contadorQuat++;
				acumuladorUnidadesQuat+=cantidadUnidades;
				break;

		}

		if(tipoInflamable=="ignifugo"){
			acumuladorUnidadesIgnifugo+=cantidadUnidades;
		}
		else if(tipoInflamable=="combustible"){
			acumuladorUnidadesCombustible+=cantidadUnidades;
		}
		else{ // explosivo
			acumuladorUnidadesExplosivo+=cantidadUnidades;
		}

		// Producto mas caro
		if(flagPrimerProducto==0 || precio>precioMasCaro){
			precioMasCaro=precio;
			marcaMasCara=marca;
			tipoMasCaro=tipoProducto;
		}
	}

	// Confirmacion por tipo producto
	if(contadorAlcohol!=0){
		promedioUndiadesAlcohol=acumuladorUnidadesAlcohol/contadorAlcohol;
	}
	else{
		promedioUndiadesAlcohol="No se ingresaron unidades de alcohol";
	}

	if(contadorIac!=0){
		promedioUnidadesIac=acumuladorUnidadIac/contadorIac;
	}
	else{
		promedioUnidadesIac="No se ingresaron unidades de IAC";
	}

	if(contadorQuat!=0){
		promedioUnidadesQuat=acumuladorUnidadesQuat/contadorQuat;
	}
	else{
		promedioUnidadesQuat="No se ingresaron unidades de QUAT";
	}

	// Inflamable con mas unidades
	if(acumuladorUnidadesIgnifugo>acumuladorUnidadesCombustible && acumuladorUnidadesIgnifugo>acumuladorUnidadesExplosivo){
		mensajeMayorInflamable="El tipo inflamable con más unidades es Ignifugo";
	}
	else if(acumuladorUnidadesCombustible>acumuladorUnidadesExplosivo){
		mensajeMayorInflamable="El tipo inflamable con más unidades es Combustible";
	}
	else{ // explosivo
		mensajeMayorInflamable="El tipo inflamable con más unidades es Explosivo";
	}

	document.write(`a) El promedio de cantidad por tipo de producto 
	Alcohol: ${promedioUndiadesAlcohol}<br>
	IAC: ${promedioUnidadesIac}<br>
	QUAT: ${promedioUnidadesQuat}<br>
	b) El tipo de inflamable con más cantidad de unidades en total de la compra: ${mensajeMayorInflamable}<br>
	c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total: ${contadorIacPrecio200oMenos}<br>
	d) La marca y tipo del más caro de los productos: ${marcaMasCara}, ${tipoMasCaro}<br>`);
}
