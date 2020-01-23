/* The forEach() method executes a provided function once for each array element.

         arr.forEach(callback(currentValue [, index [, array]])[, thisArg]  

forEach() calls a provided callback function once for each element in an array in ascending order. 
callback is invoked with three arguments: the value of the element , the index of the element ,the Array object being traversed */ 

"use strict"

function forEach( array , callback ){
    
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');    
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');  

    for(var i= 0 ; i<array.length ; i++){
        callback( array[i] , i , array );
    }
}