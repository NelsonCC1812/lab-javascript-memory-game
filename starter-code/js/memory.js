class MemoryGame {
  constructor(cards) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.pairs = cards.length / 2
  }


  shuffleCards() {
      let m = this.cards.length
      let t
      let i
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
      }
    }
  


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }


  isFinished() {
    return this.pairs == this.pairsGuessed ? true : false

  }
}