function printFormattedJSON(obj: string[]) {
  console.log(JSON.stringify(obj, null, ""));
}

const x = printFormattedJSON(["hello", "word"]);

function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}

function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];

invokeInFiveSeconds(() => values.push(4));
