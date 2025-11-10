const prompt = require('prompt-sync')();

let numero = Number(prompt("Ingresa un número:"));
let numeros = [];

for (let i = 1; i <= numero; i++) {
  numeros.push(i);
}

numeros.splice(1, 1); 
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
