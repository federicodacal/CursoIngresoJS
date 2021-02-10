function mostrar()
{
	let randomNumber;
	let maximo = 10;
	let minimo = 1;

	//Return a random number between 0 (inclusive) and 1 (exclusive): -> Intervalo [0 , 1)
	//randomNumber = Math.random(); 	

	//Return a random number between 1 and 10:
	//Math.floor((Math.random() * 10) + 1);
 	
	randomNumber = Math.round(Math.random()*(maximo - minimo) + minimo);
	alert(randomNumber);
}