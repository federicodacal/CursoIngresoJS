function mostrar()
{
    let precio;
    let porcentaje;
    let descuento;
    let precioFinal;

    precio=prompt("Ingrese el precio:");
    precio=parseFloat(precio);
    porcentaje=prompt("Ingrese el procentaje de descuento");
    porcentaje=parseFloat(porcentaje);

    descuento=precio*(porcentaje/100);
    precioFinal=precio-descuento;

    document.getElementById('elPrecioFinal').value="$"+precioFinal;
}
