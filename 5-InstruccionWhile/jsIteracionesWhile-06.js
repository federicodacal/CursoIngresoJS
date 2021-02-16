function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	// Inicializar contador y acumulador
	contador=0;
	acumulador=0;
	
	while(contador < 5){
		numeroIngresado=parseInt(prompt("Ingrese un número: "));
		acumulador+=numeroIngresado;
		contador++;
	}
	promedio=acumulador/5;
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
}