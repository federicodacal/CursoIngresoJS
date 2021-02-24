function mostrar()
{
    let numero;
    
    for(;;){
        numero=prompt("Ingrese un número: ");
        numero=parseFloat(numero);
        if(numero==9){
            break;
        }
    }
}