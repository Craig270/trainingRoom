"use strict";
/*
function mrAddUp(start, end) {
  console.log(start);
  while (start < end) {
    console.log((start += 1));
  }
}

mrAddUp(1, 101);


function mrAddUp(start, end) {
  let newArray = [];
  while (start <= end) {
    newArray.push(start);
    start += 1;
  }
  console.log(newArray);
}

mrAddUp(1, 101);
*/
console.log(`should =`);
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mrAddUp(array) {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
mrAddUp(array1);

function mrAddUpStep(start, end, step) {
  let newArray = [];
  while (start <= end) {
    newArray.push(start);
    start += step;
  }
  console.log(newArray);
}

mrAddUpStep(5, 2, -1);
