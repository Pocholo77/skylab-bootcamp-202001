describe('Googl', function(){
    it('should a result object be created for each result of the query', function(done){
        googl('pepito', function (results) {
            results.forEach(function (result) {   
                expect(result instanceof Object).toBe(true);
            });
            
            done();

        })
    });

});