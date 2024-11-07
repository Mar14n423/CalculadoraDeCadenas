import calcularSumaCadena from "./calculadora.js";
describe("Sumar digitos", () => {
  it("Si es vacia la cadena debe retornar 0", () => {
    expect(calcularSumaCadena("")).toEqual(0);
  });
  it("Si la cadena tiene un solo numero, convertirlo a entero y retonar dicho numero", () => {
    expect(calcularSumaCadena("5")).toEqual(5);
  });
  it("Si la cadena tiene dos numeros, convertirlos a entero y retonar la suma", () => {
    expect(calcularSumaCadena("5,2")).toEqual(7);
  });
  it("Si la cadena tiene varios numeros, convertirlos a entero y retonar la suma", () => {
    expect(calcularSumaCadena("5,2,3,6")).toEqual(16);
  });
  it("La cadena tambien puede separarse por guion", () => {
    expect(calcularSumaCadena("2,2-3-7")).toEqual(14);
  });
  it("Numeros mayores a 1000 se ignoran", () => {
    expect(calcularSumaCadena("10001,2-3-13")).toEqual(18);
  });
});
