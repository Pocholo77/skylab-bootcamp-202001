"use strict"

var a = [1, 2, 3, 5, 8]

function reverse(arg) {
    var cont = []

    for (var i = arg.length-1; i >= 0; i--) {
        var value = arg[i];
        cont[cont.length] = value
    }
    return cont
}

reverse( a )





