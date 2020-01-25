// The push() method adds one or more elements to the end of an array and returns the new length of the array.

describe('push', function () {
    it("should return 5 at last element of array", function () {

        var array = [1, 2, 4];
        var last = push(array, 5);

        assert(last[last.length - 1] === 5, "it should be 5 , but youve got " + last[last.length - 1]);
    });

    it('should return 4 the length of the array', function () {
        var array = [1, 2, 4];
        var last = push(array, 5);

        assert(last.length === 4, 'it should be 4 , but youvegot' + last[last.length]);
    });


    it("should throw error if the first argument in not an array", function () {
        var _error
        try {
            push(1, 1)
        } catch (error) {
            _error = error
        } finally {
            assert(_error instanceof TypeError, "should be an array")
        }
    });
});