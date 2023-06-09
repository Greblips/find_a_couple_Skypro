import { Deck } from './deck';
import { ICardType } from './startGame';

export const duplicateArrayAndMix = (array: ICardType[]) => {
    const duplicateCards = array.flatMap((i: ICardType) => [i, i]);
    for (let i = 0; i < duplicateCards.length - 1; i++) {
        const j = i + Math.floor(Math.random() * (duplicateCards.length - i));
        const temp = duplicateCards[j];
        duplicateCards[j] = duplicateCards[i];
        duplicateCards[i] = temp;
    }
    return duplicateCards;
};

export const createIconsArray = (initialCount: string) => {
    const deck = new Deck();

    deck.shuffle();

    switch (initialCount) {
        case '1':
            return duplicateArrayAndMix(deck.cards.slice(0, 3));
        case '2':
            return duplicateArrayAndMix(deck.cards.slice(0, 6));
        case '3':
            return duplicateArrayAndMix(deck.cards.slice(0, 9));
        default:
            break;
    }
};
