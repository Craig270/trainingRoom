"use strict";
/*
function mrAddUp(start, end) {
  console.log(start);
  while (start < end) {
    console.log((start += 1));
  }
}

mrAddUp(1, 101);
*/

function mrAddUp(start, end) {
  let newArray = [];
  while (start <= end) {
    newArray.push(start);
    start += 1;
  }
  console.log(newArray);
}

mrAddUp(1, 101);
