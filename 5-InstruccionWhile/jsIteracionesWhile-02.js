/*
Al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
*/
function mostrar()
{
	let contador;
	let mensaje;

	contador = 10;
	while(contador >= 1){

		mensaje=contador;
		console.log(mensaje);
		alert(mensaje);
		contador--;
	}
	alert(`Fuera del While.`);
}