function mostrar()
{
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let mensaje;
  let sumaPeso;
  let promedioPeso;

  nombreUno=prompt("Ingrese el primer nombre:");
  nombreDos=prompt("Ingrese el segundo nombre:");
  pesoUno=prompt("Ingrese el primer peso (kg.)");
  pesoUno=parseFloat(pesoUno);
  pesoDos=prompt("Ingrese el segundo peso (kg.)");
  pesoDos=parseFloat(pesoDos);

  sumaPeso=pesoUno+pesoDos;
  promedioPeso=sumaPeso/2;

  mensaje=`Uds. se llaman ${nombreUno} y ${nombreDos} y pesan ${pesoUno}kg. y ${pesoDos}kg., que sumandos son ${sumaPeso} y el promedio es ${promedioPeso}`;
  alert(mensaje);
}
