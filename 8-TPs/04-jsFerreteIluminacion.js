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
    let cantidadLamparas;
    let precioUnidad;
    let precioFinal;
    let precioBruto;
    let porcentajeDescuento; 
    let descuento;
    let marca;
    let mensaje;
    let mensaje2;
    let costoIIBB;
    let porcentajeIIBB
    let precioConIIBB;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marca=document.getElementById('Marca').value;

    precioUnidad=35;
    porcentajeIIBB=10;
    precioBruto=cantidadLamparas*precioUnidad;
    console.log(`Cantidad: ${cantidadLamparas}, Marca: ${marca}, Precio Bruto: $${precioBruto}`);

    if (cantidadLamparas >= 6) 
    {
        porcentajeDescuento=50;
    } 
        else 
        {
            if (cantidadLamparas == 5) 
            {
                if (marca == "ArgentinaLuz") 
                {
                    porcentajeDescuento=40;
                }
            else 
            {
                if (marca != "ArgentinaLuz") 
                {    
                    porcentajeDescuento=30;
                }
            }
        }
        else 
        {  
            if (cantidadLamparas == 4) 
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                {
                    porcentajeDescuento=25;
                }
                else
                {
                    porcentajeDescuento=20;
                }
            } 
        else    
        {
            if (cantidadLamparas == 3) 
            {
                if(marca == "ArgentinaLuz")
                {
                    porcentajeDescuento=15; 
                }
                else 
                {
                    if(marca == "FelipeLamparas")
                    {
                        porcentajeDescuento=10;
                    }
                        else 
                        {
                            porcentajeDescuento=5;  
                        }    
                    } 
                    } 
                }
            } 
        }

    descuento=precioBruto*(porcentajeDescuento/100);
    console.log(`Descuento: ${descuento}`);
    precioFinal=precioBruto-descuento;
    console.log(`Precio Final: ${precioFinal}`);
    costoIIBB=precioFinal*(porcentajeIIBB/100);
    precioConIIBB=precioFinal+costoIIBB;
    console.log(`Costo IIBB: ${costoIIBB}, Precio con IIBB: ${precioConIIBB}`);

    document.getElementById('txtIdprecioDescuento').value=precioFinal;
    mensaje=`Ud. compró ${cantidadLamparas} lamparas de ${marca} y el precio con descuento es $${precioFinal}`;
    alert(mensaje);
    mensaje2=`Ud. pago $${precioConIIBB} con IIBB, siendo $${costoIIBB} el impuesto que se pagó.`;

    if (precioFinal > 120)
    {
        precioConIIBB=precioFinal+costoIIBB;
        alert(mensaje2);
    }

}
// Nombre: Federico Dacal
// Division: "A"