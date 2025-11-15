let howToPlayBtn = document.querySelector('footer button')
howToPlayBtn.addEventListener('click',openManual)
function openManual(){
  let manual =  document.querySelector('.manual')
  manual.style.transform = 'translateY(-100%)'
}

let backBtn = document.querySelector('#manualBack')
backBtn.addEventListener('click',closeManual)
function closeManual(){
  let manual =  document.querySelector('.manual')
  manual.style.transform = 'translateY(0%)'
}