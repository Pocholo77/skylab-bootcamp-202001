"use strict"
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filter(array, expression) {

    if(!(array instanceof Array)) throw new MimeTypeArray(array +"in not an Array");
    if( typeof condition !== 'function' ) throw new TypeError() 

    var results = [];

    for (var i = 0; i < array.length; i++) {

        if(!(array instanceof Array)) throw new MimeTypeArray(array +"in not an Array");
        if( typeof condition !== 'function' ) throw new TypeError(

        var value = expression(array[i])

        if( value ){  
            results[results.length] = array[i]
        }

    };
    
    return results;
};





