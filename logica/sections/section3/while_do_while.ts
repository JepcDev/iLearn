// ciclos o loops : Nos permiten ejecutar las mismas lineas de codigo una y otra vez de forma consecutiva.

// while: Este ciclo es util, cuando no conocemos exactamente la cantidad de veces que necesitamos ejecutar el codigo
// while (condition) {
  // Codgio que se repetira
// }
// for: Es util cuando sabemos la cantidad de veces que necesitamos ejecutar el codigo
// for (let variable = 1; variable <= 10; variable++) {
//   const variable = variable+1;//Codigo que se va a repetir cierta cantidad de veces
// }


// --- WHILE

export let gasTank = 10;

// while (gasTank > 0) {
//   console.log('Gasolina restante LTS', gasTank);
//   gasTank--;
// }
// console.log('Jaja!! se le acabo la gasolina');

// --- DO WHILE
do {
  console.log('Gasolina restante LTS', gasTank);
  gasTank--;
} while (gasTank > 0);
console.log('Jaja!! se le acabo la gasolina');