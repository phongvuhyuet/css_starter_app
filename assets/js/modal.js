const btns = document.querySelectorAll('.city-btn')
const modal = document.querySelector('.modal')

const closebtn = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.modal-container')

btns.forEach((element) => {
  element.addEventListener('click', (event) => {
    modal.classList.add('open')
  })
})

closebtn.addEventListener('click', (event) => {
    modal.classList.remove('open')
})
modal.addEventListener('click', () => {
  modal.classList.remove('open')
})

modalContainer.addEventListener('click', (event) => {
  event.stopPropagation()
})