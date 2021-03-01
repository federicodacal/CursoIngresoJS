function mostrar()
{   
    let nombre;
    let altura;
    let sexo;

    let acumuladorAltura;
    let promedioAltura;

    let alturaMenorAltura;
    let sexoMenorAltura;
    let nombreMenorAltura;

    let contadorMujeresAlturaMayor190;

    let contadorJugadores;
    
    let i;

    acumuladorAltura=0;
    contadorMujeresAlturaMayor190=0;

    for(i=0;i<3;i++){

        nombre=prompt("Ingrese el nombre del jugador/a:");
        while(isNaN(nombre)==false){
            nombre=prompt("Error. Reingrese nombre");
        }

        altura=prompt("Ingrese el altura del jugador/a (en cm.):");
        altura=parseInt(altura);
        while(isNaN(altura)==true || altura<1 || altura>250){
            altura=prompt("Error. Reingrese altura");
            altura=parseInt(altura);
        }

        sexo=prompt("Ingrese sexo (f/m/o)");
        sexo=sexo.toLowerCase();
        while(isNaN(sexo)==false || sexo!= 'f' && sexo!='m' && sexo!='o'){
            sexo=prompt("Error. Reingrese sexo (f/m/o)");
            sexo=sexo.toLowerCase();
        }

        if(i==0 || altura<alturaMenorAltura){
            alturaMenorAltura=altura;
            sexoMenorAltura=sexo;
            nombreMenorAltura=nombre;
        }

        if(sexo=='f' && altura>190){
            contadorMujeresAlturaMayor190++;
        }

        acumuladorAltura+=altura;
    }

    promedioAltura=acumuladorAltura/i;

    if(contadorMujeresAlturaMayor190==0){
        contadorMujeresAlturaMayor190="No se ingresaron mujeres con altura mayor de 190cm.";
    }


    document.write(`a) El promedio de las alturas totales: ${promedioAltura}<br>
    b) La altura más baja y el sexo de esa persona: ${alturaMenorAltura}, ${sexoMenorAltura}, ${nombreMenorAltura}<br>
    c) La cantidad de mujeres que su altura supere los 190 centimetros: ${contadorMujeresAlturaMayor190}<br>`)
}

