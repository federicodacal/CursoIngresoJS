/* 
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero)

Al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar, bruto sin descuento y...
b) El importe total a pagar con descuento (solo si corresponde)
c) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
d) El tipo mas caro
*/

function mostrar()
{
    let tipo;
    let cantidadBolsas;
    let precioBolsa;
    let seguir;

    let acumuladorBolsas;
    let acumuladorBolsasArena;
    let acumuladorBolsasCal;
    let acumuladorBolsasCemento;
    let mensajeTipoMasUnidades;

    let porcentajeDescuento;
    let precioBruto;
    let precioFinal;
    let descuento;

    let flagPrimerIngreso;
    let precioBolsaMayor;
    let tipoPrecioMayor;

    flagPrimerIngreso=0;
    contadorCompra=0;
    acumuladorBolsas=0;
    acumuladorBolsasArena=0;
    acumuladorBolsasCal=0;
    acumuladorBolsasCemento=0;


    do{

        tipo=prompt("Ingrese el tipo del producto (arena, cal, cemento):");
        tipo=tipo.toLowerCase();
        while(isNaN(tipo)==false || tipo !="arena" && tipo !="cal" && tipo !="cemento"){
          tipo=prompt("Error. Reingrese el tipo del producto (arena, cal, cemento):");
          tipo=tipo.toLowerCase();
        }

        cantidadBolsas=prompt("Ingrese la cantidad de bolsas");
        cantidadBolsas=parseInt(cantidadBolsas);
        while(isNaN(cantidadBolsas)==true || cantidadBolsas<1){
          cantidadBolsas=prompt("Error. Reingrese la cantidad de bolsas");
          cantidadBolsas=parseInt(cantidadBolsas);
        }

        precioBolsa=prompt("Ingrese el precio");
        precioBolsa=parseFloat(precioBolsa);
        while(isNaN(precioBolsa)==true || precioBolsa<0){
          precioBolsa=prompt("Error. Reingrese el precio");
          precioBolsa=parseFloat(precioBolsa);
        }

        switch (tipo) {
          case "arena":
            acumuladorBolsasArena+=cantidadBolsas;
            break;
          case "cal":
            acumuladorBolsasCal+=cantidadBolsas;
            break;
          default: // cemento
            acumuladorBolsasCemento+=cantidadBolsas;
            break;
        }

        if(flagPrimerIngreso==0 || precioBolsa>precioBolsaMayor){
          precioBolsaMayor=precioBolsa;
          tipoPrecioMayor=tipo;
          flagPrimerIngreso=1;
        }

        seguir=prompt("¿Desea continuar la compra? s/n");
        seguir=seguir.toLowerCase();
    }
    while(seguir=='s');

    acumuladorBolsas=acumuladorBolsasArena+acumuladorBolsasCal+acumuladorBolsasCemento;

  if(acumuladorBolsas>30){
    porcentajeDescuento=-25;
  }
  else if(acumuladorBolsas>10){
    porcentajeDescuento=-15;
  }
  else{
    porcentajeDescuento=0;
  }

  precioBruto=precioBolsa*acumuladorBolsas;
  if(porcentajeDescuento!=0){
    descuento=precioBruto*(porcentajeDescuento/100);
    precioFinal=precioBruto+descuento;
  }
  else{
    precioFinal="No se realizó descuento";
  }

  if(acumuladorBolsasArena>acumuladorBolsasCal && acumuladorBolsasArena>acumuladorBolsasCemento){
    mensajeTipoMasUnidades="El tipo con mas unidades es Arena";
  }
  else if(acumuladorBolsasCal>acumuladorBolsasCemento){
    mensajeTipoMasUnidades="El tipo con mas unidades es Cal";
  }
  else{ // cemento
    mensajeTipoMasUnidades="El tipo con mas unidades es Cemento";
  }

  document.write(`a) El importe total a pagar, bruto sin descuento: $${precioBruto}<br>
  b) El importe total a pagar con descuento: ${precioFinal}<br>
  c) Informar el tipo con mas cantidad de bolsas en el total de la compra: ${mensajeTipoMasUnidades}<br>
  d) El tipo mas caro: $${precioBolsaMayor}, ${tipoPrecioMayor}<br>`);

}
