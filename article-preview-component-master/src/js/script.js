const shareButton = document.querySelector('.share-button')
const shareBox = document.querySelector('.share-box')
const shareIcon = shareButton.querySelector('i')
shareButton.addEventListener('click', () => {
  if(shareBox.classList.contains('hidden')) {
    shareBox.classList.remove('hidden')
    shareBox.classList.add('flex')
    shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)'
    shareIcon.style.color = '#ffffff'    
  } else {
    shareBox.classList.remove('flex')
    shareBox.classList.add('hidden')
    shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)'
    shareIcon.style.color = 'hsl(214, 17%, 51%)' 
  }
})