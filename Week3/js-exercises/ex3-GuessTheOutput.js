/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();
// reference error because the value of a assign outside of the block.
//let is not global scope and work as local scope.
