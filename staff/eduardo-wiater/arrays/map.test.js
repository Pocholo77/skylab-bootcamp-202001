console.log("Test Map -------------------------------------------------------")
console.log("Devuelve un array con los elementos modificados por el callback.")

var cont = [3, 4, 7, 8];


var test = map(cont,function(x){return x + 6 })



var _error;

try {
    map(undefined,function(){})
} catch (error) {
    _error = error
} finally {
    console.assert( _error.message === "undefine is not an array", " should fail with message undefined is not an array") 
}

// console.log(map(a,function(x){return x + 2 }));
// console.log(map(a,function(x){return x * 2 }));