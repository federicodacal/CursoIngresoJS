/*
Dacal Federico
Enunciado:
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validar ("arena", "cal", "cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero)
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar, bruto sin descuento y...
b) El importe total a pagar con descuento (solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
*/

function mostrar()
{
    let tipo;
    let cantidadBolsas;
    let precioBolsa;
    let precioBrutoTotal;
    let precioBrutoProducto;
    let porcentajeDescuento;
    let descuento;
    let precioDescuento;
    let tipoMasCaro;
    let flagPrimerProducto;
    let mensajeMasBolsas;
    let mensajeMasCaro;
    let seguir;

    flagPrimerProducto=0;
    precioBrutoTotal=0;
    acumuladorBolsas=0;
    acumuladorArena=0;
    acumuladorCal=0;
    acumuladorCemento=0;

    do{
        tipo=prompt("Ingrese tipo de producto (arena, cal, cemento): ");
        tipo=tipo.toLowerCase();
        while(isNaN(tipo)==false || tipo != "arena" && tipo != "cal" && tipo != "cemento"){
            tipo=prompt("Error. Reingrese producto");
            tipo=tipo.toLowerCase();
        }

        cantidadBolsas=prompt("Ingrese cantidad de bolsas: ");
        cantidadBolsas=parseInt(cantidadBolsas);
        while(isNaN(cantidadBolsas)==true || cantidadBolsas<1){
            cantidadBolsas=prompt("Error. Reingrese cantidad de bolsas: ");
            cantidadBolsas=parseInt(cantidadBolsas);
        }

        precioBolsa=prompt("Ingrese precio: $");
        precioBolsa=parseFloat(precioBolsa);
        while(isNaN(precioBolsa)==true || precioBolsa<1){
            precioBolsa=prompt("Error. Reingrese precio: ");
            precioBolsa=parseFloat(precioBolsa);
        }

        if(flagPrimerProducto==0 || precioBolsa>tipoMasCaro){
            mensajeMasCaro=tipo;
            tipoMasCaro=precioBolsa;
            flagPrimerProducto=1;
        }

        switch (tipo) {
            case "arena":
                acumuladorArena+=cantidadBolsas;
                break;
            case "cal":
                acumuladorCal+=cantidadBolsas;
                break;
            case "cemento":
                acumuladorCemento+=cantidadBolsas;
                break;
        }

        precioBrutoProducto=cantidadBolsas*precioBolsa;
        precioBrutoTotal+=precioBrutoProducto;

        seguir=prompt("¿Desea continuar comprando? s/n");
        seguir=seguir.toLowerCase();
    }
    while(seguir=='s');

    acumuladorBolsas=acumuladorArena+acumuladorCal+acumuladorCemento;

    if(acumuladorBolsas>30){
        porcentajeDescuento=25;
    }
    else if (acumuladorBolsas>10){
        porcentajeDescuento=15;
    }
    else{
        porcentajeDescuento=0;
    }

    if(porcentajeDescuento!=0){
        descuento=precioBrutoTotal*(porcentajeDescuento/100);
        precioDescuento=precioBrutoTotal-descuento;
    }
    else{
        precioDescuento="No se realizaron descuentos";
    }

    if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento){
        mensajeMasBolsas="Arena";
    }
    else if(acumuladorCal>acumuladorCemento){
        mensajeMasBolsas="Cal";
    }
    else{
        mensajeMasBolsas="Cemento";
    }

    document.write(`a) El importe total a pagar, bruto sin descuento: ${precioBrutoTotal} <br>
    b) El importe total a pagar con descuento:  ${precioDescuento} <br>
    c) Informar el tipo con mas cantidad de bolsas: ${mensajeMasBolsas}<br>
    d) El tipo mas caro: ${mensajeMasCaro}<br>`)
}