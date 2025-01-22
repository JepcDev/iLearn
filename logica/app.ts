
// DEV:COMMENT -> Arreglos de objetos
//

interface Person {
  name: String,
  age:number,
  isActive:boolean
}

let fernando: Person = {
  name: 'Fernando',
  age: 36,
  isActive: false
}

let melisa: Person = {
  name: 'Melisa',
  age: 30,
  isActive: false
}

let juan: Person = {
  name: 'Juan',
  age: 42,
  isActive: false
}

let people: Person[] = [fernando,melisa,juan];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person.name +' '+ person.age);
}

// console.log(people)