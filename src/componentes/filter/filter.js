import './filter.css'

export const filter = (
  emoji = '',
  placeholder = 'Buscar',
  size = 'm',
  extraClass = ''
) => {
  return `
    <div class="filter-container ${size} ${extraClass}">
      ${emoji ? `<span class="filter-emoji">${emoji}</span>` : ''}
      <input class="main-filter" type="text" placeholder="${placeholder}" />
    </div>
  `
}
