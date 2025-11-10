const prompt = require('prompt-sync')();

let nombre= prompt("ingresa tu nombre:");
let repetir= Number(prompt("Repetir:"));

for (let i=0; i <repetir; i++) {
    console.log("Hola " + nombre);
}