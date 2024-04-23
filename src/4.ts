function printMyCar(car: {
  make: String;
  model: String;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} ${car.year} ${car.chargeVoltage} `;

  if (car.chargeVoltage !== undefined) {
    str += `${car.chargeVoltage}v`;
  }

  console.log(str);
}

printMyCar({make:"Toyota", model:"Lamborghini", year:2024, chargeVoltage:200});
printMyCar({make:"Ford", model:"t-model", year:234})
