import { Headernav } from './src/componentes/Header/Header'
import { performSearch } from './src/componentes/Services/performSearch'
import { getRandomPageNumber } from './src/componentes/utils/pageNumber'
import { printImages } from './src/componentes/utils/PrintImg'
import { errorMenssage } from './src/componentes/utils/errorMessages'
import './style.css'

Headernav()

const search = document.querySelector('.search')
const searchword = document.querySelector('.search-word')
const imagegallery = document.querySelector('#gallery')

let query = 'Random/backgrounds'
let numberpage = getRandomPageNumber()

searchword.addEventListener('submit', (e) => {
  e.preventDefault()
  query = search.value
  search.value = ''
  imagegallery.innerHTML = ''
  numberpage = 1
  performSearch(query, numberpage).then((res) => {
    if (res.results.length) {
      printImages(res.results, imagegallery)
    } else {
      imagegallery.classList.add('gallery-error')
      errorMenssage(imagegallery)
    }
  })
})

performSearch(query, numberpage).then((res) => {
  if (res.results.length) {
    printImages(res.results, imagegallery)
  } else {
    imagegallery.classList.add('gallery-error')
    errorMenssage(imagegallery)
  }
})

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
  performSearch(query, numberpage).then((res) => {
    if (res.results.length) {
      printImages(res.results, imagegallery)
    } else {
      imagegallery.classList.add('gallery-error')
      errorMenssage(imagegallery)
    }
  })
})
