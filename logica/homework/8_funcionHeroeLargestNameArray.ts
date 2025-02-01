// console.log('Hola mundo');

// DEV:TODO -> 8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
// nombre que tenga más letras del arreglo, y debe de trabajar así:

// let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// let hero = largestNameOfArray( heroes );
// console.log( hero ); // Profesor Charles Xavier
// Tip:
// let hero = 'Strider';
// hero.length; // 7

// function largestNameOfArray(arrelgoArg:String[]) {

//   let ziseWord:number = 0; let hero:String="";

//   for (let index = 0; index < arrelgoArg.length; index++) {
//     // ziseWord = arrelgoArg[index].length;

//     console.log("Cantidad", arrelgoArg[index].length);
//     if (ziseWord < arrelgoArg[index].length) {
//       hero = arrelgoArg[index];
//       ziseWord = arrelgoArg[index].length;
//     }
//   }

//   return hero;
// }

// export let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// export let hero:String = largestNameOfArray( heroes );
// console.log( hero );

// let pal = "ABCDFG";
// console.log(pal.length);

// DEV:COMMENT -> otra forma

function largestNameOfArray(nameArray:string[]) {
  let largestName = '';

  for (let index = 0; index < nameArray.length; index++) {

    let name = nameArray[index];
    if (name.length > largestName.length) {
      largestName = name;
    }
  }
  return largestName;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero:string = largestNameOfArray( heroes );
console.log( hero );