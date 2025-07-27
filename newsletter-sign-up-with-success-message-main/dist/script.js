const main = document.querySelector('main')
const section = document.querySelector('section')
const form = main.querySelector('form');
const dismiss = section.querySelector('button')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  main.classList.toggle('!hidden')
  section.classList.toggle('!grid')
})

dismiss.addEventListener('click', () => {
  main.classList.toggle('!hidden')
  section.classList.toggle('!grid')
})