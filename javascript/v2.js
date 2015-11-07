<<<<<<< HEAD:javascript/v2.js
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
=======
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
>>>>>>> bb3061dca9cd027fcb97c4ff281941838ad403be:javascript/main.js

// Find the sum of all the multiples of 3 or 5 below 1000.

var multiples = [];

for (var i = 999; i > 0; --i) {

  if (i % 3 === 0 || i % 5 === 0) {
    multiples.push(i)
  }
<<<<<<< HEAD:javascript/v2.js
}
=======
}

var sum = eval(multiples.join('+'))
console.log(sum)


>>>>>>> bb3061dca9cd027fcb97c4ff281941838ad403be:javascript/main.js
