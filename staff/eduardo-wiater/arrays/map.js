"use strict"

function map(array, callback) {
  if( ! (array instanceof Array) ) throw new Error( array + " is not an array");
  
  var results = [];
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    var result = callback(value, i, array);
    results[i] = result;
  }
  return results;
}

