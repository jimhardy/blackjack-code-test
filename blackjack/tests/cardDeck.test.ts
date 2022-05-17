import { expect } from 'vitest';
import { CardDeck } from '~/utils/cardDeck';

const deck = new CardDeck();

test('deck should be initialized with 54 cards', () => {
  expect(deck.cards).toHaveLength(52);
});
test('drawing a card should remove a card from the deck', () => {
  const drawnCard = deck.drawCard();
  expect(deck.cards).toHaveLength(51);
  expect(deck.cards.some((card) => card === drawnCard)).toBeFalsy();
});
test('if all cards are drawn, a new deck should be created', () => {
  while (deck.cards.length > 1) {
    deck.drawCard();
  }
  expect(deck.cards).toHaveLength(1);
  deck.drawCard();
  deck.drawCard();
  expect(deck.cards).toHaveLength(51);
});
