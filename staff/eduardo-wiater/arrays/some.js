"use strict"

function some(element, array) {

    if (array.length === 0) return false;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}