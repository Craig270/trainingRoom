"use strict";

/*Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum. */

function findTheMin(num1, num2) {
  return Math.min(num1, num2);
}

console.log(findTheMin(10, 1));

/*Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

function isEven(num) {
  if (num < 0) {
    num = Math.abs(num);
  }
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(Math.abs(-1));
