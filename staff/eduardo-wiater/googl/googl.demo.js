googl('pepito', function (results) {
    results.forEach(function (result) {
        console.log(result)
        console.assert(!(result === undefined), "it should return t0he result ");
        if(result.rating === true){ 
            console.assert((!(result.rating === undefined)), "it should return the rating ");
        }         
        console.assert(!(result.description === undefined),"it should return the description ");
    });
});