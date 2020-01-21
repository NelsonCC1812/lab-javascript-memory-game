class MemoryGame {
  constructor(cards) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.pairs=cards.length/2
  }


    shuffleCards(array) {

      if (!array) return undefined
      else {
    let m = array.length
     let t
     let i
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
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
return this.pairs==this.pairsGuessed? true: false

}
}