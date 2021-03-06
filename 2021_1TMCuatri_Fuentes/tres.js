// DACAL FEDERICO
// DIVISION "A"

/*
Debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad (solo mayores de edad, mas de 17),
temperatura corporal (validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) El nombre y edad de la mujer soltera mas joven.
c) Cuanto sale el viaje total sin descuento.
d) Si hay mas del 50% de los pasajeros que tiene mas de 60 años, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let precioPasajero;
	let seguir;

	let contadorViudosMas60;

	let edadSolteraMasJoven;
	let nombreSolteraMasJoven;
	let flagPrimerSoltera;

	let precioBruto;
	let descuento;
	let porcentajeDescuento;
	let precioDescuento;

	let porcentajeMayores60;
	let contadorMayores60;
	let contadorPasajeros;

	contadorViudosMas60=0;
	contadorMayores60=0;
	contadorPasajeros=0;

	flagPrimerSoltera=0;

	precioPasajero=600;

	do{

		nombre=prompt("Ingrese el nombre");
		while(isNaN(nombre)==false){
			nombre=prompt("Error. Reingrese nombre");
		}

		estadoCivil=prompt("Ingrese el estado civil ('soltero', 'casado' o 'viudo')");
		estadoCivil=estadoCivil.toLowerCase();
		while(isNaN(estadoCivil)==false || estadoCivil!='soltero' && estadoCivil!='casado' && estadoCivil!='viudo'){
			estadoCivil=prompt("Error. Reingrese estado civil");
			estadoCivil=estadoCivil.toLowerCase();
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<18 || edad>105){
			edad=prompt("Error. Reingrese edad");
			edad=parseInt(edad);
		}

		temperaturaCorporal=prompt("Ingrese temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<25 || temperaturaCorporal>44){
			temperaturaCorporal=prompt("Error. Reingrese temperatura corporal");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		sexo=prompt("Ingrese el sexo ('f' o 'm')");
		sexo=sexo.toLowerCase();
		while(isNaN(sexo)==false || sexo!='f' && sexo!='m'){
			sexo=prompt("Error. Reingrese sexo");
			sexo=sexo.toLowerCase();
		}
		
		switch (estadoCivil) {
			case "viudo":
				if(edad>60){
					contadorViudosMas60++;
				}
				break;
			case "soltero":
				if(sexo=='f'){
					if(flagPrimerSoltera==0 || edad<edadSolteraMasJoven){
						edadSolteraMasJoven=edad;
						nombreSolteraMasJoven=nombre;
						flagPrimerSoltera=1;
						}
					}
				break;
			default: // soltero
				break;
		}

		if(edad>60){
			contadorMayores60++;
		}

		contadorPasajeros++;

		seguir=prompt("¿Desea continuar ingresando pasajeros? s/n");
		seguir=seguir.toLowerCase();
	}
	while(seguir=='s');

	// Comprobacion solteras
	if(flagPrimerSoltera==0){
		mensajeSolteraMasJoven="No ingresaron mujeres solteras";
	}
	else{
		mensajeSolteraMasJoven=`${nombreSolteraMasJoven}, ${edadSolteraMasJoven}`;
	}

	// Costo Viaje Bruto
	precioBruto=precioPasajero*contadorPasajeros;

	// Costo Viaje Descuento
	porcentajeMayores60=(100*contadorMayores60)/contadorPasajeros;
	if(porcentajeMayores60>50){
		porcentajeDescuento=-25;
		descuento=precioBruto*(porcentajeDescuento/100);
		precioDescuento=precioBruto+descuento;
	}
	else{
		precioDescuento="No se realizaron descuentos";
	}

	document.write(`a) La cantidad de personas con estado "viudo" de mas de 60 años: ${contadorViudosMas60}<br>
	b) El nombre y edad de la mujer soltera mas joven: ${mensajeSolteraMasJoven} <br>
	c) Cuanto sale el viaje total sin descuento: ${precioBruto}<br>
	d) Si hay mas del 50% de los pasajeros que tiene mas de 60 años, el precio final tiene un descuento del 25%, que solo mostramos si corresponde: ${precioDescuento}<br>`);
}
