function mostrar()
{
	let edad;
	//Tomar edad
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	// edad=parseInt(document.getElementById('txtIdEdad').value);

	if(edad==15){
		alert("La edad es 15.");
	}
	else {
		alert("La edad no es 15.");
	}
	alert("Despues del bloque If");
}

	/*
	Instrucción If:

	if (condicion) -> true or false
	{
		bloque de codigo a ejecutar
	} 
	Fuera del bloque If

---------------------------------------------------------------------------------------

Operando 	Operador 	Operando = Resultado

		Operador Aritmético
Operando	(+,-,*,/,%)		Operando	= Resultado (number)

		Operador Relacional
Operando	(<,>,<=,>=,!=,==)	Operando	= Resultado (boolean)

Ejemplo: 4 > 2 = true	-> Expresion

Operando:
	-numbers
	-strings
	-boolean (true or false)

		Operador Lógico
Expresion	(AND &&, OR ||, NOT !)	Expresion

Ejemplo:

OR
false || false = false
false || true = true
true || false = true
true || true = true
AND
false && false = false
false && true = false
true && false = false
true && true = true
NOT
false -> true 
true -> false

4>2 	|| 		3>2	= true
true   	    	true	

Numbers y Strings:
==
15 == 15 -> True
"15" == "15" -> True
"15" == 15 -> True
15 == "15" -> True
===    
15 === 15 -> True
"15" === "15" -> True
"15" === 15 -> False
15 === "15" -> False
*/