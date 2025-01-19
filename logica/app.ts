
// ANCHOR -> FUNCIONES
// Una fucnion es un conjunto de lineas de codigo que realizan una tarea especifica y pueden retornar algun resultado.
// un parametro o argumento: es algun valor(datos) que le enviamos a la funcion para que pueda realizar alguna tarea.

// function sumar(a:number , b:number) { //parametos o argumentos: cuando hay mas de un argumento se separan por coma.
//   return a + b;
// }

// let total = sumar(10,20);
// console.log("Total = ",total);

export function greet(name: string = 'Mundo') {
  console.log('Hola ' + name);
}

// let firtName = 'Jose';
// greet(firtName);

function addTwoNumbers( num1:number, num2:number = 0): number {
  return num1 + num2;
}

let total: number = addTwoNumbers(10 , 20);
console.log('Total: ', total);