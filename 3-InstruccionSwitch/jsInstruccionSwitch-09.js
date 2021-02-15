// Con IF
function mostrarIf()
{
	let costoBase;
	let localidad;
	let estacion;
	let precioFinal;
	let porcentaje;
	let indice;
	let mensaje;

	estacion=document.getElementById('txtIdEstacion').value;
	localidad=document.getElementById('txtIdDestino').value;
	costoBase=15000;

	if(estacion == "Invierno"){
		if(localidad == "Bariloche"){
			porcentaje=20;
		}else{
		if(localidad == "Mar del plata"){
			porcentaje=-20;
		}else{
			porcentaje=-10;
			}
		}
	}else{
		if(estacion == "Verano"){
			if(localidad == "Bariloche"){
				porcentaje=-20;
			}else{
				if(localidad == "Mar del plata"){
					porcentaje=20;
				}else{
					porcentaje=10;
				}
			}
		}else{
			if(localidad == "Cordoba"){
					porcentaje=0;
				}else{
					porcentaje=10;
				}
			}
	}

	indice=costoBase*(porcentaje/100);
	precioFinal=costoBase+indice;
	console.log(precioFinal);
	console.log(porcentaje);
	console.log(indice);

	mensaje=`Destino: ${localidad}, Estacion: ${estacion}, Precio Final: ${precioFinal}`;
	alert(mensaje);
}	

// Con Switch
function mostrar()
{
    let costoBase;
    let localidad;
    let estacion;
    let precioFinal;
    let porcentaje;
    let indice;
    let mensaje;

    estacion=document.getElementById('txtIdEstacion').value;
	localidad=document.getElementById('txtIdDestino').value;
    costoBase=15000;

	switch (estacion) {
		case "Invierno":
			if (localidad == "Bariloche"){
				porcentaje=20;
			}
			else if(localidad == "Mar del plata"){
				porcentaje=-20;
			}
			else{
				porcentaje=-10;
			}
			break;
		case "Verano":
			if(localidad == "Bariloche"){
				porcentaje=-20;
			}
			else if (localidad == "Mar del plata"){
				porcentaje=20;
			}
			else{
				porcentaje=10;
			}
			break;
		default:
			if(localidad == "Cordoba"){
				porcentaje=0;
			}
			else{
				porcentaje=10;
			}
			break;
	}

	indice=costoBase*(porcentaje/100);
    precioFinal=costoBase+indice;
	console.log(precioFinal);
	console.log(porcentaje);
    console.log(indice);

	mensaje=`Destino: ${localidad}, Estacion: ${estacion}, Precio Final: ${precioFinal}`;
	alert(mensaje);
}