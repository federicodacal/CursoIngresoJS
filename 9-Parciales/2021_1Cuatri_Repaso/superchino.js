/*
"Super Chino" 
Se pide el ingreso de mercadería de un supermercado, hasta que el usuario quiera, se pide:
- Tipo (limpieza, comestible, otros) -> tres tipos
- Nombre del producto
- Importe del producto (no mayor a 1000 pesos)
- Procedencia (importado, nacional, elaborado)
- Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d) el tipo de mercadería  que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function probarEjercicio()
{   
    // DECLARACION VARIABLES
    let tipo;
    let nombre;
    let importe;
    let procedencia;
    let peso;

    // DECLARACION CONTADORES
    let contadorLimpieza;
    let contadorComestible;
    let contadorOtros;
    let contadorProductos;
    let contadorElaborados;

    // DECLARACION ACUMULADORES
    let acumuladorPesoLimpieza;
    let acumuladorPesoComestible;
    let acumuladorPesoOtros;

    // DECLARACION VARIABLES PUNTO "A"
    let comestibleMayorPeso;
    let nombreComestibleMayorPeso;

    // DECLARACION VARIABLES PUNTO "B"
    let importeMayorImporte;
    let nombreImporteMayorImporte;

    // DECLARACION VARIABLES PUNTO "C"
    let importeMenorImporteElaborados;
    let nombreMenorImporteElaborados;

    // DECLARACION VARIABLES PUNTO "E"
    let porcentajeElaborados;

    // DECLARACION VARIABLES DE MENSAJE
    let mensajePromedioOtros; 
    let mensajePromedioComestible; 
    let mensajePromedioLimpieza;
    let mensajeTipoMasIngresado;

    // DECLARACION VARIABLES PROMEDIO
    let promedioPesoLimpieza;
    let promedioPesoComestible;
    let promedioPesoOtros;

    // DECLARACION VARIABLE DE REPETICION
    let seguir;

    // INICIALIZACION CONTADORES
    contadorLimpieza=0;
    contadorComestible=0;
    contadorOtros=0;
    contadorProductos=0;
    contadorElaborados=0;

    // INICIALIZACION ACUMULADORES
    acumuladorPesoLimpieza=0;
    acumuladorPesoComestible=0;
    acumuladorPesoOtros=0;

    // MENSAJES
    mensajePromedioOtros=""; 
    mensajePromedioComestible=""; 
    mensajePromedioLimpieza="";

    do{
        // VALIDACIONES DATOS DE INGRESO
        tipo=prompt("Ingrese el tipo del producto (limpieza, comestible, otros): ");
        tipo=tipo.toLowerCase();
        while(isNaN(tipo)==false || tipo != "limpieza" && tipo != "comestible" && tipo != "otros"){
            tipo=prompt("Error. Reingrese tipo: ");
            tipo=tipo.toLowerCase();
        }

        nombre=prompt("Ingrese el nombre del producto: ");
        nombre=nombre.toLowerCase();
        while(isNaN(nombre)==false){
            nombre=prompt("Error. Reingrese nombre: ");
            nombre=nombre.toLowerCase();
        }

        importe=prompt("Ingrese el importe (hasta $1000): ");
        importe=parseFloat(importe);
        while(isNaN(importe)==true || importe<0 || importe>1000){
            importe=prompt("Error. Reingrese el importe (hasta $1000): ");
            importe=parseFloat(importe);
        }

        procedencia=prompt("Ingrese el procedencia del producto (importado, nacional, elaborado): ");
        procedencia=procedencia.toLowerCase();
        while(isNaN(procedencia)==false || procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado"){
            procedencia=prompt("Error. Reingrese procedencia: ");
            procedencia=procedencia.toLowerCase();
        } 

        peso=prompt("Ingrese el peso (hasta 30kg): ");
        peso=parseFloat(peso);
        while(isNaN(peso)==true || peso<0 || peso>30){
            peso=prompt("Error. Reingrese el peso (hasta 30kg): ");
            peso=parseFloat(peso);
        }

        // SWITCH TIPO PRODUCTOS
        switch (tipo) {
            case "limpieza":    // ACUMULADOR PESO LIMPIEZA, CONTADOR LIMPIEZA
                acumuladorPesoLimpieza+=peso;
                contadorLimpieza++;
                if(contadorLimpieza!=0){
                    promedioPesoLimpieza=acumuladorPesoLimpieza/contadorLimpieza;
                    mensajePromedioLimpieza=promedioPesoLimpieza+"kg";
                }  
                break;
            case "comestible":  // ACUMULADOR PESO COMESTIBLE, CONTADOR COMESTIBLE
                acumuladorPesoComestible+=peso;
                contadorComestible++;
                if(contadorComestible!=0){
                promedioPesoComestible=acumuladorPesoComestible/contadorComestible;
                mensajePromedioComestible=promedioPesoComestible+"kg";
                }
                break;
            case "otros":    // ACUMULADOR PESO OTROS, CONTADOR OTROS
                acumuladorPesoOtros+=peso;
                contadorOtros++;
                if(contadorOtros!=0){
                    promedioPesoOtros=acumuladorPesoOtros/contadorOtros;
                    mensajePromedioOtros=promedioPesoOtros+"kg";
                    }
                break;
        }
        // CONTADOR GENERAL, GUARDAR MAYOR IMPORTE
        contadorProductos++;  
        if(contadorProductos==1 || importe>importeMayorImporte){
            importeMayorImporte=importe;
            nombreImporteMayorImporte=nombre;
        }

        // GUARDAR PRODUCTO COMESTIBLE
        if(contadorComestible>0 || comestibleMayorPeso<peso){
            comestibleMayorPeso=peso;
            nombreComestibleMayorPeso=nombre;
        }
        else{
            mensajeComestibleMayorPeso="No se ingresaron comestibles";
        }

        // CONTADOR ELABORADO
        if (procedencia=="elaborado"){
            contadorElaborados++;
            if(contadorElaborados!=0 || importe<importeMenorImporteElaborados){
                importeMenorImporteElaborados=importe;
                nombreMenorImporteElaborados=nombre;
            }
        }

        seguir=prompt("¿Desea continuar cargando productos? s/n"); // MODIFICACION VARIABLE DE ITERACION
        seguir=seguir.toLowerCase();
    }
    while(seguir=='s'); 

    // CONFIRMAR ELABORADO
    if(contadorElaborados!=0){
        porcentajeElaborados=contadorElaborados/contadorProductos*100;
    }
    else{
        porcentajeElaborados="No se ingesaron productos elaborados";
        nombreMenorImporteElaborados="No se ingresaron productos elaborados";
    }

    // CONFIRMAR COMESTIBLE
    if(contadorComestible==0){
        nombreComestibleMayorPeso="No se ingresaron productos de tipo comestible";
    }

    // PRODUCTO MAS INGRESADO
    if(contadorComestible>contadorLimpieza && contadorComestible>contadorOtros){
        mensajeTipoMasIngresado="El tipo más ingresado es Comestible";
    }
    else if(contadorLimpieza>contadorOtros){
        mensajeTipoMasIngresado="El tipo más ingresado es Limpieza";
    }
    else{
        mensajeTipoMasIngresado="El tipo más ingresado es Otros";
    }

    document.write(`a) el NOMBRE del mas pesado de los comestibles: ${nombreComestibleMayorPeso} <br>
    b) el NOMBRE del mas caro de todos los productos: ${nombreImporteMayorImporte}   <br>
    c) el NOMBRE del mas barato de los elaborados: ${nombreMenorImporteElaborados}  <br>
    d) el tipo de mercadería que mas aparece: ${mensajeTipoMasIngresado}    <br>
    e) el porcentaje de productos elaborados por sobre el total: ${porcentajeElaborados} <br>
    f) el promedio de pesos por cada tipo ingresado: <br>
    1- Limpieza: ${mensajePromedioLimpieza} <br>
    2- Comestible: ${mensajePromedioComestible}<br>
    3- Otros: ${mensajePromedioOtros}`);
}