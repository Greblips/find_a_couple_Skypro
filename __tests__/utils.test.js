// few tests

import { Deck } from '../src/modules/deck.ts';
import { duplicateArrayAndMix } from '../src/modules/utils.ts';

describe('Проверяет наличие 36 карт в колоде', () => {
    it('should have 36 cards', () => {
        // Prepare
        const expected = 36;
        // Action
        const testDeck = new Deck();
        const result = testDeck.cards.length;
        // Compare
        expect(result).toBe(expected);
    });
});

describe('duplicates an array', () => {
    it('умножает количество элементов на 2', () => {
        // Prepare
        const expected = 8;
        // Action
        const testArr = [1, 2, 3, 4];
        const resualtArr = duplicateArrayAndMix(testArr);
        const result = resualtArr.length;
        // Compare
        expect(result).toBe(expected);
    });
});

describe('shuffle', () => {
    it('Рандомно перемешивает массив карт', () => {
        // Prepare
        const testDeck = new Deck();
        const controlDeck = new Deck();

        //Action
        testDeck.shuffle();

        //Conpare
        expect(testDeck.cards[0]).not.toEqual(controlDeck.cards[0]);
    });
});
