"use strict"

function shift(array) {
    if (!array.length) {
        return;
    }
    var toRemove = array[0];
    var oldArray = array;
    var loop = 0;
    for (var x = 1; x < oldArray.length; x++) {
        array[loop] = oldArray[x]
        loop++;
    }
    array.length = array.length - 1;
    return toRemove;
}
