
const imagem = document.getElementById('beiçola')
const div = document.getElementsByTagName('div')[0]


function criandoUmaimagem(){
    div.value = ''
    let i = document.createElement('img')
    i.src = './images/catarina-paulino.jpg'
    div.appendChild(i)
    i.value = ''

}
   
div.addEventListener('mouseenter',criandoUmaimagem)




function ChangeTheimage() {
    imagem.setAttribute('src', './images/Mia Khalifa.jpeg')
}

imagem.addEventListener('click', ChangeTheimage)


function createImage() {
    let image = document.createElement('img')
    image.setAttribute('src', './images/barbieEvans.webp')
    div.appendChild(image)
}

div.addEventListener('mouseleave', createImage)