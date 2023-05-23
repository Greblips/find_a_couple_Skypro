import { startGame } from './startGame.js'

export const EnterPage = () => {
    const gameSection = document.querySelector('.game-section-start__container')

    gameSection.innerHTML = `<div class="game-section-start__container">
        <h2 class="game-menu__title">Выбери сложность</h2>
        <button class="game-menu__difficult-btn">1</button>
        <button class="game-menu__difficult-btn">2</button>
        <button class="game-menu__difficult-btn">3</button>
        <button class="game-menu__start-btn">Старт</button>
    </div>`

    // const easy = document.createElement('button')
    // easy.classList.add('game-menu__difficult-btn')
    // easy.textContent = 1

    // const medium = document.createElement('button')
    // medium.classList.add('game-menu__difficult-btn')
    // medium.textContent = 2

    // const hard = document.createElement('button')
    // hard.classList.add('game-menu__difficult-btn')
    // hard.textContent = 3

    // buttonStart.classList.add('game-menu__start-btn')
    // buttonStart.textContent = 'Старт'

    // gameSection.append(title, easy, medium, hard, buttonStart)

    const chooseDifficult = document.querySelectorAll(
        '.game-menu__difficult-btn'
    )
    for (const chooseButtonElement of chooseDifficult) {
        chooseButtonElement.addEventListener('click', () => {
            chooseDifficult.forEach((el) =>
                el.classList.remove('game-menu__difficult-btn_checked')
            )
            chooseButtonElement.classList.add(
                'game-menu__difficult-btn_checked'
            )
            const buttonStart = document.querySelector('.game-menu__start-btn')
            const difficult = chooseButtonElement.textContent
            buttonStart.addEventListener('click', () => startGame(difficult))
        })
    }
}
