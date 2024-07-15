const ID_API_KEY = 'DKX8RFHjXo-PYoAveyuGV5a7gFdUXra8DvHlgOJPU8E'

export const performSearch = (query, page) => {
  return fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${query}&client_id=${ID_API_KEY}`
  ).then((res) => res.json())
}
