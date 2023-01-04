import React, { useState } from 'react'
import './calculator.css';
const Calculator = () => {
  let [result, setResult] = useState("");

  const handleClick = (e) => {
    if(result.length >=16){
      setResult("!So Much Big Input");
      return;
    }
    if (result.charAt(0) === '0') {
      result = result.slice(1, result.length)
    }
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }
  const backSpace = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const calculate = () => {
    try {
      result=eval(result).toString()
      if(result.includes('.')){
        result=+ eval(result);
        result=result.toFixed(4).toString();
        setResult(result);
      }else{
        setResult(eval(result).toString());
      }
      
    } catch (err) {
      setResult("Error");
    }

  }
  return (
    <div className='container'>
      <h3 style={{ fontSize: "25px", color: "chocolate", borderBottom: "2px solid whitesmoke" }}>Calculator</h3>
      <form action="">
        <input type="text" value={result} />
      </form>

      <div className='keypad'>
        <button onClick={clear} className="clear color">Clear</button>
        <button onClick={backSpace} className="backspace color">C</button>
        <button name="/" className='color' onClick={handleClick}>/</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" className='color' onClick={handleClick}>*</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" className='color' onClick={handleClick}>-</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" className='color' onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." className='color' onClick={handleClick}>.</button>
        <button onClick={calculate} className="equal color">=</button>

      </div>

    </div>
  )
}

export default Calculator