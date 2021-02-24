function mostrar()
{
	let numero;
	let i;
	let contadorPares;
	let mensaje;

	contadorPares=0;
	
	numero=prompt("Ingrese un número: ");
	numero=parseInt(numero);
	for(i=1;i<=numero;i++){
		if(i % 2 == 0){
			contadorPares++;
			console.log(i);
		}
	}
	mensaje=`La cantidad de pares encontrados es ${contadorPares}`;
	alert(mensaje);
}