"use strict"
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var nombres = ['pepe','hola','vocal','juan','boludo'];

function filter(array, expression) {

    if (!(array instanceof Array)) throw new TypeError(array + "in not an Array");
    if (typeof expression !== 'function') throw new TypeError(condition + " is not a function ")

    var results = [];

    for (var i = 0; i < array.length; i++) {

        var value = expression(array[i])

        if (value) {
            results[results.length] = array[i];
        }

    };

    return results;
};





