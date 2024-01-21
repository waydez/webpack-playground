import bg from './assets/bg.jpg'
import style from './index.scss'

// const img = new Image()
// img.src = bg
const styleElem = document.createElement('style')
styleElem.append(style)

const img = document.createElement('img')
img.className = 'test'
img.src = bg

const root = document.getElementById('app')
root.append(img)

const title = '这里是 index.js！'

console.log(`Hi!, ${title}`)
