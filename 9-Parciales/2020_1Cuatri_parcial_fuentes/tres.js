/*
DACAL FEDERICO

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) Cuantas personas de la tercera edad (mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombre;
	let edad;
	let contadorMayoresEdadViudos;
	let cantidadMayoresDe60con38Temp;
	let promedioEdadHombresSolteros;
	let sexo;
	let estadoCivil;
	let contadorHombresSolteros;
	let acumuladorEdadHombresSolteros;
	let contadorHombresViudos;
	let temperatura;
	let temperaturaMaxima;
	let nombrePasajeroTemperatura;
	let seguir;
	let flagTemperatura;

	flagTemperatura=0;
	contadorMayoresEdadViudos=0;
	contadorHombresSolteros=0;
	contadorHombresViudos=0;
	cantidadMayoresDe60con38Temp=0;
	acumuladorEdadHombresSolteros=0;

	do{
		nombre=prompt("Ingrese el nombre del pasajero: ");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error. Por favor, ingrese un nombre válido");
		}

		edad=prompt("Ingrese edad: ");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<1 || edad>120)
		{
			edad=prompt("Error. Por favor, ingrese una edad válida");
		}

		sexo=prompt("Ingrese el sexo del pasajero: f/m");
		while(isNaN(sexo)==false || sexo != 'f' && sexo != 'm')
		{
			sexo=prompt("Error. Por favor, ingrese un sexo válido");
		}

		estadoCivil=prompt("Ingrese el estado civil del pasajero: (soltero, casado o viudo)");
		while(isNaN(estadoCivil)==false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil=prompt("Error. Por favor, ingrese un estado civil válido");
		}

		temperatura=prompt("Ingrese temperatura detectada");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)==true || temperatura<28 || temperatura>44)
		{
			temperatura=prompt("Error. Por favor, ingrese una temperatura válida");
		}

	// a) El nombre de la persona con mas temperatura.
	if(flagTemperatura == 0 || temperatura > temperaturaMaxima){
		temperaturaMaxima=temperatura;
		nombrePasajeroTemperatura=nombre;
		flagTemperatura=1;
	}
	
	// b) Cuantos mayores de edad estan viudos.
	if(estadoCivil=="viudo" && edad > 17){
		contadorMayoresEdadViudos++;
	}	

	// c) La cantidad de hombres que hay solteros o viudos.
	// e) El promedio de edad entre los hombres solteros.
	switch (sexo) {
		case 'm':
			if(estadoCivil == "soltero"){
				contadorHombresSolteros++;
				acumuladorEdadHombresSolteros+=edad;
			}
			else if(estadoCivil == "viudo"){
				contadorHombresViudos++;
			}	
			break;
	}

	// d) cuantas personas de la tercera edad (mas de 60 años) , tienen mas de 38 de temperatura
	if(edad>59 && temperatura>38){
		cantidadMayoresDe60con38Temp++;
	}
	seguir=prompt("¿Desea continuar cargando pasajeros? s/n")	
	} while(seguir =='s');

	// a)
	alert(`La mayor temperatura registrada es ${temperaturaMaxima}° del pasajero ${nombrePasajeroTemperatura}`);
	// b)
	alert(`El número de mayores de edad viudos es ${contadorMayoresEdadViudos}`);
	// c)
	alert(`Hay ${contadorHombresSolteros+contadorHombresViudos} hombres viudos y solteros (solteros: ${contadorHombresSolteros}, viudos: ${contadorHombresViudos})`);
	// d)
	alert(`Hay ${cantidadMayoresDe60con38Temp} pasajeros mayores de 60 años con temperatura superior a 38°`);
	// e)
	if(contadorHombresSolteros > 0){
	promedioEdadHombresSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;
	alert(`El promedio de edad entre los hombres solteros es ${promedioEdadHombresSolteros}`);
	}
	else{
		alert("No hay pasajeros hombres solteros");
	}
}
