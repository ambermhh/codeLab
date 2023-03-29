const Log = require("./Log")
class Calculator {
  constructor() {
    this.id = Date.now();
    this.logger = new Log();
  }
  add(num1, num2) {
    const value = num1 + num2;
    this.logger.log(value);
    return value;
  }

  sub(num1, num2) {
    const value = num1 - num2;
    this.logger.log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.logger.log(value);
    return value;
  }

  division(num1, num2) {
    const value = num1 / num2;
    this.logger.log(value);
    return value;
  }
}
module.exports = Calculator;
