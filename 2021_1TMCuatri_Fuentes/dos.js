// DACAL FEDERICO
// DIVISION "A"

/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar()
{
  let nombre;
  let cursada;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad; 
  let seguir;

  let contadorFemenino;
  let contadorNoBinario;
  let contadorMasculino;
  let acumuladorNotaFemenino;
  let acumuladorNotaNoBianario;
  let acumuladorNotaMasculino;

  let promedioNotaMasculino;
  let promedioNotaFemenino;
  let promedioNotaNoBinario;

  let mejorNotaFemenino;
  let nombreMejorNotaFemenino;
  let flagPrimerFemenino;
  let flagPrimerNoBinario;
  let mejorNotaNoBinario;
  let nombreMejorNotaNoBinario;

  let edadMasJovenLibre;
  let nombreEdadMasJovenLibre;
  let flagPrimerLibre;

  let cantidadMateriasAlumno;
  let nombreAlumnoCantidadMaterias;
  let edadAlumnoCantidadMaterias;
  let flagPrimerLibreoPresencial;
  let mensajeMasMaterias;

  contadorFemenino=0;
  contadorNoBinario=0;
  contadorMasculino=0;
  acumuladorNotaFemenino=0;
  acumuladorNotaNoBianario=0;
  acumuladorNotaMasculino=0;
  flagPrimerFemenino=0;
  flagPrimerNoBinario=0;
  flagPrimerLibre=0;
  flagPrimerLibreoPresencial=0;

    do{

        nombre=prompt("Ingrese nombre del alumno: ");
        while(isNaN(nombre)==false){
          nombre=prompt("Error. Reingrese un nombre: ");
        }
    
        cursada=prompt("Ingrese el tipo de la cursada (libre, presencial, remota): ");
        cursada=cursada.toLowerCase();
        while(isNaN(cursada)==false || cursada!= "libre" && cursada != "presencial" && cursada != "remota"){
          cursada=prompt("Error. Reingrese el tipo de cursada: ");
          cursada=cursada.toLowerCase();
        }

        cantidadMaterias=prompt("Ingrese la cantidad de materias: ");
        cantidadMaterias=parseInt(cantidadMaterias);
        while(isNaN(cantidadMaterias)==true || cantidadMaterias<1 || cantidadMaterias>8){
          cantidadMaterias=prompt("Error. Reingrese cantidad de materias: ");
          cantidadMaterias=parseInt(cantidadMaterias);
        }
    
        sexo=prompt("Ingrese sexo (femenino, masculino, no binario): ");
        sexo=sexo.toLowerCase();
        while(isNaN(sexo)==false || sexo!= "femenino" && sexo != "masculino" && sexo != "no binario"){
          sexo=prompt("Error. Reingrese sexo: ");
          sexo=sexo.toLowerCase();
        }
    
        edad=prompt("Ingrese edad: ");
        edad=parseInt(edad);
        while(isNaN(edad)==true || edad<17 || edad>105){
          edad=prompt("Error. Reingrese edad: ");
          edad=parseInt(edad);
        }
    
        notaPromedio=prompt("Ingrese nota promedio: ");
        notaPromedio=parseInt(notaPromedio);
        while(isNaN(notaPromedio)==true || notaPromedio<1 || notaPromedio>10){
          notaPromedio=prompt("Error. Reingrese nota promedio: ");
          notaPromedio=parseInt(notaPromedio);
        }

        switch (sexo) {
          case "femenino":
            contadorFemenino++;
            acumuladorNotaFemenino+=notaPromedio;
            if(flagPrimerFemenino==0 || notaPromedio>mejorNotaFemenino){
              mejorNotaFemenino=notaPromedio;
              nombreMejorNotaFemenino=nombre;
              flagPrimerFemenino=1;
            }
            break;
          case "no binario":
            contadorNoBinario++;
            acumuladorNotaNoBianario+=notaPromedio;
            if(flagPrimerNoBinario==0 || notaPromedio>mejorNotaNoBinario){
              mejorNotaNoBinario=notaPromedio;
              nombreMejorNotaNoBinario=nombre;
              flagPrimerNoBinario=1;
            }
            break;
          default: // masculino
            contadorMasculino++;
            acumuladorNotaMasculino+=notaPromedio;
            break;
        }

          if(cursada=="libre"){
            if(flagPrimerLibre==0 || edad<edadMasJovenLibre){
              edadMasJovenLibre=edad;
              nombreEdadMasJovenLibre=nombre;
              flagPrimerLibre=1;
            }
          }

          if(cursada=="libre" || cursada=="presencial"){
            if(flagPrimerLibreoPresencial==0 || cantidadMaterias>cantidadMateriasAlumno){
              cantidadMateriasAlumno=cantidadMaterias;
              nombreAlumnoCantidadMaterias=nombre;
              edadAlumnoCantidadMaterias=edad;
              flagPrimerLibreoPresencial=1;
            }
          }

      seguir=prompt("¿Desea continuar ingresando datos? s/n");
      seguir=seguir.toLowerCase();
    }
    while(seguir=='s');

    // Promedios por sexo y comprobacion
    if(contadorMasculino!=0){
      promedioNotaMasculino=acumuladorNotaMasculino/contadorMasculino;
    }
    else{
      promedioNotaMasculino="No se ingresaron alumnos Masculino";
    }

    if(contadorFemenino!=0){
      promedioNotaFemenino=acumuladorNotaFemenino/contadorFemenino;
    }
    else{
      promedioNotaFemenino="No se ingresaron alumnos Femenino";
    }


    if(contadorNoBinario!=0){
      promedioNotaNoBinario=acumuladorNotaNoBianario/contadorNoBinario;
    }
    else{
      promedioNotaNoBinario="No se ingresaron alumnos No Binarios";
    }

    // Mejor promedio no masculino
    if(contadorFemenino+contadorNoBinario==0){
      mensajeNotaNoMasculino="No se ingresaron alumnos Femenino o No Binario";
    }
    else if(mejorNotaFemenino>mejorNotaNoBinario){
      mensajeNotaNoMasculino=`La mejor nota promedio no masculino es Femenino: ${nombreMejorNotaFemenino}`;
    }
    else{ // no binario
      mensajeNotaNoMasculino=`La mejor nota promedio no masculino es No Binario: ${nombreMejorNotaNoBinario}`;
    }

    // Comprobacion alumno libre
    if(flagPrimerLibre==0){
      nombreEdadMasJovenLibre="No se ingresaron alumnos Libre";
    }

    // Comprobacion alumno mas materias
    if(flagPrimerLibreoPresencial==0){
      mensajeMasMaterias="No ingresaron alumnos en Libre o Presencial";
    }
    else{
      mensajeMasMaterias=`${edadAlumnoCantidadMaterias}, ${nombreAlumnoCantidadMaterias}`;
    }
   

    document.write(`a) El nombre del mejor promedio que no sea masculino: ${mensajeNotaNoMasculino}<br>
    b) El nombre del mas joven de los alumnos entre los que la dan libre: ${nombreEdadMasJovenLibre}<br>
    c) El promedio de nota por sexo <br>
    Femenino: ${promedioNotaFemenino}<br>
    Masculino: ${promedioNotaMasculino}<br>
    No Binario: ${promedioNotaNoBinario}<br>
    d) La edad y nombre del que cursa mas materias que no sean en forma remota: ${mensajeMasMaterias}<br>`);


}
