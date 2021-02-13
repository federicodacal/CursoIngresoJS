/*
2- Con IF:
Ingresar el nombre y los datos requeridos para calcular el IMC, e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
*/

//Probado usando html if-01.js
function mostrar()
{

    let peso;
    let estatura;
    let estaturam2;
    let indiceMC;
    let mensaje;
    let respuesta;

    peso=prompt("Ingrese su peso en kg.");
    peso=parseFloat(peso);
    estatura=prompt("Ingrese su estatura en mt.");
    estatura=parseFloat(estatura);

    estaturam2=Math.pow(estatura, 2);
    indiceMC=peso/estaturam2;
    
    if(indiceMC > 40){
        mensaje="Obesidad III";
    }else{
        if(indiceMC > 35){
            mensaje="Obesidad II";
        }else{
            if(indiceMC > 30){
                mensaje="Obesidad I";
            }else{
                if(indiceMC > 25){
                    mensaje="Preobesidad";
                }else{
                    if(indiceMC > 18){
                        mensaje="Peso normal";
                    }else{
                        mensaje="Bajo peso";
                    }
                }
            }
        }
    }
    respuesta=`El tipo de IMC es ${mensaje}.`;
    alert(respuesta);
}

// Federico Dacal
// Division "A"