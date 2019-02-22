var button = document.querySelector('button')
var body = document.querySelector('body')

button.addEventListener('click', cheerUp)

function cheerUp() {
  body.classList.toggle('no-more-tears')
  if (button.textContent == 'Cheer up') {
    button.textContent = 'Get sad'
  } else {
    button.textContent = 'Cheer up'
  }
}
