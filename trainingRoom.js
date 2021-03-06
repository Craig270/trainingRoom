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

for (let i = 0; i < startWarDeck1.newDeck.length; i++) {
  if (i % 2 == 0) {
    craig.hand.push(startWarDeck1.newDeck[i]);
  } else {
    jennifer.hand.push(startWarDeck1.newDeck[i]);
  }
}
console.log(craig.hand);
console.log(jennifer.hand);
console.log(craig.hand[0].value);
console.log(jennifer.hand[0].value);
console.log(craig.hand[0].suit);

let player1Score = 0;
let player2Score = 0;

for (let i = 0; i < craig.hand.length; i++) {
  if (craig.hand[i].value > jennifer.hand[i].value) {
    player1Score += 1;
    console.log(
      `${craig.name} played ${craig.hand[i].rank} of ${craig.hand[i].suit} beating out ${jennifer.hand[i].rank} of ${jennifer.hand[i].suit} played by ${jennifer.name}!`
    );
  } else if (craig.hand[i].value < jennifer.hand[i].value) {
    player2Score += 1;
    console.log(
      `${jennifer.name} played ${jennifer.hand[i].rank} of ${jennifer.hand[i].suit} beating out ${craig.hand[i].rank} of ${craig.hand[i].suit} played by ${craig.name}`
    );
  } else if (craig.hand[i].value == jennifer.hand[i].value) {
    console.log(`This battle of war was a tie! No player got a point!`);
  }
}
console.log(`
--------------
The Score:
--------------
${craig.name}:${player1Score}
${jennifer.name}:${player2Score}
`);
if (player1Score > player2Score) {
  console.log(
    `Congratulations!! ${craig.name} you are the winner of this War Card Game simuilated game!!`
  );
}
if (player2Score > player1Score) {
  console.log(
    `Congratulations!! ${jennifer.name} you are the winner of this War Card Game simuilated game!!`
  );
} else if (player1Score === player1Score) {
  console.log(
    `As luck would have it this game was a tie and no one is the winner!`
  );
}

/*
Score Keeper mock up
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


*/
function startWar() {
  let startWarDeck = new Deck();
  startWarDeck.makeAdeck();
  startWarDeck.shuffle(startWarDeck.newDeck);
}
