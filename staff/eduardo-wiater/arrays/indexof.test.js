console.log("we are testing indexOf");
var numbers = [10, 20, 30, 40, 50];


var test = indexOf(numbers, 40, -1);

console.assert(test === -1, 'index of 40 is 3, and -1 is for 50, which is on index 4. Therefore, test should return -1 and instead it returns ' + test);