const returnLast = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l1 = returnLast(["m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w"]);

const l2 = returnLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

const l3 = <number>returnLast([1, 2, 3, 4, 5]);

const makeArray = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const nameArray = makeArray("humura", "elvin");
const numberArray = makeArray(2, 4);
const mixArray = makeArray("humura", 1);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + "" + obj.lastName,
  };
};

const person3 = makeFullName({ firstName: "humura", lastName: "elvin" });
const person2 = makeFullName({
  firstName: "muhumuza",
  lastName: "kefa",
  randomField: "random",
});

console.log(person2.randomField);

interface Tab<T> {
  id: string;
  postion: string;
  data: T;
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;
