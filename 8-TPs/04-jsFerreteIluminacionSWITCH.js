/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
  */
function CalcularPrecio () 
{
    let cantidadLamparitas;
    let costoUnidad;
    let porcentajeDescuento;
    let descuento;
    let porcentajeImpuesto;
    let costoImpuesto;
    let marca;
    let precioBruto;
    let precioFinal;
    let precioConImpuesto;
    let mensaje;
    let mensajeImpuesto;

    cantidadLamparitas=document.getElementById('txtIdCantidad').value;
    cantidadLamparitas=parseInt(cantidadLamparitas);
    marca=document.getElementById('Marca').value;

    costoUnidad=35;

    if(cantidadLamparitas >= 6){
        porcentajeDescuento=50;
    }
    else{
        switch (cantidadLamparitas) {
            case 5: 
                if(marca == "ArgentinaLuz"){
                    porcentajeDescuento=40;
                }
                else{
                    porcentajeDescuento=30;
                }
                break;
            case 4:
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                    porcentajeDescuento=25;
                }
                else{
                    porcentajeDescuento=20;
                }
                break;
            case 3:
                if(marca == "ArgentinaLuz"){
                    porcentajeDescuento=15;
                } 
                else{
                    if(marca == "FelipeLamparas"){
                        porcentajeDescuento=10;
                    }
                    else{
                        porcentajeDescuento=5;
                    }
                }
                break;
            default:
                porcentajeDescuento=0;
                break;
        }
    }

    precioBruto=cantidadLamparitas*costoUnidad;
    descuento=precioBruto*(porcentajeDescuento/100);
    precioFinal=precioBruto-descuento;
    console.log(cantidadLamparitas);
    console.log(marca);
    console.log(descuento);
    console.log(precioBruto);
    document.getElementById('txtIdprecioDescuento').value=precioFinal;

    if (precioFinal > 120){
        porcentajeImpuesto=10;
        costoImpuesto=precioFinal*(porcentajeImpuesto/100);
        precioConImpuesto=precioFinal+costoImpuesto;
        mensajeImpuesto=`Ud. pagó $${precioConImpuesto}, siendo $${costoImpuesto} el impuesto.`;
        alert(mensajeImpuesto);
    }
    else {
        mensaje=`Compraste ${cantidadLamparitas} lamparas de ${marca}. El Precio Final es: $${precioFinal}`;
        alert(mensaje);
    }
}

// Nombre: Federico Dacal
// Division: "A"

function CalcularPrecioOtraForma() 
{
    let cantidadLamparitas;
    let costoUnidad;
    let porcentajeDescuento;
    let descuento;
    let porcentajeImpuesto;
    let costoImpuesto;
    let marca;
    let precioBruto;
    let precioFinal;
    let precioConImpuesto;
    let mensaje;
    let mensajeImpuesto;

    cantidadLamparitas=document.getElementById('txtIdCantidad').value;
    cantidadLamparitas=parseInt(cantidadLamparitas);
    marca=document.getElementById('Marca').value;

    costoUnidad=35;

    switch(cantidadLamparitas){
        case 5:
            if(marca == "ArgentinaLuz"){
                porcentajeDescuento=40;
            }else{
                porcentajeDescuento=30;
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || "FelipeLamparas"){
                porcentajeDescuento=25;
            }else{
                porcentajeDescuento=20;
            }
            break;
        case 3:
            if(marca == "ArgentinaLuz"){
                porcentajeDescuento=15;
            } 
            else if(marca == "FelipeLamparas"){
                    porcentajeDescuento=10;
                }
                else{
                    porcentajeDescuento=5;
            }
            break;
        case 2:
        case 1:
            porcentajeDescuento=0;
            break;
        default:
            porcentajeDescuento=50;
            break;
    }
    precioBruto=cantidadLamparitas*costoUnidad;
    descuento=precioBruto*(porcentajeDescuento/100);
    precioFinal=precioBruto-descuento;
    console.log(cantidadLamparitas);
    console.log(marca);
    console.log(descuento);
    console.log(precioBruto);
    document.getElementById('txtIdprecioDescuento').value=precioFinal;

    if (precioFinal > 120){
        porcentajeImpuesto=10;
        costoImpuesto=precioFinal*(porcentajeImpuesto/100);
        precioConImpuesto=precioFinal+costoImpuesto;
        mensajeImpuesto=`Ud. pagó $${precioConImpuesto}, siendo $${costoImpuesto} el impuesto.`;
        alert(mensajeImpuesto);
    }
    else {
        mensaje=`Compraste ${cantidadLamparitas} lamparas de ${marca}. El Precio Final es: $${precioFinal}`;
        alert(mensaje);
    }
}