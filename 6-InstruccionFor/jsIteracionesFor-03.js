function mostrar()
{
	let i=0;
	let iteraciones;

	iteraciones=prompt("Ingrese el número de repiticiones");
	iteraciones=parseInt(iteraciones);

	for (i=0;i<iteraciones;i++){
		console.log("Hola UTN-Fra"+i);
	}
}