import { createIconsArray, duplicateArray } from "./utils.js";

export const startGame = (difficult) =>{
    let firstCard = null;
    let secondCard = null;
    let clicable = true;

    const gameSection = document.querySelector('.game-section__container')
    const gameTamble = document.createElement('div')
    const cardsIcons = createIconsArray(difficult)
    const duplicateArrayUser = duplicateArray(cardsIcons)
   console.log(duplicateArrayUser)

}