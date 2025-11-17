document.querySelector('nav h1').addEventListener('click', function () {
    window.location = './../index.html'
})

let scoreboardBtn = document.querySelector('#scoreboard')
scoreboardBtn.addEventListener('click', openscoreboard)
function openscoreboard() {
    let scoreboardSidebar = document.querySelector('.scoreboardSidebar')
    scoreboardSidebar.style.transform = 'translateX(0)'

}

let backBtn = document.querySelector('#backBtn')
backBtn.addEventListener('click', closescoreboard)
function closescoreboard() {
    let scoreboardSidebar = document.querySelector('.scoreboardSidebar')
    scoreboardSidebar.style.transform = 'translateX(100%)'

}

let startGameBtn = document.querySelector('#startGameBtn')
startGameBtn.addEventListener('click', function(){
    document.querySelector('.playerNameModal').style.display = 'none'
    let player1Name = document.querySelector('#player1NameInput').value
    let player2Name = document.querySelector('#player2NameInput').value
    document.querySelectorAll('.playerName')[0].innerText = player1Name
    document.querySelectorAll('.playerName')[1].innerText = player2Name
})



let modalScoreboardBtn = document.querySelector('#modalScoreboard')
modalScoreboardBtn.addEventListener('click', openscoreboard)

let modalNewGameBtn = document.querySelector('#restartGame')
modalNewGameBtn.addEventListener('click', resetGame)


document.querySelector('#startGameBtn').addEventListener

player1Turn = true
let player1 = document.querySelector('#player1')
player1.classList.add('active')
let player2 = document.querySelector('#player2')
let newGameBtn = document.querySelector('#newGame')
let rollDiceBtn = document.querySelector('#rollDice')
let diceImg = document.querySelector('#diceimg img')
let holdBtn = document.querySelector('#hold')
let CScoreDisplay
let TScore
let diceAud = new Audio('./../assets/dice-95077.mp3')


newGameBtn.addEventListener('click', resetGame)


let rotateI = 0
let CScoreNum = 0

function updateScore() {
    if (player1Turn) {
        CScoreDisplay = document.querySelector('#player1 .CScore .scoreBox .CScoreP')
    }
    else {
        CScoreDisplay = document.querySelector('#player2 .CScore .scoreBox .CScoreP')

    }
    CScoreDisplay.innerText = CScoreNum
}

function switchTurn() {
    CScoreNum = 0
    player1.classList.toggle('active')
    player2.classList.toggle('active')
    if (player1Turn) {
        player1Turn = false
    }
    else {
        player1Turn = true
    }
    updateScore()
}

rollDiceBtn.addEventListener('click', diceRoll)
function diceRoll() {
    rotateI++
    let num = Math.ceil(Math.random() * 6)
    diceImg.src = `./../assets/${num}.webp`
    let degree = 90 * rotateI
    diceImg.style.transform = `rotate(${degree}deg)`
    diceImg.style.transition = 'transform .2s ease-in-out'
    diceAud.play()
    if (num == 1) {
        switchTurn()
    }
    else {
        CScoreNum += num
        updateScore()
    }
}

holdBtn.addEventListener('click', function () {
    if (player1Turn) {
        TScore = document.querySelector('#player1 .TScore')
    }
    else {
        TScore = document.querySelector('#player2 .TScore')

    }
    let TotalScore = +(TScore.innerText)
    TotalScore += CScoreNum
    TScore.innerText = TotalScore
    if(TotalScore >= 100){
        if(player1Turn){
            winner(document.querySelectorAll('.playerName')[0].innerText)
        }
        else{
            winner(document.querySelectorAll('.playerName')[1].innerText)
        }
    }
    updateScore()
    switchTurn()

})

function resetGame() {
    window.location.reload()
}

function winner(player) {
    let winnerModal = document.querySelector('.winnerModal')
    winnerModal.style.display = 'flex'
    winnerModal.style.opacity = '1'
    let winnerText =  document.querySelector('#winnerText')
    winnerText.innerText = `${player} Wins`
}

