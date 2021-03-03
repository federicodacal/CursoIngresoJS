// Dacal Federico
// Division "A"

/*
1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/		

function probarEjercicio()

{
	// DECLARACION DE VARIABLES
	let nombre;
	let carrera;
	let estadoCarrera;
	let sexo;
	let nota;

	// DECLARACION DE CONTADORES
	let contadorProgramacion;
	let contadorPsicologia;
	let contadorDiseno; 
	let contadorProgramacionFemeninoEnCurso;
	let contadorNoBinario;
	let contadorAlumnosFinalizantes;

	// DECLARACION ACUMULADORES
	let acumuladorNotasFinalizantes;

	// DECLARACION VARIABLES PARA PUNTO "E"
	let nombreMayorEdad;
	let sexoMayorEdad;
	let edadMayorEdad;

	// DECLARACION VARIABLES PARA PUNTO "F"
	let notaMejorAlumnoPsicologiaNB;
	let nombreMejorAlumnoPsicologiaNB;
	let estadoMejorAlumnoPsicologiaNB;

	// DECLARACION VARIABLE PROMEDIO
	let promedioNotaFinalizantes;

	// DECLARACION VARIABLES DE MENSAJE
	let mensajePromedio;
	let mensajePsicologia;
	let mensajeCarreraMasAlumnos;
	let mensajeNoBinario;

	// DECLARACION FLAGS
	let flagPrimerNoBinarioPsicologia;

	// DECLARACION VARIABLE DE REPETICION
	let seguir;

	// INICIALIZACION DE CONTADORES
	contadorProgramacion=0;
	contadorPsicologia=0;
	contadorDiseno=0; 
	contadorProgramacionFemeninoEnCurso=0;
	contadorNoBinario=0;
	contadorAlumnosFinalizantes=0;

	// INICIALIZACION DE ACUMULADORES
	acumuladorNotasFinalizantes=0;

	// INICIALIZACION DE FLAG
	flagPrimerNoBinarioPsicologia=0;

	do{
		// VALIDACION DATOS DE INGRESO
		nombre=prompt("Ingrese nombre del alumno: ");
		while(isNaN(nombre)==false){
			nombre=prompt("Error. Reingrese un nombre: ");
		}

		carrera=prompt("Ingrese carrera (programacion, psicologia, diseño grafico): ");
		carrera=carrera.toLowerCase();
		while(isNaN(carrera)==false || carrera!= "programacion" && carrera != "psicologia" && carrera != "diseño grafico"){
			carrera=prompt("Error. Reingrese un carrera: ");
			carrera=carrera.toLowerCase();
		}

		estadoCarrera=prompt("Ingrese el estado de la carrera (en curso, abandono, finalizado): ");
		estadoCarrera=estadoCarrera.toLowerCase();
		while(isNaN(estadoCarrera)==false || estadoCarrera!= "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado"){
			estadoCarrera=prompt("Error. Reingrese el estado de carrera: ");
			estadoCarrera=estadoCarrera.toLowerCase();
		}

		sexo=prompt("Ingrese sexo (femenino, masculino, no binario): ");
		sexo=sexo.toLowerCase();
		while(isNaN(sexo)==false || sexo!= "femenino" && sexo != "masculino" && sexo != "no binario"){
			sexo=prompt("Error. Reingrese sexo: ");
			sexo=sexo.toLowerCase();
		}

		edad=prompt("Ingrese edad: ");
		edad=parseInt(edad);
		while(isNaN(edad)==true || edad<18 || edad>120){
			edad=prompt("Error. Reingrese edad: ");
			edad=parseInt(edad);
		}

		nota=prompt("Ingrese nota: ");
		nota=parseInt(nota);
		while(isNaN(nota)==true || nota<0 || nota>10){
			nota=prompt("Error. Reingrese nota: ");
			nota=parseInt(nota);
		}

		// SWITCH CARRERAS
		switch (carrera) {
			case "programacion": 
				contadorProgramacion++;	// CONTADOR PROGRAMACION
				if(sexo=="femenino" && estadoCarrera=="en curso"){
					contadorProgramacionFemeninoEnCurso++;	// CONTADOR PROGRAMACION FEMENINO EN CURSO
				}
				break;
			case"psicologia":
				contadorPsicologia++;	// CONTADOR PSICOLOGIA

				if(contadorPsicologia==1 || edad>edadMayorEdad){	// GUARDAR DATOS MAYOR ALUMNO PSICOLOGIA
					edadMayorEdad=edad;
					nombreMayorEdad=nombre;
	 				sexoMayorEdad=sexo;
				}

				if(sexo=="no binario"){		// GUARDAR DATOS ALUMNO NO BINARIO DE PSICOLOGIA MEJOR NOTA	
					if(flagPrimerNoBinarioPsicologia==0 || nota>notaMejorAlumnoPsicologiaNB){
					notaMejorAlumnoPsicologiaNB=nota;
	 				nombreMejorAlumnoPsicologiaNB=nombre;
	 				estadoMejorAlumnoPsicologiaNB=estadoCarrera;
					flagPrimerNoBinarioPsicologia=1;
					}
				}
				break;
			case "diseño grafico":
				contadorDiseno++;	// CONTADOR DISEÑO GRÁFICO
				break;
		}

		if(sexo=="no binario"){
			contadorNoBinario++;	// CONTADOR NO BINARIO
		}

		if(estadoCarrera=="finalizado"){
			acumuladorNotasFinalizantes+=nota;	// ACUMULADOR NOTAS ALUMNOS FINALIZANTES
			contadorAlumnosFinalizantes++;	// CONTADOR ALUMNOS FINALIZANTES
		}

		seguir=prompt("¿Desea continuar ingresando datos? s/n") // MODIFICACION VARIABLE ITERACION
		seguir=seguir.toLowerCase();
	}
	while(seguir == 's');

	// CONFIRMAR ALUMNOS FINALIZANTES
	if(contadorAlumnosFinalizantes!=0){
		// PROMEDIO ALUMNOS FINALIZANTES
		promedioNotaFinalizantes=acumuladorNotasFinalizantes/contadorAlumnosFinalizantes;
		mensajePromedio=`El promedio de los finalizantes es: ${promedioNotaFinalizantes}`;
	}
	else{
		mensajePromedio="No se ingresaron alumnos finalizantes";
	}
	
	// CONFIRMAR ALUMNOS NO BINARIOS
	if(contadorNoBinario==0){
		mensajeNoBinario="No se regristraron alumnos No Binarios en la carrera de psicología";
	}
	else{
		mensajeNoBinario=`${nombreMejorAlumnoPsicologiaNB}, ${notaMejorAlumnoPsicologiaNB}, ${estadoMejorAlumnoPsicologiaNB}`;
	}

	// CONFIRMAR ALUMNOS PSICOLOGIA
	if(contadorPsicologia==0){
		mensajePsicologia="No se registraron alumnos en la carrera de psicología";
	}
	else{
		mensajePsicologia=`${nombreMayorEdad}, ${sexoMayorEdad}, ${edadMayorEdad}`;
	}

	// CARRERA CON MÁS ALUMNOS
	if(contadorProgramacion>contadorPsicologia && contadorProgramacion>contadorDiseno){
		mensajeCarreraMasAlumnos="La carrera con más alumnos es Programación";
	}
	else if(contadorPsicologia>contadorDiseno){
		mensajeCarreraMasAlumnos="La carrera con más alumnos es Psicología";
	}
	else{
		mensajeCarreraMasAlumnos="La carrera con más alumnos es Diseño";
	}

	document.write(`
	A. Cantidad total de alumnos de cada carrera: <br>
	1) Programación: ${contadorProgramacion} <br>
	2) Psicología: ${contadorPsicologia} <br>
	3) Diseño Gráfico: ${contadorDiseno} <br>
	B. Cantidad total de mujeres que cursan la carrera de programación: ${contadorProgramacionFemeninoEnCurso} <br>
	C. Cantidad de alumnos no binarios: ${contadorNoBinario} <br>
	D. Promedio de notas de los alumnos finalizantes: ${mensajePromedio} <br>
	E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología: ${mensajePsicologia} <br>
	F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología: ${mensajeNoBinario} <br>
	G. ${mensajeCarreraMasAlumnos}`);
}