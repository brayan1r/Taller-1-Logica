const prompt = require('prompt-sync')();
let nombre= prompt("ingresa tu nombre:");
let nacimiento= Number(prompt("ingresa tu año de nacimiento:"));

let edad = 2025-nacimiento;

console.log("Hola " + nombre + ", tienes " + edad + " años.");