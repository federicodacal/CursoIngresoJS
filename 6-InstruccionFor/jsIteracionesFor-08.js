function mostrar()
{
	let i;
	let numero;
	let mensaje;
	let respuesta;
	let contadorDivisores;

	contadorDivisores=0;
	
	numero=prompt("Ingrese un número: ");
	numero=parseInt(numero);
	for(i=1;i<=numero;i++){
		if(numero % i == 0){
			contadorDivisores++;
		}
	}
	if (contadorDivisores == 1){
		mensaje="no es considerado primo o compuesto";
	}
	else if (contadorDivisores == 2){
		mensaje="es primo";
	}
	else{
		mensaje="no es primo";
	}
	respuesta=`El número ${numero} ${mensaje}.`;
	alert(respuesta);
}