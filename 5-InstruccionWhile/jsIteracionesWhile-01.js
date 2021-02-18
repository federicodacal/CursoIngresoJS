/*
Al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	let contador;
	let mensaje
	
	contador = 0;
	while(contador < 10){

		contador++;
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