import Deck from "./deck.js"
export const duplicateArray= (array) => array.flatMap(i => [i,i])

export const createIconsArray = (initialCount) =>{
    let deck = new Deck();
 
   deck = new Deck()
 

    switch (initialCount) {
        case 1:
            return   deck.cards.slice(0,3);
        case 2:
            return  deck.cards.slice(0,6);
        case 3:
            return  deck.cards.slice(0,9);
    
        default:
            break;
    }
   
}

