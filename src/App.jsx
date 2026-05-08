import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="app">
      <h1>Random Number Generator</h1>
      <button onClick={generateNumber}>Generate Random Number</button>
      <p className="number-display">
        {number !== null ? `Generated Number: ${number}` : 'No number generated yet'}
      </p>
    </div>
  );
}

export default App
