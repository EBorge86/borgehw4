const Number1 = prompt("Enter a number")
const Number2 = prompt("Enter a second number")
const operation = prompt("Enter a mathematical operation")
function calculate(Number1, operation, Number2) {
  let result;
  switch (operation) {
    case "+":
      result = Number1 + Number2;
      break;
    case "-":
      result = Number1 - Number2;
      break;
    case "*":
      result = Number1 * Number2;
      break;
    case "/":
      result = Number1 / Number2;
      break;
  }
  return result;
}

console.log(calculate,result)
