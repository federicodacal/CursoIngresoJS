/*
3-Con IF
una agencia de viajes debe sacar las tarifas de los viajes, se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final.

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%.

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%.

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento.
*/

//Probado usando html Switch-09
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

// Federico Dacal
// Division "A"