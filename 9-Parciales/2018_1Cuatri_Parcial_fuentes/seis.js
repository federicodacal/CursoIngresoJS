function mostrar()
{
    let hora;
    let mensaje;

    hora=document.getElementById('laHora').value;
    hora=parseInt(hora);

    if(isNaN(hora)==true || hora < 0 || hora > 24){
        mensaje="No ingresó una hora válida.";
    }
    else if(hora > 0 && hora < 6){
        mensaje="Es de noche."
    }
    else{
        switch (hora) {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                mensaje="Es de mañana.";    
                break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                mensaje="Es de tarde.";
                break;
            default:
                mensaje="A dormir.";
                break;
            }
        }
    document.getElementById('laHora').value=mensaje;
}
