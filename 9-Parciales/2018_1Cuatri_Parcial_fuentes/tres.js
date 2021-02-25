function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let descuento;
    let precioFinal;
    let mensaje;

    precio=prompt("Ingrese el precio: ");
    precio=parseInt(precio);
    porcentajeDescuento=prompt("Ingrese el % de descuento: ");
    porcentajeDescuento=parseInt(porcentajeDescuento);
    descuento=precio*(porcentajeDescuento/100);
    precioFinal=precio-descuento;

    mensaje=`El precio final es ${precioFinal}`;
    document.getElementById('elPrecioFinal').value=mensaje;
}
