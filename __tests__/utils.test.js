// // const { it, expect, describe } = require('@jest/globals');

import { Deck } from '../src/modules/deck.ts';
import { duplicateArrayAndMix } from '../src/modules/utils.ts';

it('should have 36 cards', () => {
    // Prepare
    const expected = 36;
    // Action
    const testDeck = new Deck();
    const result = testDeck.cards.length;
    // Compare
    expect(result).toBe(expected);
});



it('should array.lenght*2', () => {
    // Prepare
    const expected = 8;
    // Action
    const testArr = [1, 2, 3, 4];
    const resualtArr = duplicateArrayAndMix(testArr);
    const result = resualtArr.length;
    // Compare
    expect(result).toBe(expected);
});
