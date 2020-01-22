"use strict"

var numbers = [1, 2, 3, 4, 5];

function indexOf( array, value , from) {

    // from = from !== undefined ? 0 : a


    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
        
    }
    return -1
}

indexOf(numbers, 3)