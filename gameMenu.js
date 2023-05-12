import { startGame } from "./startGame.js";

export const EnterPage = () =>{
    const title = document.createElement('h2');
    
    const gameSection = document.querySelector('.game-section__container')

    gameSection.innerHTML='';
    title.textContent = 'Выбери сложность';
    title.classList.add('game-menu__title');

    const easy =document.createElement('button');
    easy.classList.add('game-menu__difficult-btn')
    easy.textContent = 1

    const medium =document.createElement('button');
    medium.classList.add('game-menu__difficult-btn')
    medium.textContent = 2

    const hard =document.createElement('button');
    hard.classList.add('game-menu__difficult-btn')
    hard.textContent = 3


    const buttonStart = document.createElement('button');
    buttonStart.classList.add('game-menu__start-btn');
    buttonStart.textContent='Старт';
 
   
   gameSection.append(
    title,
    easy,
    medium,
    hard,
    buttonStart
   ) 

   const chooseDifficult = document.querySelectorAll(".game-menu__difficult-btn")  
   for (const chooseButtonElement of chooseDifficult) {
       chooseButtonElement.addEventListener("click", () => {
           const difficult = Number(chooseButtonElement.textContent)
           buttonStart.addEventListener('click', ()=> startGame(difficult))
       })
   }

}