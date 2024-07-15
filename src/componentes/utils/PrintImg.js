export const printImages = (images, gallerySection) => {
  for (const image of images) {
    const img = document.createElement('img')
    img.src = image.urls.regular
    img.classList.add('style-img')
    img.title = `Photo by ${image.user.name}`
    gallerySection.appendChild(img)
  }
}
