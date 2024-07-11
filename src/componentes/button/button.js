import './button.css'

export const Buttonav = () => {
  const header = document.querySelector('Header')
  const ul = document.createElement('ul')
  const Inicio = document.createElement('li')
  const Explorar = document.createElement('li')
  const crear = document.createElement('li')
  const buscador = document.createElement('form')
  const Filtro = document.createElement('input')
  const notificaciones = document.createElement('img')
  const mensajes = document.createElement('img')
  const perfil = document.createElement('img')
  const imgLogo = document.createElement('img')
  imgLogo.src = './assets/logo-icon.png'
  imgLogo.classList.add('logo')
  imgLogo.alt = 'Logo Pinterest'
  imgLogo.title = 'imagen Logo'
  Inicio.textContent = 'Inicio'
  Inicio.classList.add('inicio')
  Explorar.textContent = 'Explorar'
  crear.textContent = 'Crear'
  buscador.classList.add('search-word')
  buscador.textContent = '🔎 '
  Filtro.type = 'text'
  Filtro.placeholder = ' Buscar...'
  Filtro.classList.add('search')
  notificaciones.src = 'assets/notificacion.png'
  notificaciones.alt = 'Notificaciones'
  notificaciones.title = 'Notificaciones'
  mensajes.src = 'assets/mensaje_icon_1_edoigk_Thumbnail.jpg'
  mensajes.alt = 'mensajes'
  mensajes.title = 'mensajes'
  perfil.src = 'assets/User.png'
  perfil.alt = 'Usuario'
  perfil.title = 'Usuario'

  header.append(imgLogo)
  header.append(ul)
  ul.appendChild(Inicio)
  ul.appendChild(Explorar)
  ul.appendChild(crear)
  header.appendChild(buscador)
  buscador.appendChild(Filtro)
  header.appendChild(notificaciones)
  header.appendChild(mensajes)
  header.appendChild(perfil)
}
