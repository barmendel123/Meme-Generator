'use strict'


function onInit() {
  gElCanvas = document.querySelector('.edit-meme-canvas')
  gCtx = gElCanvas.getContext('2d')
  restartCanvasLocations()
  renderGallery()
  var memes = loadFromStorage(STORAGE_KEY)
  if (memes) gSavedMemes = memes
}

function toggleMenu() {
  document.body.classList.toggle('menu-opened')
}

function onReplaceSiteToLinkedin() {
  toggleMenu()
  window.open("https://www.linkedin.com/in/bar-mendel-a27805218/",
    "_blank")
}

function onReplaceSiteToGithub(){
  window.open("https://github.com/barmendel123",
    "_blank")
}

