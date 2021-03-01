// Dacal Federico
// Division "A"

/*
Para una institución educativa se necesitan registrar los datos de 15 alumnos. 
Nos solicitan: 
-nombre, carrera, edad, sexo ("f" o "m") 
-modalidad("presencial", "a distancia" o "semi-presencial")
-promedio general. 
Luego nos solicitan los siguientes informes: 
a) La Carrera de la persona con mas promedio general. 
b) Cuantos mayores de edad (más de 17) cursan presencial. 
c) La cantidad de Mujeres que cursan a distancia o semi-presencial. 
d) Cuantas personas adultas(mas de 40 años), tienen mas de 7 de promedio general. 
e) El promedio de edad entre las mujeres que cursan a distancia.
*/

function mostrar()
{
    let nombre;
    let carrera;
    let edad;
    let sexo;
    let modalidad;
    let promedio;

    let promedioMayor;
    let promedioMayorCarrera;

    let contadorMayoresDeEdadPresencial;

    let contadorMujeresDistancia;
    let contadorMujeresSemiPresencial;

    let contadorMayoresCuarentaPromedioMayorSiete;

    let acumuladorEdadMujeresDistancia;
    let promedioEdadMujeresDistancia;
    let mujeresDistanciaySemiPresencial;

    let repeticiones;

    acumuladorEdadMujeresDistancia=0;
    contadorMayoresDeEdadPresencial=0;
    contadorMujeresDistancia=0;
    contadorMujeresSemiPresencial=0;
    contadorMayoresCuarentaPromedioMayorSiete=0;

    for(repeticiones=0;repeticiones<15;repeticiones++){

        alert(`Ingreso de datos #${repeticiones+1}`);
        nombre=prompt("Ingrese nombre del alumno:");
        while(isNaN(nombre)==false){
            nombre=prompt("Error. Ingrese el nombre:");
        }

        carrera=prompt("Ingrese carrera:");
        while(isNaN(carrera)==false){
            carrera=prompt("Error. Ingrese el carrera:");
        }

        edad=prompt("Ingrese edad:");
        edad=parseInt(edad);
        while(isNaN(edad)==true || edad<16 || edad>100){
            edad=prompt("Error. Reingrese edad:");
            edad=parseInt(edad);
        }

        sexo=prompt("Ingrese sexo (f/m):");
        sexo=sexo.toLowerCase();
        while(isNaN(sexo)==false || sexo!='f' && sexo!='m'){
            sexo=prompt("Error. Reingrese sexo:");
            sexo=sexo.toLowerCase();
        }

        modalidad=prompt("Ingrese modalidad (presencial, a distancia, semi-presencial):");
        modalidad=modalidad.toLowerCase();
        while(isNaN(modalidad)==false || modalidad!='presencial' && modalidad!='a distancia' && modalidad!='semi-presencial'){
            modalidad=prompt("Error. Reingrese modalidad:");
            modalidad=modalidad.toLowerCase();
        }

        promedio=prompt("Ingrese promedio:");
        promedio=parseFloat(promedio);
        while(isNaN(promedio)==true || promedio<0 || promedio>10){
            promedio=prompt("Error. Reingrese promedio:");
            promedio=parseFloat(promedio);
        }

        if(repeticiones==0 || promedio>promedioMayor){
            promedioMayor=promedio;
            promedioMayorCarrera=carrera;
        }

        if(edad>17 && modalidad=="presencial"){ 
            contadorMayoresDeEdadPresencial++;
        }
        
        if (edad>40 && promedio>7){
            contadorMayoresCuarentaPromedioMayorSiete++;
        }

        if(sexo=='f'){
            switch (modalidad) {
                case "a distancia":
                    contadorMujeresDistancia++;
                    acumuladorEdadMujeresDistancia+=edad;
                    break;
            
                case "semi-presencial":
                    contadorMujeresSemiPresencial++;
                    break;
            }
        }

        if(contadorMujeresDistancia!=0){
        promedioEdadMujeresDistancia=acumuladorEdadMujeresDistancia/contadorMujeresDistancia;
        }
        else{
            promedioEdadMujeresDistancia="No ingresaron Mujeres en modalidad semi-presencial";
        }

    }
    mujeresDistanciaySemiPresencial=contadorMujeresDistancia+contadorMujeresSemiPresencial;

    document.write(`a) La Carrera de la persona con mas promedio general: ${promedioMayorCarrera} <br>
    b) Cuantos mayores de edad (más de 17) cursan presencial: ${contadorMayoresDeEdadPresencial} <br>
    c) La cantidad de Mujeres que cursan a distancia o semi-presencial: ${mujeresDistanciaySemiPresencial}<br>
    d) Cuantas personas adultas (mas de 40 años), tienen mas de 7 de promedio general: ${contadorMayoresCuarentaPromedioMayorSiete}<br>
    e) El promedio de edad entre las mujeres que cursan a distancia: ${promedioEdadMujeresDistancia}`);
}