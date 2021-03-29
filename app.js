document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
          name: 'fries',
          img: 'https://preview.pixlr.com/images/800wm/100/1/1001464071.jpg'
        },
        {
          name: 'cheeseburger',
          img: 'https://previews.123rf.com/images/laudiseno/laudiseno1801/laudiseno180100853/93794622-isolated-cheeseburger-icon-in-colored-illustration-.jpg'
        },
        {
          name: 'ice-cream',
          img: 'https://icons-for-free.com/iconfiles/png/512/flat+version+svg+ice+cream-1319964483943937255.png'
        },
        {
          name: 'pizza',
          img: 'https://www.creativefabrica.com/wp-content/uploads/2020/04/07/Pizza-Icon-SVG-Graphics-3814672-1.png'
        },
        {
          name: 'milkshake',
          img: 'https://img.icons8.com/plasticine/2x/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'https://previews.123rf.com/images/swetlanas/swetlanas1906/swetlanas190600221/130088729-vector-flat-cartoon-hot-dog-hotdog-icon-isolated-on-white-background.jpg'
        },
        {
          name: 'fries',
          img: 'https://preview.pixlr.com/images/800wm/100/1/1001464071.jpg'
        },
        {
          name: 'cheeseburger',
          img: 'https://previews.123rf.com/images/laudiseno/laudiseno1801/laudiseno180100853/93794622-isolated-cheeseburger-icon-in-colored-illustration-.jpg'
        },
        {
          name: 'ice-cream',
          img: 'https://icons-for-free.com/iconfiles/png/512/flat+version+svg+ice+cream-1319964483943937255.png'
        },
        {
          name: 'pizza',
          img: 'https://www.creativefabrica.com/wp-content/uploads/2020/04/07/Pizza-Icon-SVG-Graphics-3814672-1.png'
        },
        {
          name: 'milkshake',
          img: 'https://img.icons8.com/plasticine/2x/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'https://previews.123rf.com/images/swetlanas/swetlanas1906/swetlanas190600221/130088729-vector-flat-cartoon-hot-dog-hotdog-icon-isolated-on-white-background.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'https://pics.freeicons.io/uploads/icons/png/15504941931552642235-512.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'https://pics.freeicons.io/uploads/icons/png/15504941931552642235-512.png')
          cards[optionTwoId].setAttribute('src', 'https://pics.freeicons.io/uploads/icons/png/15504941931552642235-512.png')
          alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a match')
          cards[optionOneId].setAttribute('src', 'https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png')
          cards[optionTwoId].setAttribute('src', 'https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'https://pics.freeicons.io/uploads/icons/png/15504941931552642235-512.png')
          cards[optionTwoId].setAttribute('src', 'https://pics.freeicons.io/uploads/icons/png/15504941931552642235-512.png')
          alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
          resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }            
    }

    createBoard()
})