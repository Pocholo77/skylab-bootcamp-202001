describe("register", function(){

    it("should push to users the registered user ", function(){
        
        var users=[];

        register("pepito","pepito2","pepito3","123");        
        
        expect(users[0].name).toBe("pepito");
        expect(users[0].surname).toBe("pepito2");
        expect(users[0].username).toBe("pepito3");
        expect(users[0].password).toBe("123");
    });

});