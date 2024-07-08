import { button } from './src/componentes/button/button'
import { filter } from './src/componentes/filter/filter'
import './style.css'

const header = document.querySelector('#Home')
const imgLogo = document.createElement('img')
imgLogo.src = './src/assets/logo-icon.png'
imgLogo.style.width = '30px'
imgLogo.style.height = '30px'
imgLogo.alt = 'Logo Pinterest'
imgLogo.title = 'imagen Logo'

header.innerHTML = `
<div id="logo-container"></div>
${button('Inicio', 'm', 'primary', 'class')}
${button('Explorar', 'm', 'secondary', 'class')}
${button('Crear', 'm', 'secondary', 'class')}
${filter('🔎', 'Buscar...', 'm', 'search-input')}
 ${button(
   'src/assets/campana_icon_1_ft4xve_Thumbnail.png',
   'm',
   'white',
   'icono',
   'campana',
   'campana'
 )}
  ${button(
    'src/assets/mensaje_icon_1_edoigk.jpg',
    'm',
    'white',
    'icono',
    'mensaje',
    'mensajes'
  )}
${button('D', 's', 'terciary', 'last-button')}
`
const logoContainer = header.querySelector('#logo-container')
logoContainer.appendChild(imgLogo)
