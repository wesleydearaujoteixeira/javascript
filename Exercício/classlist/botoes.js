const light = document.querySelector('#btn-light')
const dark = document.querySelector('#btn-dark')
const tela = document.querySelector('#tela')
const imagem = document.querySelector('#img')


light.addEventListener('click', () =>{
    tela.classList.add('light')
    tela.classList.remove('dark')
    

})

dark.addEventListener('click', () => {
    tela.classList.remove('light')
    tela.classList.add('dark')
    
})

imagem.addEventListener('click', () => {
    let i = document.createElement('img')
    i.src = './images/dread.jpg'
    i.style.width = '600px'
    i.style.height = '600px'
    imagem.append(i)
    imagem.remove(x)
})

imagem.addEventListener('mouseout', () => {
    let x = document.createElement('img')
    x.src = './images/alerquina.jpg'
    x.style.width = '600px'
    x.style.height = '600px'
    imagem.append(x)
   
    
})