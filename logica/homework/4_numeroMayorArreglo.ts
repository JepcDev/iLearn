// console.log('Hola mundo');

// DEV:TODO -> 4- Dado el siguiente arreglo:
// DEV:COMMENT -> let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

// export let numbers:number[] = [1, 6,3,2,1, 8, 4, 2, 7, 1,4,4, 3, 5 ];

// export let mayor:number = 0;
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   if (element>mayor) {
//     mayor = element;
//   }
// }
// console.log("El numero mayor del arreglo es " + mayor);


// otra forma
let numbers= [1, 6,3,2,1, 8, 4, 2, 7, 1,4,4, 3, 5 ];
let maxNumber = numbers[0];
// let maxNumber = -9999999;

for (let index = 0; index < numbers.length; index++) {

  if (numbers[index]>= maxNumber) {
    maxNumber = numbers[index];
  }

}

console.log('El numero mayor es:', maxNumber);