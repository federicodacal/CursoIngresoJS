/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad;
	let sexo;
	let estadoCivil;
	let sueldo;
	let numeroLegajo;
	let nacionalidad;

	edad=prompt("Ingrese edad: ");
	edad=parseInt(edad);
	while(isNaN(edad)==true || edad<18 || edad>90){
		edad=prompt("Error. Ingrese edad: ");
		edad=parseInt(edad);
	}

	sexo=prompt("Ingrese sexo (f/m): ");
	sexo=sexo.toLowerCase();
	while(isNaN(sexo)==false || sexo !='m' && sexo != 'f'){
		sexo=prompt("Error. Ingrese sexo: ");
		sexo=sexo.toLowerCase();
	}

	estadoCivil=prompt("Ingrese estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos):");
	estadoCivil=parseInt(estadoCivil);
	while(isNaN(estadoCivil)==true || estadoCivil !=1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4 ){
		estadoCivil=prompt("Error. Ingrese estado civil: ");
		estadoCivil=parseInt(estadoCivil);
	}

	sueldo=prompt("Ingrese sueldo: ");
	sueldo=parseFloat(sueldo);
	while(isNaN(sueldo)==true || sueldo<8000){
		sueldo=prompt("Error. Ingrese sueldo: ");
		sueldo=parseFloat(sueldo);
	}

	numeroLegajo=prompt("Ingrese numero de legajo: ");
	numeroLegajo=parseInt(numeroLegajo);
	while(isNaN(numeroLegajo)==true || numeroLegajo<999 || numeroLegajo>9999){
		numeroLegajo=prompt("Error. Ingrese numero de legajo: ");
		numeroLegajo=parseInt(numeroLegajo);
	}

	nacionalidad=prompt("Ingrese nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados): ");
	nacionalidad=nacionalidad.toLowerCase();
	while(isNaN(nacionalidad)==false || nacionalidad !='a' && nacionalidad != 'e' && nacionalidad != 'n'){
		nacionalidad=prompt("Error. Ingrese nacionalidad: ");
		nacionalidad=nacionalidad.toLowerCase();
	}

	document.getElementById('txtIdEdad').value=edad;
	document.getElementById('txtIdSexo').value=sexo;
	document.getElementById('txtIdEstadoCivil').value=estadoCivil;
	document.getElementById('txtIdSueldo').value=sueldo;
	document.getElementById('txtIdLegajo').value=numeroLegajo;
	document.getElementById('txtIdNacionalidad').value=nacionalidad;
}
