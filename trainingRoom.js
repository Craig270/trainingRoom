"use strict";

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

class Player extends Deck {
  constructor(name) {
    super();
    this.name = name;
    this.hand = []; //eq1mpty array for players current held cards
    //properties of player
  }
}
//make 2 new players
let craig = new Player(`Craig`);
let jennifer = new Player(`Jennifer`);
//console log player objs.
console.log(craig);
console.log(jennifer);
console.log(craig.name);
console.log(jennifer.name);
///Make new decks
let startWarDeck1 = new Deck();
startWarDeck1.makeAdeck();
console.log(startWarDeck1.newDeck);
startWarDeck1.shuffle(startWarDeck1.newDeck);

////Score Keeper mock up
// let hotelScore = 0;
// let myDeckScore = 0;

// console.log(`The Score:
// --------------
// Hotel Deck:${hotelScore}
// myDeck:${myDeckScore}
// `);
// if (hotelDeck.newDeck[1].value > myDeck.newDeck[1].value) {
//   hotelScore += 1;
//   console.log(`Congrats! Hotel Deck Won!`);
// } else if (hotelDeck.newDeck[1].value < myDeck.newDeck[1].value) {
//   myDeckScore += 1;
//   console.log(`Congrats! myDeck Deck Won!`);
// } else if (hotelDeck.newDeck[1].value == myDeck.newDeck[1].value) {
//   console.log(`This battle of war was a tie! No player got a point!`);
// }

// console.log(`The Score:
// --------------
// Hotel Deck:${hotelScore}
// myDeck:${myDeckScore}
// `);

function startWar() {
  let startWarDeck = new Deck();
  startWarDeck.makeAdeck();
  startWarDeck.shuffle(startWarDeck.newDeck);
}
