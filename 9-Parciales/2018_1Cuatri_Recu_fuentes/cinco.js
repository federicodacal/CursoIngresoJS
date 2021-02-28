function mostrar()
{
    let dia;
    let mensaje;
    
    dia=prompt("Ingrese un día: ");
    dia=dia.toLowerCase();
    while(isNaN(dia)==false || dia != "lunes" && dia != "martes" && dia != "miercoles" && dia != "jueves" && dia != "viernes" && dia != "sabado" && dia != "domingo"){
        dia=prompt("Dato ingresado es inválido. Ingrese día: ");
        dia=dia.toLowerCase();
    }

    switch (dia) {
        case "sabado":
        case "domingo":
            mensaje=`Es ${dia}. Buen fin de semana!`;    
            break;
        default:
            mensaje=`Es ${dia}. A trabajar!`;
            break;
    }
    alert(mensaje);
}

