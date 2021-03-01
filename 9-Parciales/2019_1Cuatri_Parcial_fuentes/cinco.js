function mostrar()
{
    let continente;
    let pago;
    let costoBase;
    let costoFinal;
    let porcentaje;
    let porcentajeDescuentoFormaDePago;
    let indice;

    costoBase=100;
    continente=document.getElementById('Marca').value;
    pago=prompt("Ingrese tipo de pago (efectivo, debito, mercadopago, otro)");

    switch (continente) {
        case "América":
            porcentaje=-50;
            if(pago=="debito"){
                porcentajeDescuentoFormaDePago=-10;
            }
            else{
                porcentajeDescuentoFormaDePago=0;
            }
            break;
        case "África":
            porcentaje=-60;
            if(pago=="mercadopago" || pago=="efectivo"){
                porcentajeDescuentoFormaDePago=-15;
            }
            else{
                porcentajeDescuentoFormaDePago=0;
            }
            break;
        case "Europa":
            porcentaje=-20;
            if(pago=="debito"){
                porcentajeDescuentoFormaDePago=-15;
            }
            else if(pago=="mercadopago"){
                porcentajeDescuentoFormaDePago=-10;
            }
            else{
                porcentajeDescuentoFormaDePago=-5;
            }
            break;
        default: // Asia, Oceania
            porcentaje=20;
            porcentajeDescuentoFormaDePago=0;
            break;
    }

    porcentajeFinal=porcentaje+porcentajeDescuentoFormaDePago;
    indice=costoBase*(porcentajeFinal/100);
    costoFinal=costoBase+indice;

    alert(`El costo por día del viaje a ${continente} es $${costoFinal}`);

}
