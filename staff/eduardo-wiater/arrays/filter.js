"use strict"
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filter(array, callback) {
    var results = [];

    for (var i = 0; i < array.length; i++) {

        var value = callback(array[i])

        if( value ){  
            results[results.length] = array[i]
        }

    };
    
    return results;
};





