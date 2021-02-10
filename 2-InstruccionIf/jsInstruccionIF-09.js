function mostrar()
{
	let randomNumber;
	let maximo = 10;
	let minimo = 1;

	//randomNumber = Math.random(); 	-> Intervalo [0 , 1)
 	
	randomNumber = Math.round(Math.random()*(maximo - minimo) + minimo);
	alert(randomNumber);
}