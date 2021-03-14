"use strict";

class Particle {
  constructor() {
    this.x = 100;
    this.y = 99;
  }
  show() {
    point(this.x, this.y);
  }
}

var p;

function setup() {
  createCanvas(600, 300);
  p = new Particle();
}
