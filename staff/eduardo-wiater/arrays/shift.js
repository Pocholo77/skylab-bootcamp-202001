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
var list = [1, 2, 3, 4, 5];
console.log('ORIGINAL ARRAY BEFORE', list)
console.log(shift(list))
console.log('ORIGINAL ARRAY AFTER', list)