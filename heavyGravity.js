"use strict";


///first go at it 

makeAdeck() {
  for (let i = 0; i < this.suits.length; i++) {
    for (let j = 0; j < this.ranks.length; j++) {
      this.newDeck.push(this.ranks[j] + this.suits[i]);
    }
  }
}











///my go at it second time
makeAdeck() {
  for (let i = 0; i < this.suits.length; i++) {
    for (let j = 0; j < this.ranks.length; j++) {
      this.newDeck.push(
        new Card(this.suits[i], this.ranks[j], this.value[j])
      );
    }
  }
}   



