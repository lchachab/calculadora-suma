import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(isNaN(suma) ? 'Entrada inválida' : suma);
  };

  return (
    <div className="App">
      <h1>Calculadora de Suma</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Primer número"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Segundo número"
      />
      <button onClick={sumar}>Sumar</button>
      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  );
}

export default App;
