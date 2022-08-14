'use strict'
const STORAGE_KEY = 'memDB'
var gMeme
const gKeywordSearchCountMap = { 'funny': 8, 'animal': 4, 'men': 7,
'actor': 3, 'cute': 4, 'president': 3,
'dog': 4, 'baby': 4, 'cat': 1, 'cartoon': 3 }

function getgMeme() {
  return gMeme
}

function renderSavedMemes() {
  var savedMems = gSavedMemes

  const savedHTML = savedMems.map(mem =>
    `<div class="img-container" onClick="onImageSelect(${mem['url'].id})">
    <img class="gallery-img" src="${mem['url'].url}">
    </div>`
  )

  showGallery()
  document.querySelector('.delete-btn').style.display = 'block'
  document.querySelector('.gallery-container').innerHTML = savedHTML.join('')
}


function restartCanvasLocations() {
  gCanvasDown = { x: gElCanvas.width / 2, y: gElCanvas.height - 50 }
  gCanvasMiddle = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
  gCanvasTop = { x: gElCanvas.width / 2, y: gElCanvas.height / 10 }

}

function randomMeme() {
  const imgCount = getImages().length
  // console.log(imgCount);
  var selectedImgId = getRandomIntInclusive(1, imgCount)
  // console.log(selectedImgId);
  var sentenceArr = []

  sentenceArr.push(createLine({
    txt: getRandomStr(),
    size: getRandomIntInclusive(20, 28),
    align: 'center',
    color: getRandomColor(),
    font: 'Impact',
    pos: { x: gCanvasTop.x, y: gCanvasTop.y }
  }))

  if (getRandomIntInclusive(0, 1)) { // 50% will be second line
    sentenceArr.push(createLine({
      txt: getRandomStr(),
      size: getRandomIntInclusive(25, 28),
      align: 'center',
      color: getRandomColor(),
      font: 'Impact',
      pos: { x: gCanvasDown.x, y: gCanvasDown.y }
    }))
  }
  gMeme = createMeme({ selectedImgId: selectedImgId, selectedLineIdx: 0, lines: sentenceArr })
}

function createMeme({ selectedImgId, lines = [createLine({})] }) {
  var meme = {
    selectedImgId: selectedImgId,
    selectedLineIdx: 0,
    code: makeId(),
    lines: lines,
    url: gImgs[selectedImgId]
  }
  // console.log(meme);
  return meme
}

function getImages() {
  return gImgs
}



function updateMemeUserText(userTxt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = userTxt
}

function updateMemeLineColor(userColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = userColor
}

function updateMemeFontSize(userFontSize) {
  if (gMeme.lines[gMeme.selectedLineIdx].size < 20 && userFontSize < 0) return

  gMeme.lines[gMeme.selectedLineIdx].size += userFontSize
}

function MoveText(alignTxt) {
  const currLine = gMeme.lines[gMeme.selectedLineIdx]
  currLine.align = alignTxt
}

function deleteLine() {
  if (gMeme.lines.length === 0) return
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
  if (gMeme.selectedLineIdx != 0) gMeme.selectedLineIdx--
}

function ChangeFontFamily(fontFamily) {
  gMeme.lines[gMeme.selectedLineIdx].font = fontFamily
}

function updateLinePos(x, y) {
  gMeme.lines[gMeme.selectedLineIdx].pos.y += y
}

function addLine() {
  var posY
  var posX = gElCanvas.width / 2
  if (gMeme.lines.length === 0) posY = gCanvasTop.y
  if (gMeme.lines.length === 1) posY = gCanvasDown.y
  if (gMeme.lines.length > 1) posY = gCanvasMiddle.y
  gMeme.lines.push(createLine({ pos: { x: posX, y: posY } }))
}

function createLine({ txt =  'Enter text...', size = 28, align = 'center', color = 'blue', strokeStyle = 'black', font = 'Impact' , pos = { x: 200, y: 50 } }) {
  return {
    txt,
    size,
    align,
    color,
    strokeStyle,
    font,
    pos,
  }
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
  else gMeme.selectedLineIdx++
}

function updatePlaceHolder() {
  if (gMeme.lines[gMeme.selectedLineIdx] === undefined) {
    document.querySelector('.meme-text-input').value = `Press '+' to add line :)`
  }
  else document.querySelector('.meme-text-input').value = gMeme.lines[gMeme.selectedLineIdx].txt
}

function _saveMemsToStorage() {
  saveToStorage(STORAGE_KEY, gSavedMemes)
}





