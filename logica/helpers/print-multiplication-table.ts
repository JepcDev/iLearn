export function printMultiplicationTable(base:number, limit:number = 10) {

  if (limit<=0) {
    throw new Error('El limite debe de ser mayor a 0');
  }
  for (let index = 1; index <= limit; index++) {
    console.log(base,' x ',index," = ",base * index);
  }
}