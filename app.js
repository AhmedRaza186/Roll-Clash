let howToPlayBtn = document.querySelector('footer button')
howToPlayBtn.addEventListener('click',openManual)
function openManual(){
  let manual =  document.querySelector('.manual')
  manual.style.transform = 'translateY(-100%)'
  manual.style.display = 'block'
}

let backBtn = document.querySelector('#manualBack')
backBtn.addEventListener('click',closeManual)
function closeManual(){
  let manual =  document.querySelector('.manual')
  manual.style.transform = 'translateY(0%)'
  manual.style.display = 'none'

}