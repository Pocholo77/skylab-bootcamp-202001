'use strict'

function push(array, element) {

    if(!(array instanceof Array)) throw new TypeError(array + " is not an Array ");
    
    array[array.length] = element;
    return array;

}
