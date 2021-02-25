function mostrar()
{
    let planetaIngresado;
    let mensaje;

    planetaIngresado=prompt("Ingrese un planeta del Sistema Solar: ");
    planetaIngresado=planetaIngresado.toLowerCase();

    switch (planetaIngresado) {
        case "la tierra":
            mensaje="Acá vivimos.";
            break;
        case "mercurio":
        case "venus":
            mensaje="Acá hace más calor.";
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
                mensaje="Acá hace más frío.";
            break;
        default:
            mensaje="Error. No ingresó un planeta válido.";
            break;
    }
    alert(mensaje);
}
