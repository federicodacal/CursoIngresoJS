function mostrar()
{       
    let seguir;
    let nombre;
    let nota;
    let edad;
    let sexo;

    let contadorVarones;
    let contadorVaronesAprobados;
    let contadorAdolescentes;
    let contadorMayores;
    let contadorMenores;
    let contadorMujeres;
  
    let acumuladorNotaMujeres;
    let acumuladorNotasVarones;
    let acumuladorNotaAdolescentes;
    let acumuladorNotaMayores;
    let acumuladorNotaMenores;

    let promedioNotaMujeres;
    let promedioNotaVarones;
    let promedioMayores;
    let promedioMenores;
    let promedioAdolescentes;
    
    contadorVarones=0;
    contadorVaronesAprobados=0;
    contadorMujeres=0;
    contadorMenores=0;
    contadorMayores=0;
    contadorAdolescentes=0;
    acumuladorNotaMujeres=0;
    acumuladorNotasVarones=0;
    acumuladorNotaAdolescentes=0;
    acumuladorNotaMayores=0;
    acumuladorNotaMenores=0;
    
    do{
        nombre=prompt("Ingresar nombre");
        while(isNaN(nombre)==false){
            nombre=prompt("Error. Reingrese nombre");
        }

        edad=prompt("Ingresa edad (a partir de 6):");
        edad=parseInt(edad);
        while(isNaN(edad)==true || edad<6 || edad>105){
            edad=prompt("Error. Reingresa edad (a partir de 17):");
            edad=parseInt(edad);
        }

        sexo=prompt("Ingresa sexo (f/m):");
        sexo=sexo.toLowerCase();
        while(isNaN(sexo)==false || sexo!="f" && sexo!="m"){
            sexo=prompt("Error. Reingresa sexo (f/m):");
            sexo=sexo.toLowerCase();
        }

        nota=prompt("Ingresa nota (entre 1 y 10):");
        nota=parseInt(nota);
        while(isNaN(nota)==true || nota<1 || nota>10){
            nota=prompt("Error. Reingresa nota:");
            nota=parseInt(nota);
        }

        if(sexo=="m"){
            contadorVarones++;
            acumuladorNotasVarones+=nota;
            if(nota>5){
                contadorVaronesAprobados++;
            }
        }
        else
        {
            contadorMujeres++;
            acumuladorNotaMujeres+=nota;
        }

        if(edad>5 && edad<13){
            contadorMenores++;
            acumuladorNotaMenores+=nota;
        }
        else if(edad>12 && edad<18){
            contadorAdolescentes++;
            acumuladorNotaAdolescentes+=nota;
        }
        else{
            contadorMayores++;
            acumuladorNotaMayores+=nota;
        }

        seguir=prompt("¿Desea continuar? s/n");
        seguir=seguir.toLowerCase();
    }
    while(seguir=='s');


    if(contadorVarones==0){
        promedioNotaVarones="No se ingresaron alumnos varones";
    }
    else{
        promedioNotaVarones=acumuladorNotasVarones/contadorVarones;
    }

    if(contadorMujeres==0){
        promedioNotaMujeres="No se ingresaron alumnas mujeres";
    }
    else{
        promedioNotaMujeres=acumuladorNotaMujeres/contadorMujeres;
    }
 
    if(contadorMayores==0){
        promedioMayores="No se ingresaron alumnos mayores";
    }
    else{
        promedioMayores=acumuladorNotaMayores/contadorMayores;
    }
    
    if(contadorMenores==0){
        promedioMenores="No se ingresaron alumnos menores";
    }
    else{
        promedioMenores=acumuladorNotaMenores/contadorMenores;
    }
    
    if(contadorAdolescentes==0){
        promedioAdolescentes="No se ingresaron alumnos adolescentes";
    }
    else{
        promedioAdolescentes=acumuladorNotaAdolescentes/contadorAdolescentes;
    }

    if(contadorVaronesAprobados==0){
        contadorVaronesAprobados="No se registraron alumnos varones aprobados";
    }

    document.write(`a) La cantidad de varones aprobados: ${contadorVaronesAprobados}<br>
    b) El promedio de notas de los menores de edad (6 a 12): ${promedioMenores} <br>
    c) El promedio de notas de los adolescentes (13 a 17): ${promedioAdolescentes} <br>
    d) El promedio de notas de los mayores (a partir de 18): ${promedioMayores} <br>
    e) El promedio de notas por sexo masculino y femenino: f:${promedioNotaMujeres}, m: ${promedioNotaVarones} <br>`);
}
