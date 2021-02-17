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
function mostrarconSwitch()
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
			switch (localidad) {
				case "Bariloche":
					porcentaje=20;
					break;
				case "Mar del plata":
					porcentaje=-20;
				default:
					porcentaje=-10;
					break;
			}
			break;
		case "Verano":
			switch (localidad) {
				case "Bariloche":
					porcentaje=-20;
					break;
				case "Mar del plata":
					porcentaje=20;
				default:
					porcentaje=10;
					break;
			}
			break;
		default:
			switch (localidad) {
				case "Cordoba":
					porcentaje=0;
					break;
				default:
					porcentaje=10;
					break;
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

// Federico Dacal
// Division "A"
// Switch 09