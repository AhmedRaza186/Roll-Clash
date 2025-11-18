let howToPlayBtn = document.querySelector('footer button')
howToPlayBtn.addEventListener('click',openManual)
function openManual(){
  let manual =  document.querySelector('.manual')
  manual.style.transform = 'translateY(-100%)'
  manual.style.display = 'block'
}

let manualBackBtn = document.querySelector('#manualBack')
manualBackBtn.addEventListener('click',closeManual)
function closeManual(){
  let manual =  document.querySelector('.manual')
  manual.style.transform = 'translateY(0%)'
  manual.style.display = 'none'

}
let leaderboardSidebar = document.querySelector('.leaderboardSidebar')
let sidebarDefault = getComputedStyle(leaderboardSidebar).display

let leaderboardBtn = document.querySelector('#leaderboard')
leaderboardBtn.addEventListener('click', openleaderboard)
function openleaderboard() {
    leaderboardSidebar.style.transform = 'translateX(0)'
    if(sidebarDefault == 'none')leaderboardSidebar.style.display = 'flex'
    updateleaderboard()

}

let leaderboardBackBtn = document.querySelector('#backBtn')
leaderboardBackBtn.addEventListener('click', closeleaderboard)
function closeleaderboard() {
    leaderboardSidebar.style.transform = 'translateX(100%)'
    if(sidebarDefault == 'none')leaderboardSidebar.style.display = 'none'


}


function updateleaderboard(){
    let leaderboardArr = JSON.parse(localStorage.getItem('winnerResult')) || []
    let tableContent = document.querySelector('tbody')
    tableContent.innerHTML = ''

    leaderboardArr.forEach(function(result,i){
      let tr = document.createElement('tr')
        tr.innerHTML = `<tr>
        <td>${i + 1}</td>
        <td><strong>${result.winner}</strong> wins against <strong>${result.loser}</strong></td>
        <td>${result.winnerScore}</td>
        <td>${result.loserScore}</td>
        </tr>`
          tableContent.appendChild(tr)
          
        })
        
      }


      document.querySelector('#clearAllLeaderboard').addEventListener('click', function(){
    localStorage.removeItem('winnerResult')
    updateleaderboard()
})