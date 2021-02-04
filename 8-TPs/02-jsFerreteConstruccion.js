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
    let radio;
    let alambre;
    let perimetro;
    // const PI = 3.14;
    const PI = Math.PI;
    const UNIDADES_ALAMBRE = 3;

    radio=document.getElementById('txtIdRadio').value;
    radio=parseFloat(radio);

    perimetro=2*PI*radio;
    alambre=perimetro*UNIDADES_ALAMBRE;
    alert (`La cantidad de alambre necesaria es de ${alambre.toFixed(3)} metros.`);
}

function Materiales () 
{
    let largo;
    let ancho;
    let cemento;
    let cal;
    let area;
    const CEMENTO_CADA_METRO = 2;
    const CAL_CADA_METRO = 3;

    largo=document.getElementById('txtIdLargo').value;
    ancho=document.getElementById('txtIdAncho').value;
    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    area=ancho*largo; 
    // Regla de tres simple -> 1 metro cuadrado         = 2 bolsas cemento y 3 bolsas cal
    //                         area en metros cuadrados = area*2 (bolsas cemento) y area*3 (bolsas de cal)  
    cemento = area*CEMENTO_CADA_METRO;
    cal = area*CAL_CADA_METRO;

    alert(`Para un contrapiso de ${area}m2 es necesario comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`);
}