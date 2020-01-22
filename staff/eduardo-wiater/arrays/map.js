"use strict"

function map(array, callback) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    var result = callback(value);
    results[i] = result;
  }
  return results;
}

