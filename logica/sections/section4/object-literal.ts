// DEV:COMMENT -> Objetos y clases
// Objeto:  Es la abstraccion de algo que existe en la vida real. representacion abstracta de una cosa que existe en la vida real.
// carro: marca,rudad, puertas,traccion,color. // POO: Es la programacion suponiendo que nuestros objetos lucen de cierta manera pero de forma abstracta.(control remoto tiene->botones, marca,color, ect)(carro:marca,año,color)
// los objetos son Abstracciones de cosas que existen en la vida real.

// objeto carro: abstraccion de un carro que existe en la vida real.
// Los objetos son variables que dentro de si, tienen propiedades, nos permiten agrupar propiedades que tienen una relacion entre si.
// let carro = {
//   color: 'blanco',
//   traccion: '4x4',
//   llantas: 4,
//   puertas: 5,
//   marca: 'Mitsubishi'
// }
// obtencion de los atributos del objeto
// carro.color//blanco
// carro.llantas//4

export let person = {
  name: 'Melisa',
  age: 30,
  isActive: true,
  hobbies: ['soccer', 'baseball'],
  toString(){
    // console.log('Hola Mundo');
    let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
    console.log(objectString);
  }
}

// console.log(person.name,person.hobbies,person.isActive,person.age);
// console.log(person.toString);
// person.toString();

export let car= {
  brand: 'toyota',
  doors: 5,
  whels: 4,
  color: 'black',
  year:2025,
  gearBox: 'manual'
}

export let smartTV = {
  brand: 'sony',
  color: 'black',
  sizeInches: 90,
  year: 2015,
  type: 'Led'
}

export let youtubeVideo = {
  title:'how make videos?',
  author: 'goodVideos',
  comments: ['Buen video', 'Me gustó mucho'],
  length: 3600,
  likes:1500,
  disLikes:100,

}

console.log(car);
console.log(smartTV);
console.log(youtubeVideo);