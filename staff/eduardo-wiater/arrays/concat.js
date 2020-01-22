"use strict"

var a = [1, 2, 3, 4]

function concat(array) {
    var args = arguments                            // o pasar la funcion con concat() , crear un array=[]
                                                    // y poner la primera variable en 0
    for (var i = 1; i < args.length; i++) {
        var cont = args[i]
        for (var j = 0; j < cont.length; j++) {
            array[array.length] = cont[j]

        }
    }
    return a
}

concat(a, [7, 8, 9], [10, 11])