import { Buttonav } from './src/componentes/button/button'

Buttonav()

import './style.css'

const search = document.querySelector('.search')
const searchword = document.querySelector('.search-word')
const imagegalerry = document.querySelector('#galerry')

let query = 'Random/backgrounds'
let numberpage = getRandomPageNumber()

searchword.addEventListener('submit', (e) => {
  e.preventDefault()
  query = search.value
  imagegalerry.innerHTML = ''
  numberpage = 1
  performSearch(query, numberpage)
})

performSearch(query, numberpage)

function performSearch(query, page) {
  const gallerySection = document.querySelector('section')
  gallerySection.innerHTML = ''

  fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${query}&client_id=DKX8RFHjXo-PYoAveyuGV5a7gFdUXra8DvHlgOJPU8E`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.results.length) {
        printImages(res.results)
      } else {
        gallerySection.classList.add('gallery-error')
        errorMenssage()
      }
    })
}

const gallerySection = document.querySelector('section')
const printImages = (images) => {
  for (const image of images) {
    const img = document.createElement('img')
    img.src = image.urls.regular
    img.classList.add('style-img')
    img.title = `Photo by ${image.user.name}`
    gallerySection.appendChild(img)
  }
}

const errorMenssage = () => {
  const error = document.createElement('p')
  error.textContent = 'No se existe es palabra'
  error.classList.add('Message-error')

  const newbutton = document.createElement('button')
  newbutton.textContent = 'Intenta con otra palabra'
  newbutton.addEventListener('click', () => {
    location.reload()
    window.scrollTo(0, 0)
  })

  gallerySection.appendChild(error)
  gallerySection.appendChild(newbutton)
}

const Logo = document.querySelector('.logo')
const Inicio = document.querySelector('.inicio')

Inicio.addEventListener('click', () => {
  location.reload()
  window.scrollTo(0, 0)
})

Logo.addEventListener('click', () => {
  location.reload()
  window.scrollTo(0, 0)
})

const Divrecarga = document.querySelector('.Recarga')
const Recargabutton = document.createElement('button')

Recargabutton.textContent = 'Cargar más imagenes'
Recargabutton.classList.add('Buttonrecarga')

Divrecarga.appendChild(Recargabutton)

Recargabutton.addEventListener('click', () => {
  numberpage++
  performSearch(query, numberpage)
})

function getRandomPageNumber() {
  return Math.floor(Math.random() * 100) + 1
}
