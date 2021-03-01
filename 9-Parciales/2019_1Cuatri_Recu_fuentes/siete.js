function mostrar()
{
    let peso;
    let tipo;
    let repeticiones;
    let acumuladorPeso;
    let pesoMasLiviano;
    let tipoPesoMasLiviano;
    let contadorCarne;
    let acumuladorPesoCarne;
    let promedioPeso;
    let promedioPesoCarne;

    acumuladorPeso=0;
    contadorCarne=0;
    acumuladorPesoCarne=0;

    for(repeticiones=0;repeticiones<4;repeticiones++){

        peso=prompt("Ingrese peso (en kg.):");
        peso=parseFloat(peso);
        while(isNaN(peso)==true || peso<0 || peso>500){
            peso=prompt("Error. Reingrese peso (en kg.):");
            peso=parseFloat(peso);
        }

        tipo=prompt("Ingrese el tipo de alimento (carne, vegetales, pollo):");
        tipo=tipo.toLowerCase();
        while(isNaN(tipo)==false || tipo!="carne" && tipo!="vegetales" && tipo!="pollo"){
            tipo=prompt("Error. Reingrese el tipo de alimento (carne, vegetales, pollo):");
            tipo=tipo.toLowerCase();
        }

        acumuladorPeso+=peso;

        if(repeticiones==0 || peso<pesoMasLiviano){
            pesoMasLiviano=peso;
            tipoPesoMasLiviano=tipo;
        }

        if(tipo=="carne"){
            contadorCarne++;
            acumuladorPesoCarne+=peso;
        }

        promedioPeso=acumuladorPeso/repeticiones;
        promedioPesoCarne=acumuladorPesoCarne/contadorCarne;

        if(contadorCarne==0){
            mensajeCarne="No se ingreso bolsas de carne";
        }
        else{
            mensajeCarne=`${contadorCarne}, ${promedioPesoCarne}`;
        }

    }

    document.write(`a) El promedio de los kilos totales: ${promedioPeso}<br>
    b) El mas liviano y su sabor: ${pesoMasLiviano}kg, ${tipoPesoMasLiviano}<br>
    c) La cantidad de sabor carne y el promedio de kilos de sabor carne: ${mensajeCarne}<br>`)
}
