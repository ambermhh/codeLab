const Calculator = require("../libraries/Calculator");
const myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
const subNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.sub(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.multiply(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
const divNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.division(number1, number2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
module.exports = {
  subNumbers,
  addNumbers,
  divNumbers,
  multiplyNumbers,
};
