import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(0);

  const calculate = () => {
    let res;
    switch (operation) {
      case 'add':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        res = num2 !== 0 ? parseFloat(num1) / parseFloat(num2) : 'Error';
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  const handleAddClick = () => {
    calculate();
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>
      <button onClick={handleAddClick}>Add Them</button>
      <div className="result">
        Result: <strong>{result}</strong>
      </div>
    </div>
  );
}

export default App;