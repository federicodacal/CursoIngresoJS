/* 
1-
Con IF
pedir a una persona que fue de vaciones, la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
*/

//Probado usando html if-01.js
function mostrar()
{
    let distanciaViaje;
    let tiempoViaje;
    let velocidad;
    let mensaje;
    let respuesta;

    distanciaViaje=prompt("Ingrese distancia viajada en km.");
    distanciaViaje=parseInt(distanciaViaje);
    tiempoViaje=prompt("Ingrese cantidad de horas viajadas.");
    tiempoViaje=parseInt(tiempoViaje);

    velocidad=distanciaViaje/tiempoViaje;
    
    if (velocidad <= 60){
        mensaje="muy lento.";
    }else{
        if(velocidad <= 80){
            mensaje="lento.";
        } else{
            if(velocidad <= 100){
                mensaje="buen ritmo.";
            }else{
                if(velocidad <= 120){
                    mensaje="ahí de la ley.";
                }
                else{
                    mensaje="eso no se hace.";
                }
            }
        }
    }
    respuesta=`Ud. viajó a ${velocidad.toFixed(2)}km/hr, ${mensaje}`;
    alert(respuesta);
}

// Federico Dacal
// Division "A"