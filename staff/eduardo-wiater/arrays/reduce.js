"use strict"

function reduce( array , callback ,initialValue ) {
    var finalValue = initialValue || 0

    for (var i = 0; i < array.length; i++) {
        finalValue += callback(finalValue, array[i])  
    }
    return finalValue
}

