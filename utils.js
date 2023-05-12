
export const duplicateArray= (array) => array.flatMap(i => [i,i])

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export const createIconsArray = (initialCount) =>{

const cards = [
    'A♠',
    "6♠",
    "7♠",
    "8♠",
    "9♠",
    "10♠",
    "J♠",
    "Q♠",
    "K♠",
    "A♣",
    "6♣",
    "7♣",
    "8♣",
    "9♣",
    "10♣",
    "J♣",
    "Q♣",
    "K♣",
    "A♥",
    "6♥",
    "7♥",
    "8♥",
    "9♥",
    "10♥",
    "J♥",
    "Q♥",
    "K♥",
    "A♦",
    "6♦",
    "7♦",
    "8♦",
    "9♦",
    "10♦",
    "J♦",
    "Q♦",
    "K♦"
    
]

//     let deck = new Deck();
 
//   deck.shuffle()

//  shuffle(cards)

    switch (initialCount) {
        case 1:
            return   cards.slice(0,3);
        case 2:
            return  cards.slice(0,6);
        case 3:
            return  cards.slice(0,9);
    
        default:
            break;
    }
   
}

