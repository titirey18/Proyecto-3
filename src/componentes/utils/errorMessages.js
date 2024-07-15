export const errorMenssage = (gallerySection) => {
  const error = document.createElement('p')
  error.textContent = 'No existe esa palabra'
  error.classList.add('Message-error')

  const newbutton = document.createElement('button')
  newbutton.textContent = 'Intenta con otra...'
  newbutton.addEventListener('click', () => {
    location.reload()
    window.scrollTo(0, 0)
  })

  gallerySection.appendChild(error)
  gallerySection.appendChild(newbutton)
}
