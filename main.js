const dinoWord = document.querySelector("span.mess-with-me")
dinoWord.style.fontSize = '3em'

const par2 = document.querySelector("p.mess-with-me")
par2.style.background = 'green'

const img2 = document.getElementById("hide-me")
img2.style.display = "none"

const img1 = document.getElementById("triceratops")
img1.style.width = "324px"

const colorChange = function(){
    dinoWord.style.color = 'orange'
}
dinoWord.addEventListener('click', colorChange)

const colorBorder = function(){
    img1.style.border = "thin solid red"
}
img1.addEventListener('click', colorBorder)

const img4 = document.getElementById('feathers')
const halfTrans = function(){
    img4.style.opacity = '0.5'
}
img4.addEventListener('click', halfTrans)

const button1 = document.getElementById('toggle')
const lastSec = document.getElementById('row')
const changeBG = function(){
    lastSec.style.background==='black' ? lastSec.style.background='white' : lastSec.style.background='black'
}
button1.addEventListener('click', changeBG)

const img3 = document.getElementById('biggify')
const grow = function(){
    img3.style.width = '200px'
}
const shrink = function(){
    img3.style.width = '162px'
}
img3.addEventListener('mouseover', grow)
img3.addEventListener('mouseleave', shrink)