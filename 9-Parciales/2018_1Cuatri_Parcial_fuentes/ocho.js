function mostrar()
{
    let letra;
    let numero;
    let seguir;
    let contadorPares;
    let contadorImpares;
    let contadorCeros;
    let contadorPositivos;
    let acumuladorPositivos;
    let acumuladorNegativos;
    let promedioPositivos;
    let sumaNegativos;
    let numMaximo;
    let letraNumMaximo;
    let numMinimo;
    let letraNunMinimo;
    let flagMaximo;
    let flagMinimo;
    let mensaje;

    flagMaximo=0;
    flagMinimo;
    contadorPares=0;
    contadorImpares=0;
    contadorCeros=0;
    contadorPositivos=0;
    acumuladorPositivos=0;
    acumuladorNegativos=0;
    sumaNegativos=0;
    numMaximo=0;
    numMinimo=0;

    do{
        numero=prompt("Ingrese un número: ");
        numero=parseInt(numero);
        while(isNaN(numero)==true || numero<-100 || numero>100){
            numero=prompt("Error. Reingrese número: ");
            numero=parseInt(numero);
        }

        letra=prompt("Ingrese una letra: ");
        while(isNaN(letra)==false || String(letra).length>1){
            letra=prompt("Error. Reingrese una letra: ");
        }
        seguir=prompt("¿Desea seguir ingresando datos? s/n");
        seguir=seguir.toLowerCase();

        if(numero==0){
            contadorCeros++;
        }
        else if (numero>0){
            contadorPositivos++;
            acumuladorPositivos+=numero;
        }
        else{
            acumuladorNegativos+=numero;
        }

        if(numero % 2 == 0){
            contadorPares++;
        }
        else{
            contadorImpares++;
        }

        if(flagMaximo==0 || numero>numMaximo){
            numMaximo=numero;
            letraNumMaximo=letra;
            flagMaximo=1;
        }
        if(flagMinimo==0 || numero<numMinimo){
            numMinimo=numero;
            letraNunMinimo=letra;
            flagMinimo=1;
        }
    }
    while(seguir == 's');       

    promedioPositivos=acumuladorPositivos/contadorPositivos;
    sumaNegativos=acumuladorNegativos;
    mensaje=`
    Cantidad de números pares: ${contadorPares}
    Cantidad de números impares: ${contadorImpares}
    Cantidad de ceros: ${contadorCeros}
    Promedio de los números positivos: ${promedioPositivos.toFixed(2)}
    Suma de los números negativos: ${sumaNegativos}
    Número y letra del máximo: ${numMaximo} ${letraNumMaximo} 
    Número y letra del mínimo: ${numMinimo} ${letraNunMinimo}`;
    console.log(mensaje);
}
