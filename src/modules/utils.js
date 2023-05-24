import Deck from './deck.js'

export const duplicateArrayAndMix = (array) => {
    const duplicateCards = array.flatMap((i) => [i, i])
    for (let i = 0; i < duplicateCards.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (duplicateCards.length - i))
        let temp = duplicateCards[j]
        duplicateCards[j] = duplicateCards[i]
        duplicateCards[i] = temp
    }
    return duplicateCards
}

export const createIconsArray = (initialCount) => {
    let deck = new Deck()
    deck.shuffle()

    switch (initialCount) {
        case '1':
            return duplicateArrayAndMix(deck.cards.slice(0, 2))
        case '2':
            return duplicateArrayAndMix(deck.cards.slice(0, 6))
        case '3':
            return duplicateArrayAndMix(deck.cards.slice(0, 9))

        default:
            break
    }
}
