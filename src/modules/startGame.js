import { createIconsArray } from './utils.js'

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
    }, 1000)

    // таймер
    function timeGame() {
        timer = 0

        coutDownEl.textContent = '00.00'
        function setTime() {
            timer++
            const minutes = ('00' + Math.floor(timer / 60)).slice(-2)
            const seconds = ('00' + (timer % 60)).slice(-2)
            coutDownEl.textContent = `${minutes}.${seconds}`
        }
        window.timeGame = setInterval(setTime, 1000)
        setTimeout(clearInterval, 600000, window.timeGame)
    }

    function game() {
        let firstCard = null
        let secondCard = null
        let clickable = true
        let allCards = Array.from(
            document.querySelectorAll('.game-table__card')
        )
        timeGame()
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
                                ? alert('вы выиграли')
                                : //   clearInterval(window.timeGame)
                                  false
                        } else {
                            console.log('вы програли')

                            clearInterval(window.timeGame)
                            // gameSection.style.display = 'block'
                        }
                    }
                }
            })
        )
    }
}
