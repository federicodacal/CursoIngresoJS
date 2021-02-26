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
	while(isNaN(numero)==true || numero<0){
		numero=prompt("Error, ingresó un caracter no númerico o un número negativo. El número debe ser positivo para ser primo o no primo. Reingrese número: ");
		numero=parseInt(numero);
	}

	for(i=1;i<=numero;i++){
		if(numero % i == 0){
			contadorDivisores++;
		}
	}
	if (contadorDivisores==1){
		mensaje="no es considerado primo o compuesto";
	}
	else if (contadorDivisores==2){
		mensaje="es primo";
	}
	else if (contadorDivisores==0){
		mensaje="no puede dividir";
	}
	else{
		mensaje="no es primo";
	}

	respuesta=`El número ${numero} ${mensaje}.`;
	alert(respuesta);
}