// DACAL FEDERICO
// DIVISION "A"
/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria.
necesitan saber si es un gato o un perrro u "otra cosa", (solo hay esos tres tipos).
el tipo de pelaje (corto, largo, sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/

function mostrar()
{
    // VARIABLES
    let tipoAnimal;
    let pelaje;
    let edad;
    let nombre;
    let raza;
    let peso;
    let estadoClinico;
    let temperaturaCorporal;

    let pesoPerroMasPesado;
    let nombrePerroMasPesado;

    let porcentajeEnfermos;

    let nombreUltimaMascotaOtro;

    let temperaturaAnimalSinPeloMenorTemperatura;
    let animalSinPeloMenorTemperatura;
    let nombreAnimalSinPeloMenorTemperatura;

    let promedioPeso;

    let promedioTemperaturaGato;
    let promedioTemperaturaPerro;
    let promedioTemperaturaOtro;

    let pesoGatoSinPeloLiviano;
    let nombreGatoSinPelosLiviano;
    let razaGatoSinPelosLiviano;

    let porcentajePerrosYGatos;
    let cantidadPerrosYGatos;

    let totalAnimales;

    let seguir;

    // MENSAJES
    let mensajePerroMasPesado;
    let mensajeMenorEstadoClinico;
    let mensajePromedioTemperatura;

    // CONTADORES
    let contadorPerro;
    let contadorGato;
    let contadorOtro;
    let contadorEnfermo;
    let contadorInternado;
    let contadorAdopcion;

    // FLAGS
    let flagSinPelo;
    let flagGatoSinPelo;

    // ACUMULADORES
    let acumuladorTotalPeso;
    let acumuladorTemperaturaGato;
    let acumuladorTemperaturaPerro;
    let acumuladorTemperaturaOtro;

    // INICIALIZACIONES
    contadorPerro=0;
    contadorGato=0;
    contadorOtro=0;
    contadorEnfermo=0;
    contadorInternado=0;
    contadorAdopcion=0;
    acumuladorTotalPeso=0;
    acumuladorTemperaturaGato=0;
    acumuladorTemperaturaPerro=0;
    acumuladorTemperaturaOtro=0;

    flagSinPelo=0;
    flagGatoSinPelo=0;

    do{
        tipoAnimal=prompt("Ingrese tipo de mascota (gato, perro, u 'otro'):");
        tipoAnimal=tipoAnimal.toLowerCase();
        while(isNaN(tipoAnimal)==false || tipoAnimal!="gato" && tipoAnimal!="perro" && tipoAnimal!="otro"){
            tipoAnimal=prompt("Error. Reingrese tipo de mascota (gato, perro, u 'otro'):");
            tipoAnimal=tipoAnimal.toLowerCase();
        }

        nombre=prompt("Ingrese nombre:");
        while(isNaN(nombre)==false){
            nombre=prompt("Error. Reingrese nombre:");

        }

        pelaje=prompt("Ingrese tipo de pelaje (corto, largo, sin pelo):");
        pelaje=pelaje.toLowerCase();
        while(isNaN(pelaje)==false || pelaje!="corto" && pelaje!="largo" && pelaje!="sin pelo"){
            pelaje=prompt("Error. Reingrese tipo de pelaje (corto, largo, sin pelo):");
            pelaje=pelaje.toLowerCase();
        }

        edad=prompt("Ingrese edad:");
        edad=parseInt(edad);
        while(isNaN(edad)==true || edad<1 || edad>120){
            edad=prompt("Error. Reingrese edad:");
            edad=parseInt(edad);
        }

        raza=prompt("Ingrese raza:");
        while(isNaN(raza)==false){
            raza=prompt("Error. Reingrese raza:");
        }
        
        peso=prompt("Ingrese peso (en kg.):");
        peso=parseFloat(peso);
        while(isNaN(peso)==true || peso<1 || peso>90){
            peso=prompt("Error. Reingrese peso:");
            peso=parseFloat(peso);
        }

        temperaturaCorporal=prompt("Ingrese temperatura corporal: C°");
        temperaturaCorporal=parseFloat(temperaturaCorporal);
        while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<25 || temperaturaCorporal>42){
            temperaturaCorporal=prompt("Error. Reingrese temperatura corporal: C°");
            temperaturaCorporal=parseFloat(temperaturaCorporal);
        }
        
        estadoClinico=prompt("Ingrese tipo de estado clinico (enfermo, internado o adopcion):");
        estadoClinico=estadoClinico.toLowerCase();
        while(isNaN(estadoClinico)==false || estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion"){
            estadoClinico=prompt("Error. Reingrese tipo de estado clinico (enfermo, internado o adopcion):");
            estadoClinico=estadoClinico.toLowerCase();
        }

        seguir=prompt("¿Desea continuar ingresando mascotas? s/n");
        seguir=seguir.toLowerCase();

        acumuladorTotalPeso+=peso;

        switch (tipoAnimal) {
            case "gato":
                acumuladorTemperaturaGato+=temperaturaCorporal;
                contadorGato++;
                if(pelaje=="sin pelo"){
                    if(flagGatoSinPelo==0 || peso<pesoGatoSinPeloLiviano){
                        pesoGatoSinPeloLiviano=peso;
                        nombreGatoSinPelosLiviano=nombre;
                        razaGatoSinPelosLiviano=raza;
                        flagGatoSinPelo=1;
                    }
                }
                break;
            case "perro":
                acumuladorTemperaturaPerro+=temperaturaCorporal;
                contadorPerro++;
                if(contadorPerro==1 || peso>pesoPerroMasPesado){
                    pesoPerroMasPesado=peso;
                    nombrePerroMasPesado=nombre;
                }
                break;
            default: // otro
                acumuladorTemperaturaOtro+=temperaturaCorporal;
                contadorOtro++;
                nombreUltimaMascotaOtro=nombre;
                break;
        }

        if(estadoClinico=="enfermo"){
            contadorEnfermo++;
        }
        else if(estadoClinico=="internado"){
            contadorInternado++;
        }
        else{ // adopcion
            contadorAdopcion++;
        }

        if(pelaje=="sin pelo"){
            if(flagSinPelo==0 || temperaturaCorporal<temperaturaAnimalSinPeloMenorTemperatura){
                temperaturaAnimalSinPeloMenorTemperatura=temperaturaCorporal;
                animalSinPeloMenorTemperatura=tipoAnimal;
                nombreAnimalSinPeloMenorTemperatura=nombre;
                flagSinPelo=1;
            }
        }

    }
    while(seguir=='s');

    if(contadorPerro!=0){
        mensajePerroMasPesado=`${nombrePerroMasPesado}, pesa ${pesoPerroMasPesado}.`;
    }
    else{
        mensajePerroMasPesado="No se ingresaron perros.";
    }

    // TOTAL ANIMALES
    totalAnimales=contadorPerro+contadorGato+contadorOtro;

    // PORCENTAJE ANIMALES ENFERMOS
    if(contadorEnfermo!=0){
        porcentajeEnfermos=(contadorEnfermo*100)/totalAnimales;
    }
    else{
        porcentajeEnfermos="No se ingresaron animales enfermos";
    }

    // ULTIMA MASCOTA "OTRO"
    if(contadorOtro==0){
        nombreUltimaMascotaOtro="No se ingresaron aniamles del tipo otro";
    }

    // ESTADO CLINICO CON MENOR CANTIDAD
    if(contadorEnfermo<contadorInternado && contadorEnfermo<contadorAdopcion){
        mensajeMenorEstadoClinico="El estado menos ingresado es enfermo";
    }
    else if(contadorInternado<contadorAdopcion){
        mensajeMenorEstadoClinico="El estado menos ingresado es internado";
    }
    else{
        mensajeMenorEstadoClinico="El estado menos ingresado es adopcion";
    }

    // PROMEDIO PESO TOTAL
    promedioPeso=acumuladorTotalPeso/totalAnimales;

    // PROMEDIO TEMPERATURA POR TIPO
    promedioTemperaturaGato=acumuladorTemperaturaGato/contadorGato;
    console.log()
    promedioTemperaturaPerro=acumuladorTemperaturaPerro/contadorPerro;
    promedioTemperaturaOtro=acumuladorTemperaturaOtro/contadorOtro;

    if(promedioTemperaturaGato>promedioTemperaturaPerro && promedioTemperaturaGato>promedioTemperaturaOtro){
        mensajePromedioTemperatura="El tipo de con mayor temperatura promedio es Gato";
    }
    else if(promedioTemperaturaPerro>promedioTemperaturaOtro){
        mensajePromedioTemperatura="El tipo de con mayor temperatura promedio es Perro";
    }
    else{
        mensajePromedioTemperatura="El tipo de con mayor temperatura promedio es Otro";
    }

    // PORCENTAJE PERROS Y GATOS
    cantidadPerrosYGatos=contadorPerro+contadorGato;
    if(cantidadPerrosYGatos!=0){
    porcentajePerrosYGatos=(cantidadPerrosYGatos*100)/totalAnimales;
    }
    else{
        porcentajePerrosYGatos="No se ingresaron perros o gatos";
    }
    
    // MENOR TEMPERATURA ANIMAL SIN PELO
    if(flagSinPelo==0){
        mensajeSinPelo="No se ingresaron animales sin pelos";
    }
    else{
        mensajeSinPelo=`El animal sin pelo con menor temperatura es ${animalSinPeloMenorTemperatura}, ${nombreAnimalSinPeloMenorTemperatura}`;
    }

    // GATO SIN PELOS MAS LIVIANO
    if(flagGatoSinPelo!=0){
        mensajeGatoSinPelo=`${nombreGatoSinPelosLiviano}, ${razaGatoSinPelosLiviano}`;
    }
    else{
        mensajeGatoSinPelo="No se ingresaron gatos sin pelo";
    }

    document.write(`a)El perro mas pesado: ${mensajePerroMasPesado}<br>
    b)El porcentaje de enfermos sobre el total de mascotas: ${porcentajeEnfermos}<br>
    c)El nombre de la ultima mascota de tipo "otro": ${nombreUltimaMascotaOtro}<br>
    d)El animal sin pelo con menor temperatura corporal: ${mensajeSinPelo}, <br>
    e)Que tipo de mascota tiene el mayor promedio de temperatura corporal:${mensajePromedioTemperatura} <br>
    f)Sumando gatos y perros que porcentaje del total de mascotas son: ${porcentajePerrosYGatos}%<br>
    g)Que estado clinico tiene la menor cantidad de mascotas: ${mensajeMenorEstadoClinico}<br>       
    H)Cual es el promedio de kilos de peso tomando todas las mascotas: ${promedioPeso}<br> 
    i)El nombre y raza del gato sin pelos mas liviano: ${mensajeGatoSinPelo}<br>`)
}