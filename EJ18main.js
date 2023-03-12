let precio = +prompt(
  "Ingrese el precio del producto. Recuerde que debe ser múltiplo de 5"
);
let dinero = +prompt(
  "Ingrese el dinero ingresado. Recuerde que solo acepta un billete"
);

const resto = precio % 5;

let vuelto = dinero - precio;
/* debugger; */
const monedas10 = 30;
const monedas5 = 50;

if (resto !== 0) {
  console.log("El precio ingresado no es correcto");
} else if (
  dinero !== 50 &&
  dinero !== 100 &&
  dinero !== 200 &&
  dinero !== 500 &&
  dinero !== 1000 &&
  dinero !== 2000
) {
  console.log(
    "El dinero ingresado no es correcto. Recuerde que la máquina sólo acepta billetes"
  );
} else if (vuelto > 550) {
  console.log("No hay cambio suficiente");
} else if (vuelto < 0) {
  console.log("El dinero ingresado no es suficiente");
} else if (vuelto === 0) {
  console.log("No hay vuelto que dar.");
} else {
  let index10 = 1;
  let index5 = 1;
  /**
   * Agrego resto10 y resto5 porque si usábamos monedas10 para la condición de control del bucle
   * no se debe tocar, monedas10 debe permanecer fija su valor en la condición, y al hacer monedas10-10 la estábamos
   * reduciendo y la cantidad de iteraciones iba a ser menor. Lo mismo para monedas5
   */
  let resto10 = monedas10;
  let resto5 = monedas5;
  for (index10; index10 <= monedas10; index10++) {
    vuelto = vuelto - 10;
    resto10 = resto10 - 1;
    if (vuelto === 0) {
      console.log("Cantidad de monedas de 10", index10);
      break; // se terminó de dar todo el vuelto. Se termina el primer FOR
    } else if (vuelto === 5 || (vuelto > 0 && resto10 === 0)) {
    /**
     * Agregué esto: (vuelto === 5), porque puede haber la posibilidad de que si bien no hayas terminado
     * las monedas de 10, pero te quede por dar un vuelto 5 centavos. Entonces con esa condición verifico eso.
     * Por lo tanto, validamos que si me queda por dar vuelto de 5 Ó ya no tengo monedas de 10 pero tengo que seguir dando vuelto,
     * comienzo a dar vueltos de 5 centavos.
     */
      for (index5; index5 <= monedas5; index5++) {
        vuelto = vuelto - 5;
        resto5 = resto5 - 1;
        if (vuelto === 0) {
          console.log("Cantidad de monedas de 5", index5);
          console.log("Cantidad de monedas de 10", index10);
          break; // se terminó de dar vuelto. Se termina el segundo FOR
        }
      }
      break; // una ver que terminó dar el vuelto y se terminó el segundo for, cierro el primero para que no siga haciendo bucle.
    } else {
      console.log("Vuelto", vuelto);
    }
  }
}
