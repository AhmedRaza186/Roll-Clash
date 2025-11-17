document.querySelector('nav h1').addEventListener('click',function(){
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
