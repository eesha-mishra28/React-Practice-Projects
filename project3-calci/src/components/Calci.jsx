import './Calci.css';
import { useState } from 'react';
const Calci = () => {
  const [input, setInput] = useState("");
  const handleButton = (btn) => {
    if (btn === "AC") {
      setInput("");
    } else if (btn === "DEL") {
      setInput(input.slice(0, -1));
    } else if (btn === "=") {
      setInput(eval(input));
    } else {
      setInput(input + btn);
    }
  };
  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => handleButton("7")}>7</button>
        <button onClick={() => handleButton("8")}>8</button>
        <button onClick={() => handleButton("9")}>9</button>
        <button onClick={() => handleButton("/")}>/</button>
        <button onClick={() => handleButton("4")}>4</button>
        <button onClick={() => handleButton("5")}>5</button>
        <button onClick={() => handleButton("6")}>6</button>
        <button onClick={() => handleButton("*")}>*</button>
        <button onClick={() => handleButton("1")}>1</button>
        <button onClick={() => handleButton("2")}>2</button>
        <button onClick={() => handleButton("3")}>3</button>
        <button onClick={() => handleButton("-")}>-</button>
        <button onClick={() => handleButton("0")}>0</button>
        <button onClick={() => handleButton(".")}>.</button>
        <button onClick={() => handleButton("=")}>=</button>
        <button onClick={() => handleButton("+")}>+</button>
        <button onClick={() => handleButton("AC")}>AC</button>
        <button onClick={() => handleButton("DEL")}>DEL</button>
      </div>
    </div>
  );
}

export default Calci;