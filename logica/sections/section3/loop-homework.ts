export let base = 10;
export let limit = 50;

// ANCHOR -> FOR
// for (let index = 1; index <= limit; index++) {
//   let response = base*index;
//   console.log(base,' x ',index," = ",base * index);
// }

// ANCHOR -> WHILE
// let i = 1;
// while (i <= limit) {
//   console.log(base,' x ',i," = ",base * i);
//   i++;
// }

// ANCHOR -> DO WHILE
export let i = 1;
do {
  console.log(base,' x ',i," = ",base * i);
  i++;
} while (i <= limit);