// console.log('Hola mundo');

// DEV:TODO -> 7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
// max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
// trabajar así:
// let maxValue = max( 5, 2, 6);
// console.log( maxValue ); // 6

// function max(numeroA:number, numeroB:number, numeroC:number) {
//   let numMayor:number = numeroA;
//   if (numMayor<=numeroB){
//     numMayor = numeroB;
//   }
//   if (numMayor<=numeroC) {
//     numMayor = numeroC;
//   }
//   return numMayor;
// }

// export let maxValue:number = max(10,10,11);
// console.log(`El maximo valor es = ${maxValue}`);

// DEV:COMMENT -> Otra forma

function max(a:number, b:number, c:number) {

  if (a>b) {
    return (a>c)? a : c;
  }
  if (b>c) {
    return b;
  }
  return (a>c)? a:c;

}

// let maxValue = max( 5, 2, 6);
// console.log( maxValue ); // 6

// function max2(numeroA:number, numeroB:number, numeroC:number) {
//   let numMayor:number = numeroA;
//   numMayor = (numMayor<=numeroB)? numeroB : numMayor;
//   numMayor = (numMayor<=numeroC)? numeroC : numMayor;
//   return numMayor;
// }
