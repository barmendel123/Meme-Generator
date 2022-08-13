'use strict'


function renderGallery(imgs = getImages()) {

  const imgsHTML = imgs.map(img =>
    `<div class="img-container" onClick="onImageSelect(${img.id})">
         <img  class="gallery-img" src="${img.url}">
         </div>` )

  document.querySelector('.gallery-container').innerHTML = imgsHTML.join('')
}


function onGalleryShow() {
  renderGallery()
  document.querySelector('.delete-btn').style.display = 'none'
  toggleMenu()
  showGallery()
}

function onImageSelect(imgId) {
  gMeme = createMeme({ selectedImgId: imgId })
  renderMeme()
  hideGallery()
}

function onKeywordList(word) {
  const keys = Object.keys(gKeywordSearchCountMap)
  keys.filter(key => key.includes(word.value))

  const filterImgsHTML = keys.map(key =>
    `<option value="${key}">`)
  document.getElementById('search-list').innerHTML = filterImgsHTML.join('')
}


function onSetFilterByKeyword(elKeyWord) {
  console.log('elKeyWord', elKeyWord.value);
  gImgsAfterFilter = setImgsFilter(elKeyWord.value)
  // console.log(imgsAfterFilter);
  renderGallery(gImgsAfterFilter)
}



function onIncreaseFontSizeAndFilter(filterByKey) {
  // console.log(filterByKey.value);
  gImgsAfterFilter = setImgsFilter(filterByKey.value)
  renderGallery(gImgsAfterFilter)
  increaseFontSize(filterByKey.value)
}






