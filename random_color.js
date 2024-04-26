const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green','blue','pink','purple','yellow','black','white','aqua']

body.style.background = 'yellow'

button.addEventListener('click',changeBg)

function changeBg()
{
    const colorIndex = parseInt(Math.random() *color.length)
    body.style.background = color[colorIndex]
}