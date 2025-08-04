// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { sumar } from './Calculadora';

jest.mock('./Calculadora', () => ({
  sumar: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    sumar.mockClear();
  });

  test('muestra el título de la calculadora', () => {
    render(<App />);
    expect(screen.getByText(/calculadora de suma/i)).toBeInTheDocument();
  });

  test('suma dos números y muestra el resultado', () => {
    sumar.mockReturnValue(8); // Simulamos que sumar(3, 5) devuelve 8

    render(<App />);

    const input1 = screen.getByPlaceholderText(/primer número/i);
    const input2 = screen.getByPlaceholderText(/segundo número/i);
    const boton = screen.getByText(/sumar/i);

    fireEvent.change(input1, { target: { value: '3' } });
    fireEvent.change(input2, { target: { value: '5' } });
    fireEvent.click(boton);

    expect(sumar).toHaveBeenCalledWith(3, 5);
    expect(screen.getByText(/resultado: 8/i)).toBeInTheDocument();
  });

  test('no muestra resultado si los inputs están vacíos', () => {
    render(<App />);
    const boton = screen.getByText(/sumar/i);
    fireEvent.click(boton);
    expect(screen.queryByText(/resultado:/i)).not.toBeInTheDocument();
  });
});
