import { createIconsArray } from './utils.js'
import { cardsApp } from '../app.js'

export const startGame = (difficult) => {
    const suitsBackground = {
        '♠': 'spades.svg',
        '♣': 'clubs.svg',
        '♥': 'hearts.svg',
        '♦': 'diamonds.svg',
    }

    const gameSection = document.querySelector('.game-section-start__container')
    const gameTable = document.querySelector('.game-section-cards__container')
    const cardsBox = document.createElement('div')
    cardsBox.classList.add('cards__box')
    gameSection.style.display = 'none'
    let cardsIcons = createIconsArray(difficult)

    const cardsHtml = cardsIcons
        .map((card) => {
            return `
      
      <div data-value=${card.value} data-suit=${
                card.suit
            } class="game-table__card" >
     
          <div class="card__face" style="background: url(./img/${
              suitsBackground[card.suit]
          }) center center no-repeat, rgb(255, 255, 255);">
         
              <div class="card__top">    
                  <div class="card__value">${card.value}
                  </div>
                  <img class="card__suit" src="./img/${
                      suitsBackground[card.suit]
                  }" alt="suit">
              </div>
              <div class="card__bottom">    
                  <div class="card__value">${card.value}
                  </div>
                  <img class="card__suit" src="./img/${
                      suitsBackground[card.suit]
                  }" alt="suit">
              </div>
              
              
          </div>
          <div class="card__back"></div>
          
    </div>
     
      `
        })
        .join('')

    gameTable.innerHTML = `
    <div class="main__game_content">
        <div id="timer">
            <div class="timer__text">
                <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>
            </div>
            <p class='timer'>00.00</p>
        </div>
        <button class="main__game_content_button">Начать заново</button>
    </div>
        <div class="main__game_cardsBox">
        ${cardsHtml}
        </div> `

    const restartBTn = document.querySelector('.main__game_content_button')
    restartBTn.addEventListener('click', () => {
        startGame(difficult)
    })

    // Скрытие карт
    function closecards() {
        const cards = document.querySelectorAll('.card__back')
        for (const card of cards) {
            card.style.display = 'flex'
        }
    }

    // Скрытие карт через 5 секунд и запуск игры
    const coutDownEl = document.querySelector('.timer')
    let timer = 5
    coutDownEl.textContent = '00.05'
    let id = setInterval(function () {
        timer--
        if (timer === 0) {
            clearInterval(id)
            closecards()
            game()
        } else {
            coutDownEl.innerHTML = `00.0${timer}`
        }
    }, 100)

    // таймер
    function timerGame() {
        timer = 0

        coutDownEl.textContent = '00.00'
        function setTime() {
            timer++
            const minutes = ('00' + Math.floor(timer / 60)).slice(-2)
            const seconds = ('00' + (timer % 60)).slice(-2)
            coutDownEl.textContent = `${minutes}.${seconds}`
        }
        window.timeGame = setInterval(setTime, 100)
        setTimeout(clearInterval, 600000, window.timeGame)
    }

    function isWinner() {
        clearInterval(window.timeGame)
        let popupBg = document.querySelector('main')
        popupBg.classList.add('active')
        gameSection.style.display = 'block'
        const timerResult = coutDownEl.textContent
        console.log(timerResult)

        gameSection.classList.add('popup')
        gameSection.innerHTML = `<div class="game-section-start__container">
        <img class="timer_result-img" src="./img/win.svg" alt="win" />
        <h2 class="game-menu_result-title">Вы проиграли</h2>
        <p class="game-menu__subTitle">Затраченное время</h2>
        <p class='timer_result'>${timerResult}</p>
        
        <button class="game-menu__start-btn">Играть снова</button></div>
        `
        const restartBTn = document.querySelector('.game-menu__start-btn')
        restartBTn.addEventListener('click', () => {
            gameTable.textContent = `d`
            cardsApp()
        })
    }

    function game() {
        timerGame()
        let firstCard = null
        let secondCard = null
        let clickable = true
        let allCards = Array.from(
            document.querySelectorAll('.game-table__card')
        )

        allCards.forEach((card, index) =>
            card.addEventListener('click', () => {
                if (
                    clickable == true &&
                    !card.classList.contains('successfully')
                ) {
                    card.querySelector('.card__back').classList.remove(
                        'card__back'
                    )

                    if (firstCard == null) {
                        firstCard = index
                    } else {
                        if (index != firstCard) {
                            secondCard = index
                            clickable = false
                        }
                    }

                    if (
                        firstCard != null &&
                        secondCard != null &&
                        firstCard != secondCard
                    ) {
                        if (
                            allCards[firstCard].dataset.suit ===
                                allCards[secondCard].dataset.suit &&
                            allCards[firstCard].dataset.value ===
                                allCards[secondCard].dataset.value
                        ) {
                            allCards[firstCard].classList.add('successfully')

                            allCards[secondCard].classList.add('successfully')

                            firstCard = null
                            secondCard = null
                            clickable = true
                            const arrSuccess = allCards.filter((item) =>
                                item.classList.contains('successfully')
                            )
                            allCards.length === arrSuccess.length
                                ? console.log('вы выиграли')
                                : //   clearInterval(window.timeGame)
                                  false
                        } else {
                            isWinner()
                        }
                    }
                }
            })
        )
    }
}
