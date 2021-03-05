"use strict";
/*
let sealedDeck = [
  ["Two", 2], //0
  ["Three", 3], //1
  ["Four", 4], //2
  ["Five", 5], //3
  ["Six", 6], //4
  ["Seven", 7], //5
  ["Eight", 8], //6
  ["Nine", 9], //7
  ["Ten", 10], //8
  ["Jack", 11], //9
  ["Queen", 12], //10
  ["King", 13], //11
  ["Ace", 14], //12
];

let suits = [`Hearts`, `Diamonds`, `Spades`, `Clubs`];
let ranks = [
  `2 of `,
  `3 of `,
  `4 of `,
  `5 of `,
  `6 of `,
  `7 of `,
  `8 of `,
  `9 of `,
  `10 of `,
  `Jack of `,
  `Queen of `,
  `King of `,
  `Ace of `,
];

let ranksNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let newDeck = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    newDeck.push(ranks[j] + suits[i]);
  }
}
console.log(newDeck);

function mrFlip(a, b) {
  return b, a;
}
*/

class Card {
  constructor(suit, rank, value) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
  describe() {
    console.log(`${this.rank} of ${this.suit}`);
  }
}

class Deck extends Card {
  constructor() {
    super();
    this.suits = [`Hearts`, `Diamonds`, `Spades`, `Clubs`];
    this.ranks = [
      `2`,
      `3`,
      `4`,
      `5`,
      `6`,
      `7`,
      `8`,
      `9`,
      `10`,
      `Jack`,
      `Queen`,
      `King`,
      `Ace`,
    ];
    this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.newDeck = [];
    this.playDeck;
  }
  makeAdeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.newDeck.push(
          new Card(this.suits[i], this.ranks[j], this.value[j])
        );
      }
    }
  }
  shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return (this.playDeck = array);
  }
}

///Make new decks
let hotelDeck = new Deck();
hotelDeck.makeAdeck();
console.log(hotelDeck.newDeck);
hotelDeck.shuffle(hotelDeck.newDeck);
hotelDeck.newDeck[0].describe();
console.log(hotelDeck.newDeck[1]);
console.log(hotelDeck.newDeck[1].value);
console.log(hotelDeck.newDeck[0].value);
let myDeck = new Deck();
myDeck.makeAdeck();
console.log(myDeck.newDeck);
myDeck.shuffle(myDeck.newDeck);
console.log(myDeck.newDeck[0]);
console.log(myDeck.newDeck[1]);
console.log(myDeck.newDeck[1].value);
console.log(myDeck.newDeck[0].value);

let hotelScore = 0;
let myDeckScore = 0;

console.log(`The Score:
--------------
Hotel Deck:${hotelScore}
myDeck:${myDeckScore}
`);
if (hotelDeck.newDeck[1].value > myDeck.newDeck[1].value) {
  hotelScore += 1;
  console.log(`Congrats! Hotel Deck Won!`);
} else if (hotelDeck.newDeck[1].value < myDeck.newDeck[1].value) {
  myDeckScore += 1;
  console.log(`Congrats! myDeck Deck Won!`);
} else if (hotelDeck.newDeck[1].value == myDeck.newDeck[1].value) {
  console.log(`This battle of war was a tie! No player got a point!`);
}

console.log(`The Score:
--------------
Hotel Deck:${hotelScore}
myDeck:${myDeckScore}
`);

function isSameNum(num1, num2) {
  if (num1 == num2) {
    return true;
  } else return flase;
}
