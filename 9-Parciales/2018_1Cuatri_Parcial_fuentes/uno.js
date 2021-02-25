function mostrar()
{
    let ancho;
    let largo;
    let perimetro;
    let mensaje;

    ancho=prompt("Ingrese ancho del rectángulo en metros: ");
    ancho=parseInt(ancho);
    largo=prompt("Ingrese largo del rectángulo en metros: ");
    largo=parseInt(largo);
    perimetro=ancho*2+largo*2;
    mensaje=`El perímetro del rectángulo es: ${perimetro} metros.`;
    alert(mensaje);
}
