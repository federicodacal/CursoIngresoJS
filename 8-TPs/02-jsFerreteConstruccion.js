/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    const UNIDADES_ALAMBRE = 3;

    largo=document.getElementById('txtIdLargo').value;
    ancho=document.getElementById('txtIdAncho').value;
    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    perimetro=(ancho+largo)*2; 
    alambre=perimetro*UNIDADES_ALAMBRE;
    alert (`La cantidad de alambre necesaria es de ${alambre} metros.`);
}

function Circulo () 
{
	
}
function Materiales () 
{
	
}