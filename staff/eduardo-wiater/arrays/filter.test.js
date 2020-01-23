// 'use strict'


// console.log("TEST filter------------------------------------");

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var test = filter(a, function(value) {return value > 100;});

// console.assert(test[0] === 6, 'should value on index 0 be 6, but instead it was ' + test[0]);
// console.assert(test.length === 0, 'should tests length be 0, but instead it was ' + test.length);
// console.assert(test.__proto__.constructor.name === 'Array', 'should the rest return an empty array');


describe('filter', function () {

    it('should return bigger than 5', function (){
        var array = [1,2,3,4,5,6,7,8,9];
        var results = filter(array, function (value) {
            return value > 5;
        });

        assert(results instanceof Array, 'should results be an Array, but got ' + results.constructor.name)
        assert(results.length === 4, 'should results.length be 5 but got ', + results.length)
        for (var i = 0; i < results.length; i++) {
            assert(results[i] > 5, 'should ' + results[i] + ' be greater than 5 but got ' + results[i] )
        }
    });

    it('should return with vowel o', function(){
        var nombres = ['pepe','hola','vocal','juan','boludo'];
        var result= filter(nombres,function(value){
            return value.indexOf('o') > -1;
        });

        assert(result instanceof Array , 'should results be an Array, but got ' + result.constructor.name );
        assert(result.length === 3 , "should return 3 , but youve got  " + result.length  )
    });
    
    it(" should be result ajo return", function(){
        var nombres = ['ajo','cometa','vocales'];
        var result = filter(nombres,function(value){
            return value.length < 4});

        assert( result[0] === 'ajo', " should be result ajo , but you've got "+ result[0])
    });

   
})