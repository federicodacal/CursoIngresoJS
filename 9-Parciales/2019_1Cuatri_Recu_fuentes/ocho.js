function mostrar()
{
    let color;
    let precio;
    let seguir;
    let contadorAutos;
    let promedio;
    let contadorRojo;
    let contadorRojoMayorA5000;
    let contadorMenorA5000;
    let acumuladorPrecio;

    acumuladorPrecio=0;
    contadorAutos=0;
    contadorRojo=0;
    contadorRojoMayorA5000=0;
    contadorMenorA5000=0;
    coloPrecioMayor=0;

    do{
        
        color=prompt("Ingrese el color del vehículo (rojo, verde o amarillo):");
        color=color.toLowerCase();
        while(isNaN(color)==false || color!="rojo" && color!="verde" && color!="amarillo"){
            color=prompt("Error. Reingrese el color del vehículo (rojo, verde o amarillo):");
            color=color.toLowerCase();  
        }

        precio=prompt("Ingrese el precio (hasta $10000): ");
        precio=parseFloat(precio);
        while(isNaN(precio)==true || precio<0 || precio>10000){
            precio=prompt("Error. Reingrese el precio (hasta $10000): ");
            precio=parseFloat(precio);
        }

        if(color=="rojo"){
            contadorRojo++;
            if(precio>5000){
                contadorRojoMayorA5000++;
            }
        }

        if(precio<5000){
            contadorMenorA5000++;
        }

        if(contadorAutos==0 || precio>precioMayor){
            precioMayor=precio;
            coloPrecioMayor=color;
        }

        contadorAutos++;
        acumuladorPrecio+=precio;

        seguir=prompt("¿Desea continuar? s/n");
        seguir=seguir.toLowerCase();
    }
    while(seguir=='s');

    promedio=acumuladorPrecio/contadorAutos;

    if(contadorRojo==0){
        contadorRojo="No se ingresó vehiculo rojo";
    }
    if(contadorRojoMayorA5000==0){
        contadorRojoMayorA5000="No se ingresó vehiculo rojo menor a $5000";
    }
    if(contadorMenorA5000==0){
        contadorMenorA5000="No se ingresó vehiculo menor a $5000";
    }

    document.write(`a) La cantidad de rojos: ${contadorRojo} <br>
    b) La cantidad de rojos con precio mayor a 5000: ${contadorRojoMayorA5000} <br>
    c) La cantidad de vehiculos con precio inferior a 5000: ${contadorMenorA5000} <br>
    d) El promedio de todos los vehiculos ingresados: ${promedio} <br>
    e) El mas caro y su color: $${precioMayor}, ${coloPrecioMayor} <br>`);
}
