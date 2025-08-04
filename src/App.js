import React, { useState } from 'react';
import './App.css';
import { sumar } from './Calculadora';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumarNumerosIngresados = () => {
    if (num1 === '' || num2 === '') {
      setResultado(null);
      return;
    }
    const suma = sumar(parseFloat(num1), parseFloat(num2));
    setResultado(suma);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white text-center">
                <h1 className="h3 mb-0">
                  <i className="fas fa-calculator me-2"></i>
                  Calculadora de Suma
                </h1>
              </div>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label htmlFor="num1" className="form-label fw-bold">
                    Primer número
                  </label>
                  <input
                    id="num1"
                    type="number"
                    className="form-control form-control-lg"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Ingresa el primer número"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="num2" className="form-label fw-bold">
                    Segundo número
                  </label>
                  <input
                    id="num2"
                    type="number"
                    className="form-control form-control-lg"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Ingresa el segundo número"
                  />
                </div>
                <div className="d-grid">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={sumarNumerosIngresados}
                  >
                    <i className="fas fa-plus me-2"></i>
                    Sumar
                  </button>
                </div>
                {resultado !== null && (
                  <div className="mt-4">
                    <div className="alert alert-success text-center">
                      <h4 className="alert-heading mb-2">
                        <i className="fas fa-check-circle me-2"></i>
                        Resultado
                      </h4>
                      <h2 className="mb-0 fw-bold text-primary">{resultado}</h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
