const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector('#btnCalculo');
const result = document.querySelector('#result');
const form = document.querySelector('#formulario');

form.addEventListener('submit', sumarInput);

function sumarInput(event) {
  event.preventDefault();
  const suma = Number(input1.value) + Number(input2.value);
  result.innerText = "Resultado: " + suma;
}