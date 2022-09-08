// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// Refactor the above code to use two arrow functions. Turn it into a one-liner.
/* ES2015 Version */
const double = arr => arr.map(v => v * 2)

console.log(double([1, 2, 3]))




// Refactor the following function to use arrow functions

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }


// Replace ALL functions with arrow functions

const squareAndFindEvens = numbers => numbers.map(n => n ** 2).filter(n => n % 2 === 0)

console.log(squareAndFindEvens([2, 3, 6, 7, 9, 10]))