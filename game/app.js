let scoreboardBtn = document.querySelector('#scoreboard')
scoreboardBtn.addEventListener('click', scoreboard)
function scoreboard() {
    let scoreboardSidebar = document.querySelector('.scoreboardSidebar')
    scoreboardSidebar.classList.toggle('active')
    if(scoreboardSidebar.classList.contains('active')){
        scoreboardBtn.innerText = 'Back'
    }
    else{
       scoreboardBtn.innerText = 'Scoreboard'

   }
}
