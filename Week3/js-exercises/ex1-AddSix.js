/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */

function createBase(/* ???? */) {
  // Put here your logic...
  var baseNumber = 0;

  function addSix() {
    const number = +baseNumber;
    const addSix = number + 6;
  }
  return addSix();
}

//const addSix = createBase(6);

// Put here your function calls...
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));
