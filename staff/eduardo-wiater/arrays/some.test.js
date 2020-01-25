"use strict"
// The some() method tests whether at least one element in 
// the array passes the test implemented by the provided function. 
// It returns a Boolean value. 

// describe("some" , function(){             some(element,array)


describe("some", function () {

    it(" should return 1 at array[0] ", function () {
        var array = [1, 2, 3, 4];
        var test = some(array, function (x) { return x === 1 });

        assert(array[0] === 1, " should return 1 but youve got " + array[0]);
    })

    it(" should return boolean ", function () {
        var array = [1, 2, 3, 4];
        var test = some(array, function (x) { return x === 9 });

        assert(test === false, " should return 1 but youve got " + test);
    });

    // --------------------------------------------------------------------------------------------------

    it("should fail if the second parameter is not a function ", function () {
        var _error
        try {
            some([1, 2, 3], {})  // should return error 
        } catch (error) {
            _error = error
        }
        //console.log(_error) // para saber el tipo de error que manejo   
        assert(_error instanceof TypeError, "should be an error , but youve got" + _error);
        assert(_error.message === "[object Object]is not an function", "should show the message: [object Object is not a function")
    });

    it("should fail if the first parameter is not an array ", function () {
        var _error
        try {
            some(1, function () { })
            //some([1], function () { })
        } catch (error) {
            _error = error
        }
        // console.log(_error) // para saber el tipo de error que manejo   
        assert(_error instanceof TypeError, "should be an error , but youve got" + _error);
        assert(_error.message === "1 is not an Array", "should show the message: 1 is not an Array")
    });

    it("should fail if the first parameter is not an array ", function () {
        var _error
        try {
            some(1, function () { })
            //some([1], function () { })
        } catch (error) {
            _error = error
        }
        // console.log(_error) // para saber el tipo de error que manejo   
        assert(_error instanceof TypeError, "should be an error , but youve got" + _error);
        assert(_error.message === "1 is not an Array", "should show the message: 1 is not an Array")
    });

});