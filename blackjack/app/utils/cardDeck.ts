export type Card = {
  name: string;
  value: number;
};

export class CardDeck {
  suits: string[];
  cardValues: (string | number)[];
  cards: Card[];
  constructor() {
    this.suits = ['♤', '♢', '♡', '♧'];
    this.cardValues = [
      ...Array.from({ length: 9 }, (v, k) => k + 2),
      'K',
      'Q',
      'J',
      'A',
    ];
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    console.log('Creating Deck...');

    const deck: Card[] = [];
    this.cardValues.forEach((card: string | number) => {
      this.suits.forEach((suit) => {
        const cardInfo: Card = {
          name: `${card}${suit}`,
          value: typeof card === 'string' ? 10 : card,
        };
        if (card === 'A') cardInfo.value = 11;
        deck.push(cardInfo);
      });
    });
    return this.shuffleDeck(deck);
  }

  shuffleDeck(deck: Card[]) {
    console.log('Shuffling Deck...');

    const shuffleDeck = Array.from(deck);
    for (let i = shuffleDeck.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [shuffleDeck[i], shuffleDeck[j]] = [shuffleDeck[j], shuffleDeck[i]];
    }
    this.cards = shuffleDeck;
  }

  drawCard(): Card {
    const cardIndex = Math.floor(Math.random() * (this.cards.length + 1));
    const card = this.cards.splice(cardIndex, 1)[0];
    if (this.cards.length === 0) {
      this.createDeck();
    }
    return card;
  }
}
