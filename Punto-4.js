const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Ingresa el  numero:"));

if (numero1 % 5  === 0 && numero1 % 3 === 0) {
    console.log("El número " + numero1 + " BingBong");
} else if (numero1 % 3 === 0) {
    console.log("El número " + numero1 + " Bing");
} else if (numero1 % 5 === 0) {
    console.log("El número " + numero1 + " Bong");
} else {
    console.log("El número " + numero1 + " no es múltiplo de 3 ni de 5.");
}