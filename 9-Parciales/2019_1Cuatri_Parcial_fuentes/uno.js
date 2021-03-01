function mostrar()
{
    let base;
    let lados;
    let perimetro; 

    base=prompt("Ingrese la medida base (en cm.) del triangulo equilátero");
    base=parseFloat(base);
    lados=prompt("Ingrese la medida de uno de los lados (en cm.)");
    lados=parseFloat(lados);

    perimetro=lados*2+base;
    alert(`El perímetro es: ${perimetro}`);
}
