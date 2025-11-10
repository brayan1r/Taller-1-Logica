const prompt = require('prompt-sync')();

let nombre = prompt("ingresa tu nombre:");

for (let i = 0 ; i < 11; i++) {
    console.log  (`Hola ${nombre}`);
};