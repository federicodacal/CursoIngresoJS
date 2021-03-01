function mostrar()
{
    let pais;
    let habitantes;
    let temperaturaMinima;

    let contadorTemperaturaPar;
    let contadorPaises;
    let contadorTemperaturaMayor40;

    let cantidadPaisMenosHabitantes;
    let paisMenosHabitantes;

    let promedioHabitantes

    let acumuladorHabitantes;

    let minimaTemperaturaMinima;
    let paisTemperaturaMinima;

    let seguir;

    contadorTemperaturaPar=0;
    contadorPaises=0;
    contadorTemperaturaMayor40=0;
    acumuladorHabitantes=0;

    do{
        
        pais=prompt("Ingrese el país");
        while(isNaN(pais)==false){
            pais=prompt("Error. Reingrese el país");
        }

        habitantes=prompt("Ingrese la cantidad de habitantes (en millones: entre 1 y 7000)");
        habitantes=parseFloat(habitantes);
        while(isNaN(habitantes)==true || habitantes<1 || habitantes>7000){
            habitantes=prompt("Error. Reingrese la cantidad de habitantes (en millones: entre 1 y 7000)");
            habitantes=parseFloat(habitantes);
        }

        temperaturaMinima=prompt("Ingrese la temperatura minima (en millones: entre -50 y 50)");
        temperaturaMinima=parseFloat(temperaturaMinima);
        while(isNaN(temperaturaMinima)==true || temperaturaMinima<-50 || temperaturaMinima>50){
            temperaturaMinima=prompt("Error. Reingrese la temperatura minima (en millones: entre 1 y 7000)");
            temperaturaMinima=parseFloat(temperaturaMinima);
        }
        
        if(temperaturaMinima%2==0){
            contadorTemperaturaPar++;
        }

        if(contadorPaises==0 || habitantes<cantidadPaisMenosHabitantes){
            cantidadPaisMenosHabitantes=habitantes;
            paisMenosHabitantes=pais;
        }

        if(temperaturaMinima>40){
            contadorTemperaturaMayor40++;
        }

        if(contadorPaises== 0 || temperaturaMinima<minimaTemperaturaMinima){
            minimaTemperaturaMinima=temperaturaMinima;
            paisTemperaturaMinima=pais;
        }


        seguir=prompt("¿Desea continuar ingresando datos? s/n");
        seguir=seguir.toLowerCase();

        acumuladorHabitantes+=habitantes;
        contadorPaises++;
    }
    while(seguir=='s');

    if(contadorTemperaturaPar==0){
        contadorTemperaturaPar="No se ingresaron temperaturas Par";
    }

    if(contadorTemperaturaMayor40==0){
        contadorTemperaturaMayor40="No se ingresaron temperaturas mínima mayor a 40";
    }

    promedioHabitantes=acumuladorHabitantes/contadorPaises;

    document.write(`a) La cantidad de temperaturas pares: ${contadorTemperaturaPar}<br>
    b) El nombre del pais con menos habitantes: ${paisMenosHabitantes}<br>
    c) La cantidad de paises que superan los 40 grados: ${contadorTemperaturaMayor40} <br>
    d) El promedio de habitantes entre los paises ingresados: ${promedioHabitantes}  <br>
    f) La temperatura mínima ingresada, y nombre del pais que registro esa temperatura: ${minimaTemperaturaMinima}, ${paisTemperaturaMinima}`);
}
