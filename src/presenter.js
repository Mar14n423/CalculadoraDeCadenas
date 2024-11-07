import calcularSumaCadena from "./calculadora.js";

const cadena = document.querySelector("#cadena-sumar");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cadenaValor = cadena.value; 
  div.innerHTML = "<p>" + calcularSumaCadena(cadenaValor) + "</p>"; 
});