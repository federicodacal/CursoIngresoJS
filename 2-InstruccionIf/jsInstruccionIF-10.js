function mostrar()
{
	let nota;
	let valorMinimo = 1;
	let valorMaximo = 10;

	nota = Math.round(Math.random()*(valorMaximo-valorMinimo)+valorMinimo);
	alert(`La nota es ${nota}`);
	if (nota < 4){
		alert("Vamos, la proxima se puede.")
	}
	else if (nota < 9){
		alert("Aprobó!")
	}
	else {
		alert("Excelente!!!")
	}
}