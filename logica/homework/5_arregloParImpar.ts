// console.log('Hola mundo');

// DEV:TODO -> 5- Dado el siguiente arreglo:
// DEV:COMMENT -> let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Haga una impresión en consola así:

// 1 es un número impar
// 2 es un número par
// 3 es un número impar
// …
// 6 es un número par

// Debe de utilizar un ciclo FOR para generar dicha impresión.
// Tip: usar el operador % para obtener el resultado, ejemplo:
// 2%2; // 0
// 3%2; // 1
// 4%2; // 0
// 5%2; // 1


// export let numbers:number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// numbers.sort();
// console.log(numbers);
// export let mayor:number = 0;
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   if (element % 2 ==0) {
//     console.log(`${element} es número par`);
//   }else{
//     console.log(`${element} es número impar`);
//   }
// }
// console.log("El numero mayor del arreglo es " + mayor);

// Otra forma
let numbers:number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for (let index = 0; index < numbers.length; index++) {

  const number = numbers[index];

  if ((number % 2)===0) {
    console.log(number+ 'es pas');
  }else{
    console.log(number + 'es impar');
  }

}