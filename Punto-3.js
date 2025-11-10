const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Ingresa el primer número:"));

if (numero1 % 5 === 0) {
    console.log("El número " + numero1 + " es múltiplo de 5.");
} else {
    console.log("El número " + numero1 + " no es múltiplo de 5.");

}