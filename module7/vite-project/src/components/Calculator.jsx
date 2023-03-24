import React, { useContext } from "react";

export default function Calculator() {
  const [result, setResult] = React.useState("")
 
const handleClick = (e) =>{
    setResult(result + e.target.value)
}


const calculate = () => {
    let newResult = '';
    let operator = '';
    let num1 = '';
    let num2 = '';
    let numIndex = 0;
    let hasDecimal = false;


    for (let i = 0; i < result.length; i++) {
        const char = result[i];
  
        if (char === '+' || char === '-' || char === '*' || char === '/') {
          operator = char;
          num1 = result.substring(numIndex, i);
          numIndex = i + 1;
          hasDecimal = false;
        } else if (char === '.') {
          hasDecimal = true;
        } else {
          if (!hasDecimal && char === '.') {
            hasDecimal = true;
          }
  
          if (i === result.length - 1) {
            num2 = result.substring(numIndex, i + 1);
          }
        }

        if (operator && num1 && num2) {
            switch (operator) {
              case '+':
                newResult = (parseFloat(num1) + parseFloat(num2)).toString();
                break;
              case '-':
                newResult = (parseFloat(num1) - parseFloat(num2)).toString();
                break;
              case '*':
                newResult = (parseFloat(num1) * parseFloat(num2)).toString();
                break;
              case '/':
                newResult = (parseFloat(num1) / parseFloat(num2)).toString();
                break;
              default:
                newResult = 'Error';
            }
    
            numIndex = i + 1;
            num1 = newResult;
            num2 = '';
            operator = '';
          }
        }
    
        setResult(newResult);
      };
    
      const clear = () => {
        setResult('');
      };
    



      return (
        <div className="calculator componentBox">
          <input type="text" value={result}/>
          <div className="calculator-buttons">
            <button value="1" onClick={handleClick}>1</button>
            <button value="2" onClick={handleClick}>2</button>
            <button value="3" onClick={handleClick}>3</button>
            <button value="+" onClick={handleClick}>+</button>
            <button value="4" onClick={handleClick}>4</button>
            <button value="5" onClick={handleClick}>5</button>
            <button value="6" onClick={handleClick}>6</button>
            <button value="-" onClick={handleClick}>-</button>
            <button value="7" onClick={handleClick}>7</button>
            <button value="8" onClick={handleClick}>8</button>
            <button value="9" onClick={handleClick}>9</button>
            <button value="*" onClick={handleClick}>*</button>
            <button value="0" onClick={handleClick}>0</button>
            <button value="." onClick={handleClick}>.</button>
            <button value="/" onClick={handleClick}>/</button>
            <button value="=" onClick={calculate}>=</button>
            <button className="span-two" value="clear" onClick={clear}>Clear</button>
            
          </div>
        </div>
      );
    }