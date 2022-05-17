import type { Card, CardDeck } from './cardDeck';

export class Player {
  hand: Card[];
  score: number;
  deck: CardDeck;
  player: string;
  constructor(deck: CardDeck, player: string) {
    this.deck = deck;
    this.player = player;
    this.hand = [];
    this.score = 0;
  }

  drawCard() {
    const card = this.deck.drawCard();
    this.hand.push(card);
    this.calculateScore();
  }

  calculateScore(): number {
    const score = this.hand.reduce((acc, hand) => {
      acc += hand.value;
      return acc;
    }, 0);
    const findAce = this.hand.find(
      (card: Card) => card.name === 'A' && card.value === 11
    );
    if (score > 21 && findAce) {
      console.log('Switch Ace to Low!');
      this.hand[this.hand.indexOf(findAce)].value = 1;
      return this.calculateScore();
    }
    return score;
  }
}
