export let weekDay: number = 1; //1 = Lunes, 2 = Martes, 3 = Miercoles....

if (weekDay <= 0) {
  throw new Error("Día de la semana no permitido");
}

switch (weekDay) {
  case 1:
    console.log("Es Lunes");
    break;

  case 2:
    console.log("Es Martes");
    break;

  case 3:
    console.log("Es Miercoles");
    break;

  default:
    console.log("No es un día valido");
    break;

}