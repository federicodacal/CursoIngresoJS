function mostrar()
{
	let destino;
	let estacion;
	let mensaje;
	let porcentajeDescuento;
	let porcentajeAumento;
	let descuento;
	let aumento;
	let costoBase;
	let precioFinal;

	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	costoBase=15000;

	if(estacion == "Verano")
		{
			switch (destino) {
				case "Bariloche":
					porcentajeDescuento=20;
					porcentajeAumento=0;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentajeAumento=10;
					porcentajeDescuento=0;	
					break;
				case "Mar del plata":
					porcentajeAumento=20;
					porcentajeDescuento=0;
					break;
			}
		} else 
			{
			if(estacion == "Invierno")
				{
					switch(destino) {
						case "Bariloche":
							porcentajeDescuento=0;
							porcentajeAumento=20;
							break;
						case "Cataratas":
						case "Cordoba":
							porcentajeAumento=0;
							porcentajeDescuento=10;	
							break;
						case "Mar del plata":
							porcentajeAumento=0;
							porcentajeDescuento=20;
							break;
					}
				} else 
					{
						switch (destino) {
							case "Cordoba":
								porcentajeAumento=0;
								porcentajeDescuento=0;	
								break;
							default:
								porcentajeDescuento=0;
								porcentajeAumento=10;
								break;
						}
				}
		}

	descuento=costoBase*(porcentajeDescuento/100);
    precioFinal=costoBase-descuento;
	console.log(precioFinal);

    aumento=precioFinal*(porcentajeAumento/100);
    precioFinal=precioFinal+aumento;
	console.log(precioFinal);

	console.log(porcentajeDescuento);
	console.log(porcentajeAumento);
	console.log(destino);
	console.log(estacion);
	
	mensaje=`Destino: ${destino}, Estacion: ${estacion}, Precio Final: ${precioFinal}`;
	alert(mensaje);
}