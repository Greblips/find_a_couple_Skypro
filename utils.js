import Deck from "./deck.js";

export const duplicateArray = (array) => array.flatMap(i => [i,i])

 export function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

export const createIconsArray = (initialCount) =>{


let deck = new Deck();
 
  deck.shuffle()
 
   duplicateArray (deck.cards)

  console.log(deck.cards)


    switch (initialCount) {
        case "1":
            return   duplicateArray((deck.cards.slice(0,3)));
        case "2":
            return  duplicateArray((deck.cards.slice(0,6)));
        case "3":
            return    duplicateArray((deck.cards.slice(0,9)));
    
        default:
            break;
    }
   
}

