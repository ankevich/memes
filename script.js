// - скрыть фиолетовое окно +
// - выбрать рандомную картинку
// - показать картинку

const answerMeme = () => {
  document.getElementById('window').hidden = true
  document.getElementById('answer').hidden = false

  const memes = document.getElementsByTagName('img')
  const memesArray = Array.prototype.slice.call(memes)

  const maxMemes = memes.length
  const showIndex = Math.ceil(Math.random() * maxMemes) - 1

  memesArray.map((meme, index) => {
    if (index == showIndex) {
      meme.hidden = false
    } else {
      meme.hidden = true
    }
  })
}


const hideAnswer = () => {
  document.getElementById('window').hidden = false
  document.getElementById('answer').hidden = true
}