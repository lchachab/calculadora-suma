import { sumar } from './Calculadora';

test('suma 2 + 3 es igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('suma -1 + 1 es igual a 0', () => {
  expect(sumar(-1, 1)).toBe(0);
});

test('suma 0.1 + 0.2 es aproximadamente 0.3', () => {
  expect(sumar(0.1, 0.2)).toBeCloseTo(0.3);
});
