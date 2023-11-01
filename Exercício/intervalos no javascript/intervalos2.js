const title = document.getElementsByTagName('h1')[0]
title.textContent = ''
function ChangedtheWord(){
    const title = document.getElementsByTagName('h1')[0]
    title.innerHTML += ''
    title.innerHTML += ' Hello World! '
}

setTimeout(() => {
    ChangedtheWord()
}, 5000)




const btn  = document.querySelector('#btn-click')
const start = document.querySelector('#btn-start')
let value = document.getElementById('title')
value.innerHTML = ''
let cont = 0 

function contador() {
    value.innerHTML = ` A contagem começou: ${cont}`
    value.style.marginRight = '30px'
}

let interval = setInterval(() => {
 contador() 
 cont++  
}, 1000);

btn.addEventListener('click', () => {
    clearInterval(interval)
})