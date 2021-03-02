/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad, edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo") y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let seguir;

	let contadorMayoresEdadSolteros;
	let contadorMujeresSolteras;
	let contadorMujeresViudas;
	let mujeresSolterasViudas;
	let contadorMujeresCasadas;
	let acumuladorEdadCasadas;
	let promedioEdadCasadas;
	let contadorTerceraEdadTemperaturaMayor38;
	let nacionalidadMayorTemperaturaCorporal;
	let mayorTemperaturaCorporal;
	let flagPrimerIngreso;

	flagPrimerIngreso=0;
	contadorMujeresViudas=0;
	contadorMujeresSolteras=0;
	contadorMayoresEdadSolteros=0;
	contadorMujeresCasadas=0;
	contadorTerceraEdadTemperaturaMayor38=0;
	acumuladorEdadCasadas=0;

	do{

		nombre=prompt("Ingrese el nombre");
		while(isNaN(nombre)==false){
			nombre=prompt("Error. Reingrese nombre");
		}

		nacionalidad=prompt("Ingrese el nacionalidad");
		while(isNaN(nacionalidad)==false){
			nacionalidad=prompt("Error. Reingrese nacionalidad");
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<1 || edad>105){
			edad=prompt("Error. Reingrese edad");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese el sexo ('f' o 'm')");
		sexo=sexo.toLowerCase();
		while(isNaN(sexo)==false || sexo!='f' && sexo!='m'){
			sexo=prompt("Error. Reingrese sexo");
			sexo=sexo.toLowerCase();
		}

		estadoCivil=prompt("Ingrese el estado civil ('soltero', 'casado' o 'viudo')");
		estadoCivil=estadoCivil.toLowerCase();
		while(isNaN(estadoCivil)==false || estadoCivil!='soltero' && estadoCivil!='casado' && estadoCivil!='viudo'){
			estadoCivil=prompt("Error. Reingrese estado civil");
			estadoCivil=estadoCivil.toLowerCase();
		}
		
		temperaturaCorporal=prompt("Ingrese temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<25 || temperaturaCorporal>44){
			temperaturaCorporal=prompt("Error. Reingrese temperatura corporal");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		switch (estadoCivil) {
			case "soltero":
				if(edad>17){
					contadorMayoresEdadSolteros++;
				}
				if(sexo=='f'){
					contadorMujeresSolteras++;
				}
				break;
			case "casado":
				if(sexo=='f'){
					contadorMujeresCasadas++;
					acumuladorEdadCasadas+=edad;
				}
				break;
			default: // viudo
				if(sexo=='f'){
					contadorMujeresViudas++;
				}
				break;
		}

		if(edad>60 && temperaturaCorporal>38){
			contadorTerceraEdadTemperaturaMayor38++;
		}

		if(flagPrimerIngreso==0 || temperaturaCorporal>mayorTemperaturaCorporal){
			mayorTemperaturaCorporal=temperaturaCorporal;
			nacionalidadMayorTemperaturaCorporal=nacionalidad;
			flagPrimerIngreso=1;
		}


		seguir=prompt("¿Desea continuar ingresando pasajeros? s/n");
		seguir=seguir.toLowerCase();
	}
	while(seguir=='s');

	mujeresSolterasViudas=contadorMujeresSolteras+contadorMujeresViudas;

	if(contadorMujeresCasadas!=0){
		promedioEdadCasadas=acumuladorEdadCasadas/contadorMujeresCasadas;
	}
	else{
		promedioEdadCasadas="No se ingresaron mujeres casadas";
	}

	document.write(`a) La Nacionalidad de la persona con mas temperatura: ${nacionalidadMayorTemperaturaCorporal}, ${mayorTemperaturaCorporal}°<br>
	b) Cuantos mayores de edad estan solteros: ${contadorMayoresEdadSolteros}<br>
	c) La cantidad de mujeres que hay solteras o viudas: ${mujeresSolterasViudas}<br>
	d) Cuantas personas de la tercera edad tienen mas de 38 de temperatura: ${contadorTerceraEdadTemperaturaMayor38}<br>
	e) El promedio de edad entre las mujeres casadas: ${promedioEdadCasadas}<br>`);

}
