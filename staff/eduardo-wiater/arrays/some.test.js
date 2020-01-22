"use strict"
// The some() method tests whether at least one element in 
// the array passes the test implemented by the provided function. 
// It returns a Boolean value. 

console.log("TEST some-----------------------------------");

var x = []
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var test = some(a, function(value) {return value > 100;});

console.assert(test === false , 'should return true');
console.assert( x  === false, 'should be false')