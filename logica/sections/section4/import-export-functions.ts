import {
  addTwoNumbers,
  divideTwoNumbers,
  substractTwoNumbers,
  timesTwoNumbers
} from '../../helpers/math-helpers.ts'

// ANCHOR -> FUNCIONES
// Una fucnion es un conjunto de lineas de codigo que realizan una tarea especifica y pueden retornar algun resultado.
// un parametro o argumento: es algun valor(datos) que le enviamos a la funcion para que pueda realizar alguna tarea.

// function sumar(a:number , b:number) { //parametos o argumentos: cuando hay mas de un argumento se separan por coma.
//   return a + b;
// }

// let total = sumar(10,20);
// console.log("Total = ",total);

// export function greet(name: string = 'Mundo') {
//   console.log('Hola ' + name);
// }

// let firtName = 'Jose';
// greet(firtName);

// function addTwoNumbers( num1:number, num2:number = 0): number {
//   return num1 + num2;
// }

let num1 = 20;
let num2 = 10;

let totalAdd: number = addTwoNumbers(num1 , num2);
let totalSusbtract: number = substractTwoNumbers(num1 , num2);
let totalTimes: number = timesTwoNumbers(num1 , num2);
let totalDivide: number = divideTwoNumbers(num1 , num2);


console.log('TotalAdd:',num1+" + "+num2+" =", totalAdd);
console.log('TotalSubstract: ', totalSusbtract);
console.log('TotalTimes: ', totalTimes);
console.log('TotalDivide: ', totalDivide);