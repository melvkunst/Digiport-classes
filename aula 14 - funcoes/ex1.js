function calc(a, b, op) {
  if (op === "+") { //fazendo questão que o tipo seja string
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "/") {
    return a / b;
  }
}

console.log(calc(5, 6, "+"));
console.log(calc(5, 6, "-"));
console.log(calc(5, 6, "*"));
console.log(calc(5, 6, "/"));
