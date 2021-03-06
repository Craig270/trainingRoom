// # Eloquent JS Chaper2 Exercises
/*
//Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let justin = "#";

while (justin.length < 7) {
  console.log(justin);
  justin += "#";
}

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.) */

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz`);
  } else if (i % 5 == 0) {
    console.log(`Buzz`);
  } else console.log(i);
}

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

let size = 8;
let board = " ";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board = board + " ";
    } else {
      board = board + "#";
    }
  }
  board += "\n";
}
console.log(board);
