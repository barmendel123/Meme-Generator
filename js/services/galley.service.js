'use strict'

var gImgs = [
    { id: 0, url: 'img/meme-imgs/1.jpg', keywords: ['men', 'funny', 'president'], myMeme: false },
    { id: 1, url: 'img/meme-imgs/2.jpg', keywords: ['animal', 'cute', 'dog'], myMeme: false },
    { id: 2, url: 'img/meme-imgs/3.jpg', keywords: ['cute', 'animal', 'baby', 'dog'], myMeme: false },
    { id: 3, url: 'img/meme-imgs/4.jpg', keywords: ['animal', 'cute', 'cat'], myMeme: false },
    { id: 4, url: 'img/meme-imgs/5.jpg', keywords: ['baby', 'funny'], myMeme: false },
    { id: 5, url: 'img/meme-imgs/6.jpg', keywords: ['funny', 'men'], myMeme: false },
    { id: 6, url: 'img/meme-imgs/7.jpg', keywords: ['funny', 'cute', 'baby'], myMeme: false },
    { id: 7, url: 'img/meme-imgs/8.jpg', keywords: ['funny', 'men', 'actor'], myMeme: false },
    { id: 8, url: 'img/meme-imgs/9.jpg', keywords: ['cute', 'baby'], myMeme: false },
    { id: 9, url: 'img/meme-imgs/10.jpg', keywords: ['funny', 'men', 'president'], myMeme: false },
    { id: 10, url: 'img/meme-imgs/11.jpg', keywords: ['men', 'catroon'], myMeme: false },
    { id: 11, url: 'img/meme-imgs/12.jpg', keywords: ['men'], myMeme: false },
    { id: 12, url: 'img/meme-imgs/13.jpg', keywords: ['actor'], myMeme: false },
    { id: 13, url: 'img/meme-imgs/14.jpg', keywords: ['animal', 'dog', 'funny'], myMeme: false },
    { id: 14, url: 'img/meme-imgs/15.jpg', keywords: ['cartoon'], myMeme: false },
    { id: 15, url: 'img/meme-imgs/16.jpg', keywords: ['actor'], myMeme: false },
    { id: 16, url: 'img/meme-imgs/17.jpg', keywords: ['presidnt', 'men'], myMeme: false },
    { id: 17, url: 'img/meme-imgs/18.jpg', keywords: ['funny', 'cartoon'], myMeme: false },
  ]
  
function showGallery() {
    document.querySelector('.gallery-container').style.display = 'grid'
    document.querySelector('.filters-container').style.display = 'flex'
    document.querySelector('.edit-container').style.display = 'none'
}

function hideGallery() {
    document.querySelector('.gallery-container').style.display = 'none'
    document.querySelector('.filters-container').style.display = 'none'
    document.querySelector('.edit-container').style.display = 'flex'
}

function setImgsFilter(keyWord) {
  var filteredImgs = []
  var imgs = getImages()
  imgs.forEach(img => {
    if (img.keywords.includes(keyWord.toLowerCase())) filteredImgs.push(img)
  })
  return filteredImgs
}

function increaseFontSize(filterByKey){
  switch (filterByKey) {
    case 'funny':
      var txt = document.querySelector('.funny');
      var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      break;
    case 'animal':
      var txt = document.querySelector('.animal');
      var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      break;
    case 'men':
      var txt = document.querySelector('.men');
      var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      break;
    case 'actor':
      var txt = document.querySelector('.actor');
      var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      break;
    case 'cute':
      var txt = document.querySelector('.cute');
      var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      break;
  
    default:
      return
  }
  var currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 1) + 'px';
}


