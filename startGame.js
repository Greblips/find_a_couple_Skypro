
import { createIconsArray, duplicateArray, shuffle } from "./utils.js";


export const startGame = (difficult) =>{
    const gameSection = document.querySelector('.game-section__container')
    const gameTable = document.createElement('div')
    let cardsIcons = createIconsArray(difficult)
    duplicateArray(cardsIcons)
    console.log(cardsIcons)
 
    

    const restartBtn = document.createElement('button');
    gameSection.innerHTML = '';
    restartBtn.textContent = 'рестарт';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');
    shuffle(cardsIcons)
   
    for( const card of cardsIcons){
 
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('game__card');
        cardDiv.textContent = card.value + card.suit;
        // duplicateArray(cardDiv)
        gameSection.append(restartBtn,cardDiv);
    }

   
    // gameSection.append(restartBtn, cardDiv);


   

//     
}