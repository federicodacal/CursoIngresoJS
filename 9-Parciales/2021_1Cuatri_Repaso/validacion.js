/*
Pedir el ingreso de 10 mascotas 
Validar:
Tipo (gato, perro, pájaro y otros)
Raza, si es perro (pastor, toy, callejero) y si es gato (siamés, turco, peterbald, generico) y  si es de tipo "otros" o pájaro, pedir solo un texto.
Edad entre 1 y 20 para gatos y perros, para "otros" entre 1 y 100, para pájaro 1 de 50
Nombre (no se permite solo numero)
Mostrar por cada tipo el nombre del mas viejo, solo si hay de ese tipo.
Mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza.
*/

function probarEjercicio()
{
    // DECLARACION VARIABLES
    let tipo;
    let raza;
    let edad;
    let nombre;

    // DECLRACION VARIABLES MAS VIEJO DE CADA TIPO
    let gatoViejo;
    let nombreGatoViejo;
    let perroViejo;
    let nombrePerroViejo;
    let pajaroViejo;
    let nombrePajaroViejo;
    let otroViejo;
    let nombreOtroViejo;

    // DECLARACION FLAGS
    let flagPrimerGato;
    let flagPrimerPerro;
    let flagPrimerPajaro;
    let flagPrimerOtro;

    // DECLARACION CONTADORES RAZAS GATOS
    let contadorSiames;
    let contadorTurco;
    let contadorPeterbald;
    let contadorGenerico;

    // DECLARACION ACUMULADORES EDAD
    let acumuladorEdadSiames;
    let acumuladorEdadTurco;
    let acumuladorEdadPeterbald;
    let acumuladorEdadGenerico;

    // DECLARACION VARIABLE PROMEDIO
    let promedioEdad;
    let mensajeMayorCantidadRazaGato;

    // DECLARACION VARIABLE REPETICION
    let iteracion;

    // INICIALIZACION FLAGS
    flagPrimerGato=0;
    flagPrimerPerro=0;
    flagPrimerPajaro=0;
    flagPrimerOtro=0;

    // INICIALIZACION ACUMULADORES
    acumuladorEdadSiames=0;
    acumuladorEdadTurco=0;
    acumuladorEdadPeterbald=0;
    acumuladorEdadGenerico=0;

    // INICIALIZACION CONTADORES
    contadorSiames=0;
    contadorTurco=0;
    contadorPeterbald=0;
    contadorGenerico=0;
    iteracion=0;

    for(iteracion=0;iteracion<10;iteracion++){

        tipo=prompt("Ingrese tipo de mascota (gato, perro, pajaro y otros): ");
        tipo=tipo.toLowerCase();
        while(isNaN(tipo)==false || tipo != "gato" && tipo != "perro" && tipo != "pajaro" && tipo != "otros"){
            tipo=prompt("Error. Reingrese tipo de mascota: ");
            tipo=tipo.toLowerCase(); 
        }

        if(tipo=="gato"){
            raza=prompt("Ingrese raza de gato (siames, turco, peterbald, generico): ");
            raza=raza.toLowerCase();
            while(isNaN(raza)==false || raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico"){
                raza=prompt("Error. Reingrese raza de gato: ");
                raza=raza.toLowerCase(); 
            }
        }
        else if(tipo=="perro"){
            raza=prompt("Ingrese raza de perro (pastor, toy, callejero): ");
            raza=raza.toLowerCase();
            while(isNaN(raza)==false || raza != "pastor" && raza != "toy" && raza != "callejero" && raza != "generico"){
                raza=prompt("Error. Reingrese raza de perro: ");
                raza=raza.toLowerCase(); 
            }

        }
        else{
            raza=prompt("Ingrese raza de pajaro/otro: ");
            raza=raza.toLowerCase();
            while(isNaN(raza)==false){
                raza=prompt("Error. Reingrese raza de pajaro/otro: ");
                raza=raza.toLowerCase(); 
            }
        }

        switch (tipo) {
            case "perro":
            case "gato":
                edad=prompt("Ingrese edad de la mascota: ");
                edad=parseInt(edad);
                while(isNaN(edad)==true || edad<0 || edad>20){
                    edad=prompt("Error. Reingrese edad de la mascota: ");
                    edad=parseInt(edad);
                }    
                break;
            case "pajaro":
                edad=prompt("Ingrese edad de la mascota: ");
                edad=parseInt(edad);
                while(isNaN(edad)==true || edad<0 || edad>50){
                    edad=prompt("Error. Reingrese edad de la mascota: ");
                    edad=parseInt(edad);
                }  
                break;
            default: // "otros"
                edad=prompt("Ingrese edad de la mascota: ");
                edad=parseInt(edad);
                while(isNaN(edad)==true || edad<0 || edad>100){
                    edad=prompt("Error. Reingrese edad de la mascota: ");
                    edad=parseInt(edad);
                }
            }
        nombre=prompt("Ingrese nombre de la mascota: ");
        while(isNaN(nombre)==false){
            nombre=prompt("Error. Reingrese nombre de mascota: ");
        }

        // CONTADOR RAZAS GATOS y ACUMULADOR DE EDAD
        if(tipo=="gato"){
            if(raza=="siames"){
                acumuladorEdadSiames+=edad;
                contadorSiames++;
            } 
            else if(raza=="turco"){
                acumuladorEdadTurco+=edad;
                contadorTurco++;
            }
            else if(raza=="peterbald"){
                acumuladorEdadPeterbald+=edad;
                contadorPeterbald++;
            }
            else {
                acumuladorEdadGenerico+=edad;
                contadorGenerico++;
            }
        }

        // GUARDAR NOMBRE DEL MÁS VIEJO DE CADA TIPO
    switch (tipo) {
        case "gato":
            if(flagPrimerGato==0 || edad>gatoViejo){
                gatoViejo=edad;
                nombreGatoViejo=nombre;
                flagPrimerGato=1;
            }
            break;
        case "perro":
            if(flagPrimerPerro==0 || edad>perroViejo){
                perroViejo=edad;
                nombrePerroViejo=nombre;
                flagPrimerPerro=1;
            }
            break;
        case "pajaro":
            if(flagPrimerPajaro==0 || edad>pajaroViejo){
                pajaroViejo=edad;
                nombrePajaroViejo=nombre;
                flagPrimerPajaro=1;
            }  
            break;
        default:
            if(flagPrimerOtro==0 || edad>otroViejo){
                otroViejo=edad;
                nombreOtroViejo=nombre;
                flagPrimerOtro=1;
            }   
            break;
        }
    }

    // PROMEDIO EDAD DE MAYOR RAZA
    if(contadorSiames>contadorTurco && contadorSiames>contadorPeterbald && contadorSiames>contadorGenerico){
        mensajeMayorCantidadRazaGato="Siames";
        promedioEdad=acumuladorEdadSiames/contadorSiames;
    }
    else if(contadorTurco>contadorPeterbald && contadorTurco>contadorGenerico){
        mensajeMayorCantidadRazaGato="Turco";
        promedioEdad=acumuladorEdadTurco/contadorTurco;
    }
    else if(contadorPeterbald>contadorGenerico){
        mensajeMayorCantidadRazaGato="Peterbald";
        promedioEdad=acumuladorEdadPeterbald/contadorPeterbald;        
    }
    else{
        mensajeMayorCantidadRazaGato="Generico";
        promedioEdad=acumuladorEdadGenerico/contadorGenerico;
    }

    // CONFIRMAR MAYOR EDAD POR TIPO
    if(flagPrimerGato==0){
        nombreGatoViejo="No se ingresaron mascotas del tipo gato";
    }    
    if(flagPrimerPerro==0){
        nombrePerroViejo="No se ingresaron mascotas del tipo perro";
    }
    if(flagPrimerPajaro==0){
        nombrePajaroViejo="No se ingresaron mascotas del tipo pájaro";
    }
    if(flagPrimerOtro==0){
        nombreOtroViejo="No se ingresaron mascotas del tipo otro";
    }

    document.write(`Nombre de mascota mayor edad por tipo: <br>
    Gato: ${nombreGatoViejo}<br>
    Perro: ${nombrePerroViejo}<br>
    Pajaro: ${nombrePajaroViejo}<br>
    Otro: ${nombreOtroViejo}<br>
    Raza de gatos con más animales y promedio de edad: ${mensajeMayorCantidadRazaGato}, ${promedioEdad.toFixed(2)};`)
}