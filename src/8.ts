function flipCoin(): "Heads" | "tails" {
  if (Math.random() > 0.5) {
    return "Heads";
  }
  return "tails";
}

const output = flipCoin();

function maybeGetUserInfo1():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() == "Heads") {
    return [
      "success",
      { name: "HUMURA ELVIN", email: "elvinhumura@gmail.com" },
    ];
  } else {
    return ["error", new Error("Some error has occuredin fliping the coing it has unfortunately went to coin")];
  }
}

const outCome = maybeGetUserInfo1();

const [var1, var2] = outCome;

if (var2 instanceof Error) {
    var2
}else{
    var2
}
