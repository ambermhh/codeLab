import React from "react";

function Calculator() {
  const [firstNum, setFirstNum] = React.useState("");
  const [secondNum, setSecondNum] = React.useState("");
  const [result, setResult] = React.useState("")
  const [operation, setOperation] = React.useState('');
 


  const handleCalculate = () => {
    let first = parseFloat(firstNum)
    let second = parseFloat(secondNum)
    let endResult;
  
    switch (operation) {
      case "+":
        endResult = first + second
        break;
      case "-":
        endResult = first - second
        break;
      case "*":
        endResult = first * second
        break;
      case "÷":
        endResult = first / second
        break;
      default:
        break;
    }
    setResult(endResult)
  };

  return (
    <div className="componentBox">
      <h2>Calculator</h2>
      <div class="calculator-grid">
        <div class="output previous-operand current-operand">{handleInput}</div>
        <button class="span-two">AC{handleClear}</button>
        <button>DEL</button>
        <button value={"/"} onClick={handleCalculate}>
          ÷
        </button>
        <button value={"1"} onClick={handleCalculate}>
          1
        </button>
        <button value={"2"} onClick={handleCalculate}>
          2
        </button>
        <button value={"3"} onClick={handleCalculate}>
          3
        </button>
        <button value={"*"} onClick={handleCalculate}>
          *
        </button>
        <button value={"4"} onClick={handleCalculate}>
          4
        </button>
        <button value={"5"} onClick={handleCalculate}>
          5
        </button>
        <button value={"6"} onClick={handleCalculate}>
          6
        </button>
        <button value={"+"} onClick={handleCalculate}>
          +
        </button>
        <button value={"7"} onClick={handleCalculate}>
          7
        </button>
        <button value={"8"} onClick={handleCalculate}>
          8
        </button>
        <button value={"9"} onClick={handleCalculate}>
          9
        </button>
        <button value={"-"} onClick={handleCalculate}>
          -
        </button>
        <button value={"."} onClick={handleCalculate}>
          .
        </button>
        <button value={"0"} onClick={handleCalculate}>
          0
        </button>
        <button class="span-two">=</button>
      </div>
    </div>
  );
}

export default Calculator;
