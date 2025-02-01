// console.log('Hola mundo');

// DEV:TODO -> 6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla:
// DEV:COMMENT ->
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25


// for (let index = 1; index <=5; index++) {
//   console.log(`${index} ${index*2} ${index*3} ${index*4} ${index*5}`);
// }

// Otra forma

for (let indexi = 0; indexi <=5; indexi++) {
  let line = '';

  for (let indexj = 0; indexj <= 5; indexj++) {
    line += ' ' + (indexi*indexj);
  }
  console.log(line);
}