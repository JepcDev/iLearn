// ANCHOR -> Arreglos

// Es un conjunto de cosas similares, del mismo tipo de dato.

export let employees: string[]=['Fernando', 'Melisa', 'Eduardo'];
export let salaries: number[] = [1500,2400,3200];

// let flowers: string[] = ['Rosa', 'Girasol', 'Lirio'];

// for (let index = 0; index < flowers.length; index++) {
//   console.log(flowers[index]);
// }

// DEV:TODO -> Task: imprimir los empleados con sus respectivos salarios, "Fernando tiene un salario de 1500"
for (let index = 0; index < employees.length; index++) {
  console.log(employees[index],'tiene un salario de',salaries[index]);
}
