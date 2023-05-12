import { createGameCard } from "./gameCard.js";
import { createIconsArray, duplicateArray, shuffle } from "./utils.js";

export const startGame = (difficult) =>{


    const gameSection = document.querySelector('.game-section__container')
    const gameTable = document.createElement('div')
    const cardsIcons = createIconsArray(difficult)
    const duplicateArrayUser = duplicateArray(cardsIcons)
    shuffle(duplicateArrayUser)
    const restartBtn = document.createElement('button');
    gameSection.innerHTML = '';
    restartBtn.textContent = 'рестарт';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');


  
    

 

   duplicateArrayUser.forEach(el =>gameTable.append(createGameCard( el)))

   console.log(gameTable)

    gameSection.append(restartBtn,gameTable);
}