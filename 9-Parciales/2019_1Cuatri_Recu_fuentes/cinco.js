function mostrar()
{
    let destino;
    let cantidadDias;
    let medioPago;
    let costoBase;
    let costoBruto;
    let costoFinal;
    let porcentaje;
    let porcentajeDescuentoMedioPago;
    let porcentajeTotal;
    let descuento;
    let impuestoPorcentaje;
    let impuesto;
    let costoConImpuesto;

    costoBase=100;

    destino=document.getElementById('selecContinente').value;
    medioPago=document.getElementById('selecPago').value;
    cantidadDias=prompt("¿Cuántos días?");
    cantidadDias=parseInt(cantidadDias);

    switch (destino) {
        case "Asia":
            porcentaje=20;
            porcentajeDescuentoMedioPago=0;
            break;
        case "America":
            porcentaje=-15;
            if(medioPago=="Débito"){
                porcentajeDescuentoMedioPago=-15;
            }
            else{
                porcentajeDescuentoMedioPago=0;
            }
            break;
        case "Europa":
            porcentaje-20;
            if(medioPago=="Débito"){
                porcentajeDescuentoMedioPago=-15;
            }
            else if(medioPago=="MercadoPago"){
                porcentajeDescuentoMedioPago=-10;
            }
            else{
                porcentajeDescuentoMedioPago=-5;
            }
            break;
        default: // Africa, Oceania
            porcentaje=-30;
            if(medioPago=="MercadoPago" || medioPago=="Efectivo"){
                porcentajeDescuentoMedioPago=-15;
            }
            else{
                porcentajeDescuentoMedioPago=0;
            }
            break;
    }

    costoBruto=costoBase*cantidadDias;
    porcentajeTotal=porcentaje+porcentajeDescuentoMedioPago;
    descuento=costoBruto*(porcentajeTotal/100);
    costoFinal=costoBruto+descuento;
    
    if(medioPago!="Cheque"){
        alert(`El costo por viajar a ${destino} por ${cantidadDias} días es $${costoFinal}`);
    }
    else{
        impuestoPorcentaje=15;
        impuesto=costoFinal*(impuestoPorcentaje/100);
        costoConImpuesto=costoFinal+impuesto;
        alert(`El costo por viajar a ${destino} por ${cantidadDias} días es $${costoConImpuesto}`);
    }


    // Débito, Crédito, Efectivo, MercadoPago, Cheque, Leliq
}
