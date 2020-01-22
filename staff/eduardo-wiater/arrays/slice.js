"use strict"

function slice(array, start, end) {
    var cont = [];

    end = end !== undefined ? end : array.length;
    start = start !== undefined ? start : 0;

    if (end < start) end = array.length;

    for (var i = start; i < end; i++) {
        cont[cont.length] = array[i];
    }

    return cont;

}