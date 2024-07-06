//  import the crypto module
const { log } = require("console");
const crypto = require("crypto");
//  get a commands using process.argv
// function to handle the command line argument and perform calculation
function calculator() {
  // retrieve command line arguments
  const args = process.argv.slice(2); //removing first two elements(node and script filename)
  // validation
  if (args.length < 1) {
    console.log(
      "argument: node calculator.js <operation> <number1>,<number2>.."
    );
    return;
  }
  // extract operation and arguments
  const operation = args[0];
  const numbers = args.slice(1).map(Number);
  // perform operation based on the first operation
  switch (operation) {
    case "add":
      if (numbers.length < 2) {
        console.log("addition requires al least two numbers");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc + val));
      break;
    case "sub":
      if (numbers.length < 2) {
        console.log("subtraction requires at least two numbers");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc - val));
      break;
    case "mult":
      if (numbers.length < 2) {
        console.log("multiplication  requires al least two numbers");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc * val));
      break;
    case "divide":
      if (numbers.length < 2) {
        console.log("division requires al least two numbers");
        return;
      }
      console.log(numbers.reduce((acc, val) => acc / val));
      break;
    case "sin":
      if (numbers.length !== 1) {
        console.log("sine operation requires exactly one number.");
        return;
      }
      console.log(Math.sin(numbers[0]));
      break;
    case "cos":
      if (numbers.length !== 1) {
        console.log("cosine operation requires exactly one number.");
        return;
      }
      console.log(Math.sin(numbers[0]));
      break;
    case "tan":
      if (numbers.length !== 1) {
        console.log("tangent operation requires exactly one number.");
        return;
      }
      console.log(Math.tan(numbers[0]));
      break;
    case "random":
      const length = numbers[0];
      if (!length) {
        console.log("provide length for random number generation");
        return;
      }
      const randomNumber = crypto
        .randomBytes(Math.ceil(length / 2))
        .toString("hex")
        .slice(0, length);
      console.log(randomNumber);
      break;

    default:
  console.log("Invalid operation");
  break;
    }
}

calculator();
