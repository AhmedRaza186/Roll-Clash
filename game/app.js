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
let player1Name
let player2Name

let totalScore1 = 0
let totalScore2 = 0

let startGameBtn = document.querySelector('#startGameBtn')
startGameBtn.addEventListener('click', function(){
    document.querySelector('.playerNameModal').style.display = 'none'
     player1Name = document.querySelector('#player1NameInput').value
     player2Name = document.querySelector('#player2NameInput').value
    if(player1Name == ''){
player1Name = 'Player 1'
    }
    if(player2Name == ''){
player2Name = 'Player 2'
    }
    document.querySelectorAll('.playerName')[0].innerText = player1Name
    document.querySelectorAll('.playerName')[1].innerText = player2Name
})

let homeBtn = document.querySelector('#home').addEventListener('click',function(){
    window.location = './../index.html'
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
let scoreboardArr = []

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
let scoreboardI = 0
function updateScoreboard(){
    scoreboardI++
    scoreboardArr.forEach(score =>{
        let tableContent = document.querySelector('tbody')
        tableContent.innerHTML += `<tr>
        <td>${scoreboardI}</td>
        <td>${player1Turn ? player2Name : player1Name}</td>
        <td>${score}</td>
        <td>${player1Turn ? totalScore2 : totalScore1}</td>
        </tr>`
    })
    scoreboardArr.pop()
}

function switchTurn() {
    scoreboardArr.push(CScoreNum)
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
    updateScoreboard()
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
        totalScore1 += CScoreNum
        TScore.innerText = totalScore1
    }
    else {
        TScore = document.querySelector('#player2 .TScore')
        totalScore2 += CScoreNum
        TScore.innerText = totalScore2
    }
    if ((player1Turn && totalScore1 >= 10) || (!player1Turn && totalScore2 >= 10)) {
        
        winner(player1Turn ? player1Name : player2Name,!player1Turn ? player1Name : player2Name,player1Turn ? totalScore1 : totalScore2,!player1Turn ? totalScore1 : totalScore2)
    }
    
    updateScore()
    switchTurn()

})

function resetGame() {
    window.location.reload()
}


function winner(winner,loser,winnerScore,loserScore) {
    let winnerModal = document.querySelector('.winnerModal')
    winnerModal.style.display = 'flex'
    winnerModal.style.opacity = '1'
    let winnerText =  document.querySelector('#winnerText')
    winnerText.innerText = `${winner} Wins`

    let resultArr = JSON.parse(localStorage.getItem('winnerResult')) || []

    let result = {
        winner: winner,
        loser: loser,
        winnerScore: winnerScore,
        loserScore: loserScore,
    }
    
    resultArr.push(result)
    localStorage.setItem('winnerResult',JSON.stringify(resultArr))

}

