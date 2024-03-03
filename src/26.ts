interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: unknown;

if (
  maybeCar &&
  typeof maybeCar === "object" &&
  "make" in maybeCar &&
  typeof maybeCar["make"] === "string" &&
  "model" in maybeCar &&
  typeof maybeCar["model"] === "string" &&
  "year" in maybeCar &&
  typeof maybeCar["year"] === "number"
) {
    let maybeCar : object
}
