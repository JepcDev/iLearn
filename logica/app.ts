
// DEV:COMMENT -> Clases
// Al igual que los objetos, pueden ser representacions abstractas de cosas que existen la realidad, basicamente son moldes para hacer galletas.
// Metodos: Son funciones relacionadas a la clase, y cualquier variable que sea una instancia de la clase, tendra esas funciones.
// Interface vs class: Las interfaces no sirven para crear intancias, solo se usan para saber como luce un objeto y con la clase se puede alterar el comportamiento de los objetos.
// constructor(): Es la funcion que se va a ejecutar cuando se crea una nueva instancia de una clase;

// class Galleta {
  // constructor(parameters) {
  // }
// }
// new Galleta();
// new Galleta();

// class Galleta {
//   botones:String;
//   sabor:String;
//   fechaCreacion:String;

//   constructor(botones: String, sabor:String) {
//     this.botones = botones;
//     this.sabor=sabor;
//     this.fechaCreacion = 'Hoy';
//   }
// }

class Car {

  brand:String;
  doors:number;
  fuelTank:number;
  isRunning:boolean;
  type:String;

  createdAt:number;

  constructor() {
    this.brand = 'No brand';
    this.doors = 0;
    this.fuelTank = 50;
    this.isRunning = false;
    this.type='No type';

    this.createdAt = 12345121;
  }

  turnoOn() {
    if (this.isRunning) {
      console.log('El carro ya estaba encendido...');
      return;
    }

    if (this.fuelTank <= 0) {
      console.log('El carro no tiene gasolina');
      return;
    }

    this.isRunning= true;
    console.log('El carro está encendido');
  }

  //DEV:TODO -> tasks:
  /**
   * gas:number
   * gas>100, this,fuelTank = 100// no sobre pasar de 100
   * gas tiene positivo
   * si ya esta lleno, no sobre llenar
   * si el fuelTank es 50 y añado 20, el valor del fuelTank = 70
   * si el fuelTank es 90 y añado 50, el valor del fuelTank = 100
   */
  fillTank(gas:number){

    // if (gas >0 ) {
    //   if (this.fuelTank==100) {
    //     console.log(' El tanque de gasolina ya esta lleno');
    //     return;
    //   }
    //   if (gas>100) {
    //     this.fuelTank =100;
    //     return;
    //   }
    //   this.fuelTank = this.fuelTank + gas;
    //   if (this.fuelTank>100) {
    //     this.fuelTank=100;
    //   }
    //   console.log("fuelTank = "+this.fuelTank);
    // }else{
    //   console.log('Cantidad no valida');
    // }

    if (gas <=0) {
      console.log('El gas tiene que se positivo');
      return;
    }
    let newFuelTank = this.fuelTank + gas;
    if (newFuelTank >= 100) {
      // this.fuelTank=100;
      newFuelTank=100;
    }//else{
      // this.fuelTank=newFuelTank;
    // }
    this.fuelTank = newFuelTank;
  }
}

let myMazda = new Car();
myMazda.fillTank(20);
console.log(myMazda);
// myMazda.turnoOn();