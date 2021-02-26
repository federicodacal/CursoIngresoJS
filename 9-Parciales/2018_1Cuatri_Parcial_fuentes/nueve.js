function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let contadorProductos;
    let acumuladorProductos;
    let contadorTempPar;
    let contadorMenos0;
    let pesoMayor;
    let pesoMenor;
    let marcaPesoMayor;
    let flagProductoPesado;
    let flagPesoMinimo;
    let promedio;
    let seguir;

    contadorProductos=0;
    acumuladorProductos=0;
    flagProductoPesado=0;
    flagPesoMinimo=0;
    contadorTempPar=0;
    contadorMenos0=0;
    do{
        marca=prompt("Ingrese marca del producto: ");
        while(isNaN(marca)==false){
            marca=prompt("Error. Reingrese marca: ");
        }

        peso=prompt("Ingrese el peso: ");
        peso=parseFloat(peso);
        while(isNaN(peso)==true || peso<1 || peso>100){
            peso=prompt("Error. Reingrese el peso: ");
            peso=parseFloat(peso);
        }

        temperatura=prompt("Ingrese la temperatura: ");
        temperatura=parseFloat(temperatura);
        while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30){
            temperatura=prompt("Error. Reingrese el temperatura: ");
            temperatura=parseFloat(temperatura);
        }
        seguir=prompt("¿Desea continuar ingresando datos? s/n");
        seguir=seguir.toLowerCase();

        if(temperatura%2==0){
            contadorTempPar++;
        }
        if(temperatura<0){
            contadorMenos0++;
        }
        if(flagProductoPesado==0 || peso>pesoMayor){
            pesoMayor=peso;
            marcaPesoMayor=marca;
            flagProductoPesado=1;
        }
        if(flagPesoMinimo==0 || peso<pesoMenor){
            pesoMenor=peso;
            flagPesoMinimo=1;
        }
        acumuladorProductos+=peso;
        contadorProductos++;
    }
    while(seguir == 's');

    promedio=acumuladorProductos/contadorProductos;
    console.log(`
    a) La cantidad de temperaturas pares: ${contadorTempPar}
    b) La marca del producto más pesado: ${pesoMayor} ${marcaPesoMayor}
    c) La cantidad de productos que se conservan a menos de 0 grados: ${contadorMenos0}
    d) El promedio del peso de todos los productos: ${promedio.toFixed(2)}
    f) El peso máximo y el mínimo: ${pesoMayor}, ${pesoMenor}`)
}
