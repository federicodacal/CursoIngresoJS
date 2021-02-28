function mostrar()
{   
    // DECLARACION VARIABLES DE INGRESO
    let nombre;
    let peso;
    let temperatura;

    // DECLARACION VARIABLE ANIMAL MAS PESADO
    let pesoAnimalPesado;
    let nombreAnimalPesado;
    let temperaturaAnimalPesado;

    // DECLARACION CONTADORES 
    let contadorAnimales;
    let contadorTemperaturaBajoCero;
    let contadorTemperaturaPar;

    // DECLARACION ACUMULADOR PESO y PROMEDIO PESO
    let acumuladorPeso;
    let promedioPeso;

    // DECLARACION VARIABLES PESO MAXIMO y PESO MINIMO (ANIMALES BAJO CERO)
    let pesoMaximoAnimalesBajoCero;
    let pesoMinimoAnimalesBajoCero;

    // DECLARACION VARIABLE DE REPETICION
    let seguir;

    // INICIALIZACION CONTADORES y ACUMULADORES
    contadorAnimales=0;
    contadorTemperaturaBajoCero=0;
    contadorTemperaturaPar=0;
    acumuladorPeso=0;

    do{
        nombre=prompt("Ingrese nombre del animal: ");
        while(isNaN(nombre)==false){
            nombre=prompt("Error. Reingrese el nombre del animal: ");
        }

        peso=prompt("Ingrese el peso: ");
        peso=parseFloat(peso);
        while(isNaN(peso)==true || peso<1 || peso>1000){
            peso=prompt("Error. Reingrese el peso: ");
            peso=parseFloat(peso);
        }

        temperatura=prompt("Ingrese la temperatura: ");
        temperatura=parseFloat(temperatura);
        while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30){
            temperatura=prompt("Error. Reingrese la temperatura: ");
            temperatura=parseFloat(temperatura);
        }

        if(temperatura%2==0){
            contadorTemperaturaPar++;
        }

        if(contadorAnimales==0 || peso>pesoAnimalPesado){
            pesoAnimalPesado=peso;
            nombreAnimalPesado=nombre;
            temperaturaAnimalPesado=temperatura;
        }

        if(temperatura<0){
            if(contadorTemperaturaBajoCero==0 || peso>pesoMaximoAnimalesBajoCero){
                pesoMaximoAnimalesBajoCero=peso;
            }
            if(contadorTemperaturaBajoCero==0 || peso<pesoMinimoAnimalesBajoCero){
                pesoMinimoAnimalesBajoCero=peso;
            }
            contadorTemperaturaBajoCero++;
        }

        acumuladorPeso+=peso;
        contadorAnimales++;
        seguir=prompt("¿Desea continuar ingresando animales? s/n");
        seguir=seguir.toLowerCase();
    }
    while(seguir=='s');

    promedioPeso=acumuladorPeso/contadorAnimales;
    document.write(`a) Cantidad de temperaturas pares: ${contadorTemperaturaPar} <br>
    b) Nombre y temperatura del animal más pesado: ${nombreAnimalPesado}, ${temperaturaAnimalPesado} <br>
    c) Cantidad de animales que viven a menos de 0 grados: ${contadorTemperaturaBajoCero} <br>
    d) Promedio de peso: ${promedioPeso.toFixed(2)} <br>
    e) Peso máximo y mínimo de los animales bajo cero: ${pesoMaximoAnimalesBajoCero}, ${pesoMinimoAnimalesBajoCero}`);
}