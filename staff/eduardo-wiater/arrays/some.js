"use strict"

var array = [1, 2, 4, 6]

function some(array, expression) {
    if (!(expression instanceof Function)) throw new TypeError(expression + "is not an function")
    if (!(array instanceof Array)) throw new TypeError(array + " is not an Array")


    if (array.length === 0) return false;

    for (var i = 0; i < array.length; i++) {
        var value = expression(array[i]);
        if (value === true) {
            return true
        }
    }
    return false
}