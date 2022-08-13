'use strict'

var gElCanvas
var gCtx
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gPos
var gCanvasTop, gCanvasDown, gCanvasMiddle
var gFirstLine
var gSavedMemes = []
var gCurrMeme
var gImgsAfterFilter


function renderMeme() {
  gCurrMeme = getgMeme()
  const img = new Image()
  img.src = `img/meme-imgs/${gCurrMeme.selectedImgId + 1}.jpg`

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    gCurrMeme.lines.forEach((line) => {
      renderLine(line)
    })
  }
}


function renderLine(line) {
  gCtx.beginPath()
  gCtx.font = `${line.size}px ${line.font} `
  gCtx.fillStyle = line.color
  gCtx.textAlign = line.align
  gCtx.lineWidth = 1
  gCtx.fillText(line.txt, 200, line.pos.y)
  gCtx.closePath()
}

function onRenderSavedMemes(){
  renderSavedMemes()
  toggleMenu()

}

function onRandomMeme() {
  randomMeme()
  renderMeme()
  hideGallery()
}

function onSetLineText(elUserText) {
  updateMemeUserText(elUserText.value)
  renderMeme()
}

function onChangeColor(elUserColor) {
  updateMemeLineColor(elUserColor.value)
  renderMeme()
}

function onChangeFontSize(elUserFontSize) {
  updateMemeFontSize(elUserFontSize)
  renderMeme()
}

function onMoveText(elUserSideDecition) {
  MoveText(elUserSideDecition)
  renderMeme()
}

function onDeleteLine() {
  deleteLine()
  updatePlaceHolder()
  renderMeme()
}

function onChangeFontFamily(font) {
  ChangeFontFamily(font.value)
  renderMeme()
}

function onMoveTextX(upOrDown) {
  updateLinePos(0, upOrDown,)
  renderMeme()
}

function onAddLine() {
  addLine()
  switchLine()
  updatePlaceHolder()
  renderMeme()
}

function onSwitchLine() {
  switchLine()
  updatePlaceHolder()
  renderMeme
}

function onSaveMeme() {
  // gSavedMemes.push(gCurrMeme)
  renderSavedMemes()
  _saveMemsToStorage()
}

function onDeleteMeme() {
  
  if(!confirm('Are you sure?')) return
  deleteMeme(getCurrCode())
  renderSavedMemes()
}

function deleteMeme(memCode) {
  const memIndex = gSavedMemes.findIndex(mem => memCode === mem.code )
  gSavedMemes.splice(memIndex, 1)
  _saveMemsToStorage()
}

function getCurrCode(){
  return gCurrMeme.code
}



