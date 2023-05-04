export const EnterPage = () =>{
    const title = document.createElement('h2');
    
    const gameSection = document.querySelector('.game-section__container')
    console.log(gameSection)
    gameSection.innerHTML='';
    title.textContent = 'Выбери сложность';
    title.classList.add('game-menu__title');

    const createDifficultButton = (difficult) =>{
        const button =document.createElement('button');

        button.classList.add('game-menu__difficult-btn')
        button.textContent = `${difficult}`

        button.addEventListener('click', ()=>{})

        return button;
    }

    const buttonStart = document.createElement('button');
    buttonStart.classList.add('game-menu__start-btn');
    buttonStart.textContent='Старт';

   gameSection.append(
    title,
    createDifficultButton(1),
    createDifficultButton(2),
    createDifficultButton(3),
    buttonStart,
   ) 
}