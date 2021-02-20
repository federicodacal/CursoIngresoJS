/*
Al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	let contador;
	let mensaje
	
	contador=0;          	// Iniciar
	while(contador < 10){   // Comparar
		contador++;			// Modificacion de variable de control
		mensaje=contador;
		console.log(mensaje);
		alert(mensaje);
	}
	alert(`Fuera del While.`);
}

/*
Secuencias Condicionales: Estructuras If, Switch
Secuencias Iterativas: Estructura While

var = i	-> variable de inicializacion/control
while (condicion)	-> Utiliza variable de control
{
sentencias y modificación de la variable de control
}
Mientras la condicion sea verdadera (true) continuará iterando (y evaluando la condicion) hasta que la condicion sea falsa (false)
*/

function repaso()
{	
	let contador;
	let acumulador;
	let numero;
	let promedio;

	contador=0;
	acumulador=0;
	while (contador<5){
		contador++;
		numero=promt(`Ingrese el número ${numero}:`);
		acumulador+=numero;
	}
	promedio=acumulador/contador;
	alert(`El promedio es ${promedio}`);
}

function repaso()
{
	let contador;
	let acumulador;
	let respuesta;
	let numero;

	contador=0;
	respuesta='s';
	acumulador=0;
	while (respuesta=='s'){
		contador++;
		numero=promt(`Ingrese el número ${numero}:`);
		acumulador+=numero;
		respuesta=prompt("¿Desea continuar? s/n")
	}
	promedio=acumulador/contador;
	alert(`El promedio es ${promedio}`);
}