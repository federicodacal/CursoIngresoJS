function mostrar()
{
    let nota;
    let acumuladorNota;
    let contador;
    let promedio;
    let menorNota;
    let sexoMenorNota;
    let contadorVaronesmas6;
    let sexo;

    contador=0;
    acumuladorNota=0;
    contadorVaronesmas6=0;

    for(contador=0;contador<5;contador++){
        nota=prompt("Ingrese nota: ");
        nota=parseInt(nota);
        while(isNaN(nota)==true || nota < 0 || nota > 10){
        nota=prompt("Error. Reingrese nota: ");
        nota=parseInt(nota);
        }
        acumuladorNota+=nota;

        sexo=prompt("Ingrese sexo: ");
        while(isNaN(sexo)==false || sexo != 'f' && sexo != 'm'){
        sexo=prompt("Error. Reingrese sexo: ");
        }
        if(contador==0 || nota<menorNota){
            menorNota=nota;
            sexoMenorNota=sexo;
        }
        if(sexo=='m' && nota>=6){
            contadorVaronesmas6++;
        }
    }
    promedio=acumuladorNota/contador;
    alert("El promedio es "+promedio);
    alert("La nota mas baja es "+menorNota+", sexo: "+sexoMenorNota);
    alert("La cantidad de varones con nota mayor o igual a 6 es: "+contadorVaronesmas6);
} 
