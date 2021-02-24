/*
Al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	let claveIngresada;

	claveIngresada=prompt("Ingrese la clave.");
	while(claveIngresada != "utn750"){
	alert("Clave incorrecta.");
	claveIngresada=prompt("Por favor, ingrese la clave.");
	}
	alert("Ingresaste!");
}

function mostrarDoWhile()
{
	let claveIngresada;
	let flag;

	flag=0;
	do{
		if(flag==0){
			claveIngresada=prompt("Por favor, ingrese la clave.");
			flag=1;
		}
		else{
			clave=prompt("Clave Incorrecta. Reingrese la clave.")
		}
	}
	while(claveIngresada != "utn750");
	alert("Ingresaste!");
}

function validacion()
{
	var valorDeVerdad;
	var edad;
	var nombre;
	var sexo;

	valorDeVerdad=isNaN("Hola");	// true (no es un número)
	valorDeVerdad=isNaN("Hola 22"); // true (no es un número)
	valorDeVerdad=isNaN("33");		// false (es un número)
	valorDeVerdad=isNaN(3);			// false (es un numero)

	edad=prompt("Ingrese edad"); 	// validacion de un número
	while(isNaN(edad)==true || edad<1 || edad>105)
	{
		edad=prompt("Error, ingrese edad");
	}

	nombre=prompt("Ingrese nombre");	// validación de caracteres
	while(isNaN(nombre)==false)
	{
		nombre=prompt("Error, ingrese nombre");
	}

	sexo=prompt("Ingrese sexo");	// validación de caracteres
	while(isNaN(sexo)==false || sexo != 'f' && sexo != 'm')
	{
		sexo=prompt("Error, ingrese sexo");
	}
}