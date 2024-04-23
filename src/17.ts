interface twoNumberCalculation {
  (a: number, b: number): number;
}

type twoNumberCalc = (a: number, b: number) => number;
const add:twoNumberCalculation=(a,b) => a+b;
const subtraction:twoNumberCalc=(a,b) => a+b;

console.log(add(3, 4));
