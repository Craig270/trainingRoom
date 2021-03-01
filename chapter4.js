"use strict";

function mrAddUp(start, end) {
  console.log(start);
  while (start < end) {
    console.log((start += 1));
  }
}

mrAddUp(1, 101);
