'use strict'


console.log("TEST filter------------------------------------");

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var test = filter(a, function(value) {return value > 100;});

console.assert(test[0] === 6, 'should value on index 0 be 6, but instead it was ' + test[0]);
console.assert(test.length === 0, 'should tests length be 0, but instead it was ' + test.length);
console.assert(test.__proto__.constructor.name === 'Array', 'should the rest return an empty array');
