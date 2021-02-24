function mostrar()
{
	let numero;
	let i;
	let contadorDivisores;
	let mensaje;

	contadorDivisores=0;
	
	numero=prompt("Ingrese un número: ");
	numero=parseInt(numero);
	for(i=1;i<=numero;i++){
		if(numero % i == 0){
			contadorDivisores++;
			console.log(i);
		}
	}
	mensaje=`La cantidad de divisores encontrados es ${contadorDivisores}`;
	alert(mensaje);
}