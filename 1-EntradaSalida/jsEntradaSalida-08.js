/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
	/*
	var resultado;
	resultado=numero%2;
	alert(resultado);
	*/

	let dividendo;
	let divisor;
	let resto;

	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	resto=dividendo%divisor;
	alert("El resto es " + resto + ".");
}

/*
Prioridad de Operadores: 

let x = 40;
let y = 20;
ley z = 10;
let resultado;

resultado = x + y * z;	
alert(resultado);	-> 240

resultado = x * y / z;	
alert(resultado);	-> 80

resultado =((x + y) / y) * z;	
alert(resultado);	-> 30
*/

/*
Nombre: Federico Dacal
Ejericio 8 
*/


/********************
Ejercicio 10 bis (3)
********************/

/*
function SacarResto()
{
    let numeroUno;
	let numeroDos;
	let suma;
    let promedio;
    let modulo;
    let mensaje;

	numeroUno=document.getElementById('txtIdNumeroDividendo').value;
	numeroDos=document.getElementById('txtIdNumeroDivisor').value;
	numeroUno=parseInt(numeroUno);
    console.log(numeroUno);
	numeroDos=parseInt(numeroDos);
    console.log(numeroDos);

    suma=numeroUno+numeroDos;
    console.log(suma);
    promedio=suma/2;
    console.log(promedio);
    modulo=numeroUno%numeroDos;
    console.log(modulo);

    mensaje=`El resultado de la suma es ${suma}, el promedio es ${promedio} y el modulo es ${modulo}`;
    console.log(mensaje);
}
*/