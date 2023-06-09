import { startGame } from './startGame';

export const enterPage = () => {
    const gameSection = document.querySelector(
        '.game-section-start__container'
    ) as HTMLElement;

    gameSection.innerHTML = `<div class="game-section-start__container">
        <h2 class="game-menu__title">Выбери <br>сложность</h2>
        <button class="game-menu__difficult-btn">1</button>
        <button class="game-menu__difficult-btn">2</button>
        <button class="game-menu__difficult-btn">3</button>
        <button class="game-menu__start-btn">Старт</button>
    </div>`;

    const chooseDifficult = document.querySelectorAll(
        '.game-menu__difficult-btn'
    );

    chooseDifficult.forEach((element) =>
        element.addEventListener('click', () => {
            chooseDifficult.forEach((el) =>
                el.classList.remove('game-menu__difficult-btn_checked')
            );
            element.classList.add('game-menu__difficult-btn_checked');
            const buttonStart = document.querySelector(
                '.game-menu__start-btn'
            ) as HTMLElement;

            buttonStart.addEventListener('click', () => {
                startGame(element.textContent);
            });
        })
    );
};
