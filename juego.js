
const evento = document.getElementById('ingresoN');
const texto = document.getElementById('texto'),
 ingreso = document.getElementById('numero');
 



function jugar(){
     let numero_int = ingreso.value,numero = parseInt(numero_int)


      switch (numero) {
          case 1:
                texto.innerHTML="¿Cuál es el aspecto sobre ti que más te gusta?"
                ingreso.value=""
              break;

              case 2:
                texto.innerHTML="¿Cuáles son tus pasatiempos? "
                ingreso.value=""
              break;

              case 3:
                texto.innerHTML=" ¿qué tipo de música  te gusta? "
                ingreso.value=""
              break
              case 4:
                texto.innerHTML="¿qué animales te gustan?"
                ingreso.value=""
              break;

              case 5:
                texto.innerHTML="¿Cuál es el trabajo de tus sueños?"
                ingreso.value=""
              break; 
             
              case 6:
                texto.innerHTML="¿Cuáles son tus metas a lograr?"
                ingreso.value=""
              break;
              case 7:
                texto.innerHTML="¿cuáles son tus series favoritas?"
                ingreso.value=""
              break;

              case 8:
                texto.innerHTML="¿Cuál es tu mayor manía? "
                ingreso.value=""
              break;

              case 9:
                texto.innerHTML="¿Qué cosa dirías que te caracteriza o sería muy tuya?"
                ingreso.value=""
              break;

              case 10:
                texto.innerHTML="¿En qué te gastarías primero el dinero si ganaras la lotería?"
                ingreso.value=""
              break;

              case 11:
                texto.innerHTML="¿Qué es lo que más te molesta de una persona?"
                ingreso.value=""
              break;

              case 12:
                texto.innerHTML="¿Te consideras una persona competitiva?"
                ingreso.value=""
              break;

              case 13:
                texto.innerHTML="¿Cuál país te gustaría conocer?"
                ingreso.value=""
              break;

              case 14:
                texto.innerHTML="¿Qué canciones te sabes de memoria?"
                ingreso.value=""
              break;

              case 15:
                texto.innerHTML="¿Qué actividades o detalles pueden mejorar tu día?"
                ingreso.value=""
              break;

              case 16:
                texto.innerHTML="¿Qué género de películas odias?"
                ingreso.value=""
              break;

              case 17:
                texto.innerHTML="¿Si pudieras ponerle un título a tu vida…? ¿Cuál sería?"
                ingreso.value=""
              break;

              case 18:
                texto.innerHTML="¿Cuál crees que es el mejor día del año?"
                ingreso.value=""
              break;

              case 19:
                texto.innerHTML="¿Qué te hace sentir verdaderamente vivo?"
                ingreso.value=""
              break;

              case 20:
                texto.innerHTML="¿Cuál es el mejor y el peor consejo que te han dado?"
                ingreso.value=""
              break;
      
          default:
              break;
      }
}

evento.addEventListener('click',jugar)