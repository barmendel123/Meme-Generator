'use strict'



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
  gCtx.textAlign = line.align
  gCtx.lineWidth = 1
  gCtx.font = `${line.size}px ${line.font}` 
  gCtx.fillStyle = line.color
  gCtx.fillText(line.txt, line.pos.x, line.pos.y)
  gCtx.strokeStyle = line.strokeStyle
  gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
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
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onChangeColor(elUserColor) {
  updateMemeLineColor(elUserColor.value)
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onChangeFontSize(elUserFontSize) {
  updateMemeFontSize(elUserFontSize)
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onMoveText(elUserSideDecition) {
  MoveText(elUserSideDecition)
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onDeleteLine() {
  deleteLine()
  updatePlaceHolder()
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onChangeFontFamily(font) {
  ChangeFontFamily(font.value)
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onMoveTextX(upOrDown) {
  updateLinePos(0, upOrDown,)
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onAddLine() {
  addLine()
  switchLine()
  updatePlaceHolder()
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onSwitchLine() {
  switchLine()
  updatePlaceHolder()
  if(gCurrMeme['url'].myMeme) renderMyMeme()
  else renderMeme()
}

function onSaveMeme() {
  gSavedMemes.push(gCurrMeme)
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



