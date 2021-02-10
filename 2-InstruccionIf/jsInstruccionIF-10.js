/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let nota;
	let valorMinimo = 1;
	let valorMaximo = 10;
	let mensaje;

	//Math.floor((Math.random() * 10) + 1);
	nota = Math.floor((Math.random()*valorMaximo) +valorMinimo);

	if (nota < 4)
	{
		mensaje="Vamos, la proxima se puede.";
	}
	else
	{
		if (nota < 9)
		{
		mensaje="Aprobó!";
		} 
		else
		{
		mensaje="Excelente!!!";
		} 
	}
	alert(`La nota es ${nota}. ${mensaje}`)
}

// Nombre: Dacal Federico
// Division: "A"