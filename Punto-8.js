const prompt = require('prompt-sync')();

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];

let nuevoNombre = prompt("Ingresa un nombre:");
nombres.push(nuevoNombre);

let nuevaposicion = prompt("Ingresa otro nombre para reemplazar la tercera posición:");
nombres[nuevaposicion] = nuevaposicion;

for  (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
