// console.log('Hola mundo');

// DEV:TODO -> 9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un
// nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra

// Ejemplo:
// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
// let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
// console.log( herosWithLetterS ); // She Hulk, Spiderman

// Tip: Para determinar si un string empieza con una letra
// let hero = ‘Spiderman';
// hero.startsWith(’S’); // true
// Si se tiene un arreglo vació, por ejemplo:
// let newHeroes = [];
// Se puede insertar en el arreglo así:
// newHeroes.push('Hulk');

function heroesThatStartsWith(arrelgoHeroes:string[], letter:string ) {

  let heroes:string[] = [];
  for (let index = 0; index < arrelgoHeroes.length; index++) {

    console.log("Cantidad", arrelgoHeroes[index]);
    if (arrelgoHeroes[index].startsWith(letter)) {
      heroes.push(arrelgoHeroes[index]);
    }
  }

  return heroes;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS:string[] = heroesThatStartsWith( heroes, "S" );
console.log( herosWithLetterS );

// let pal = "ABCDFG";
// console.log(pal.length);