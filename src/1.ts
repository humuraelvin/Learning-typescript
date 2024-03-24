function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

async function addNumbers(a: number, b: number) {
  await timeout(500);
  return a + b;
}

(async () => {
    console.log(await addNumbers(3, 4));
  })();
  