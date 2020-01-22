"use strict"

var array = [2, 3, 5, 7, 8];

var buscado = some(9, array);
console.log(buscado);
console.log('should return false');

var buscado2 = some(3, array);
console.log(buscado2);
console.log('should return true');

var buscado3 = some(a, array);
console.log(buscado2);
console.log('should return true');