import './button.css'

export const button = (
  text = 'Inicio',
  size = 'm',
  color = 'white',
  extraClass = '',
  altText = '',
  tilteText = ''
) => {
  const isImage = text.match(/\.(jpeg|jpg|gif|png)$/) !== null
  return isImage
    ? `<button class="main-button ${size} ${color} ${extraClass}"><img src="${text}" alt="${altText}" title="${tilteText}" class="button-img"/></button>`
    : `<button class="main-button ${size} ${color} ${extraClass}">${text}</button>`
}
