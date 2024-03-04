const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
function returnInterval(): Date & { end: Date } {
  let start = new Date();
  let end = new Date(start.valueOf()+ONE_WEEK)

  return {...start, end}
}

console.log(returnInterval());


