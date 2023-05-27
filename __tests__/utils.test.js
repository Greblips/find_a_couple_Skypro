// const { it, expect, describe } = require('@jest/globals');
import { Deck } from '../src/modules/deck.ts';

it('should have 36 cards', () => {
    // Prepare
    const expected = 36;
    // Action
    const deck = new Deck();
    const result = deck.cards.length;
    // Compare
    expect(result).toBe(expected);
});
