const prompt = require('prompt-sync')();

let numeroinicial = Number(prompt("Ingresa un número inicial:"));
let numerofinal = Number(prompt("Ingresa un número final:"));

for (let i = numeroinicial; i <= numerofinal; i++){
    console.log(i);
}