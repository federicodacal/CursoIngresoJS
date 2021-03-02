/*
Debemos realizar la carga de 5 (cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo", "jabón" o "alcohol"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let tipo;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let repeticiones;

	let mensajeJabonMasCaro;
	let precioJabonMasCaro;
	let unidadesJabonMasCaro;
	let fabricanteJabonMasCaro;

	let mensajeTipoMasUnidades;
	let promedioBarbijo;
	let promedioJabon;
	let promedioAlcohol;

	// Contadores
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;

	// Acumuladores
	let acumuladorUnidadesBarbijo;
	let acumuladorUnidadesJabon;
	let acumuladorUnidadesAlcohol;

	contadorBarbijo=0;
	contadorJabon=0;
	contadorAlcohol=0;

	acumuladorUnidadesBarbijo=0;
	acumuladorUnidadesJabon=0;
	acumuladorUnidadesAlcohol=0;

	for(repeticiones=0;repeticiones<5;repeticiones++){
		
		tipo=prompt("Ingrese el tipo del producto (barbijo, jabon, alcohol):");
		tipo=tipo.toLowerCase();
		while(isNaN(tipo)==false || tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol"){
			tipo=prompt("Error. Reingrese el tipo del producto (barbijo, jabon, alcohol):");
			tipo=tipo.toLowerCase();
		}

		precio=prompt("Ingrese el precio del prodcuto (entre $100 y $300):");
		precio=parseFloat(precio);
		while(isNaN(precio)==true || precio<100 || precio>300){
			precio=prompt("Error. Reingrese el precio del prodcuto (entre $100 y $300):");
			precio=parseFloat(precio);
		}

		unidades=prompt("Ingrese la cantidades unidades del prodcuto (entre 1 y 1000):");
		unidades=parseInt(unidades);
		while(isNaN(unidades)==true || unidades<1 || unidades>1000){
			unidades=prompt("Error. Reingrese la cantidad de unidades del prodcuto:");
			unidades=parseInt(unidades);
		}

		marca=prompt("Ingrese la marca del producto:");
		while(isNaN(marca)==false){
			marca=prompt("Error. Reingrese la marca del producto:");

		}

		fabricante=prompt("Ingrese el fabricante del producto:");
		while(isNaN(fabricante)==false){
			fabricante=prompt("Error. Reingrese el fabricante del producto:");

		}

		switch (tipo) {
			case "barbijo":
				contadorBarbijo++;
				acumuladorUnidadesBarbijo+=unidades;
				break;
			case "jabon":
				contadorJabon++;
				acumuladorUnidadesJabon+=unidades;
				if(contadorJabon==1 || precio>precioJabonMasCaro){
					precioJabonMasCaro=precio;
					unidadesJabonMasCaro=unidades;
					fabricanteJabonMasCaro=fabricante;
				}
				break;
			default: // alcohol
				contadorAlcohol++;
				acumuladorUnidadesAlcohol+=unidades;
				break;
		}
		
	}

	if(acumuladorUnidadesBarbijo>acumuladorUnidadesJabon && acumuladorUnidadesBarbijo>acumuladorUnidadesAlcohol){
		promedioBarbijo=acumuladorUnidadesBarbijo/contadorBarbijo;
		mensajeTipoMasUnidades=`El producto con más unidades es Barbijo y el promedio es ${promedioBarbijo}`;
	}
	else if(acumuladorUnidadesJabon>acumuladorUnidadesAlcohol){
		promedioJabon=acumuladorUnidadesJabon/contadorJabon;
		mensajeTipoMasUnidades=`El producto con más unidades es Jabon y el promedio es ${promedioJabon}`;
	}
	else{ // alcohol
		promedioAlcohol=acumuladorUnidadesAlcohol/contadorAlcohol;
		mensajeTipoMasUnidades=`El producto con más unidades es Alcohol y el promedio es ${promedioAlcohol}`;
	}

	if(contadorJabon==0){
		mensajeJabonMasCaro="No se ingresaron unidades de tipo jabon";
	}
	else{
		mensajeJabonMasCaro=`${unidadesJabonMasCaro}, ${fabricanteJabonMasCaro}`;
	}

	if(contadorBarbijo==0){
		acumuladorUnidadesBarbijo="No se ingresaron unidades de tipo barbijo";
	}

	document.write(`a) Del más caro de los jabones, la cantidad de unidades y el fabricante: ${mensajeJabonMasCaro}<br>
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra: ${mensajeTipoMasUnidades} <br>
	c) Cuántas unidades de Barbijos se compraron en total: ${acumuladorUnidadesBarbijo}<br>`);

}