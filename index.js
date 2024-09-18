const menuMob = document.querySelector('.hammbMenu')

function toggleMenu() {

  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

menuMob.addEventListener('click', toggleMenu)

/*configuração do slider*/

let slideIndex = 0;
showSlide(slideIndex)

function prevSlide() {
  showSlide(slideIndex -= 1)
}

function nextSlide() {
  showSlide(slideIndex += 1)
}

function showSlide(index) {
  let slides = document.querySelectorAll('.slider img')
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active')
  }
  slides[slideIndex].classList.add('active')
}

/*Config de touch para slider*/

let startX
let isDragging = false

const slider = document.querySelector('.slider')

slider.addEventListener('touchstart', touchStart)
slider.addEventListener('touchmove', touchMove)
slider.addEventListener('touchend', touchEnd)

function touchStart(event) {
  startX = event.touches[0].clientX
  isDragging = true
}

function touchMove(event) {
  if (isDragging) {
    const currentX = event.changedTouches[0].clientX
    const deltaX = currentX - startX
  }
}

function touchEnd(event) {
  if (!isDragging) return
  isDragging = false
  const endX = event.changedTouches[0].clientX
  const deltaX = startX - endX

  const threshold = window.innerWidth / 4
  if (deltaX > threshold) {
    nextSlide()
  } else if(deltaX < - threshold) {
    prevSlide()
  }
}
/*Configurações de Carrinho*/
