export let limite: number = 10;

for (let index = 0; index <= limite; index++) {
  if (index === 5) {
    continue; //salta el index=5 iteracion 5
  }
  console.log("index : ", index);
  if (index === 5) {
    break; //El ciclo termina en la iteracion 5
  }
}
console.log('Fin del programa');