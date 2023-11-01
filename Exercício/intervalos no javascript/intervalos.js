

const h1 = document.getElementsByTagName('h1')[0]
const div = document.getElementsByTagName('div')[0]
const imagem = document.getElementById('imagem')
function iniciar () {
    h1.innerHTML = ''
    setInterval(() => {
        h1.innerHTML += ' Olá Mundo '
    }, 1000)

}

 div.addEventListener('click', iniciar) 

function createImage() {
    let image = document.createElement('img')
    image.src = './images/as-brasileirinhas-300x169.jpg'
    image.style.width = '450px'
    image.style.height = '450px'
    div.appendChild(image)
    h1.style.marginRight = '60px'
    div.style.display = 'flex'
    div.style.justify = 'center'
    div.style.alignItems = 'center'
   

}

function Changethecolor () {
    div.style.background = 'blue'
    h1.innerHTML = ' Mulher sendo estuprada '
    h1.style.color = 'white'


}

function BackGround () {
    imagem.setAttribute('src', './images/dreadhot.webp')
    h1.style.color =  'red'
    let pa = document.createElement('p')
    pa.innerHTML = 'Criei um Paragrafo'
    pa.style.color = 'black'
    h1.appendChild(pa)
   
}



div.addEventListener('mouseenter', Changethecolor)
div.addEventListener('click', createImage)
div.addEventListener('mouseout', BackGround) 