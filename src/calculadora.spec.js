import calcularSumaCadena from "./calculadora.js";
describe("Sumar digitos", () => {
  it("Si es vacia la cadena debe retornar 0", () => {
    expect(calcularSumaCadena("")).toEqual(0);
  });
  it("Si la cadena tiene un solo numero, convertirlo a entero y retonar dicho numero", () => {
    expect(calcularSumaCadena("5")).toEqual(5);
  });
});
