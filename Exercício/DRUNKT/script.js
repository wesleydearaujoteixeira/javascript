'use strict';

    const sons = {
        'A': 'boom.wav',
        'S': 'clap.wav',
        'D': 'hihat.wav',
        'F': 'kick.wav',
        'G': 'openhat.wav',
        'H': 'ride.wav',
        'J': 'snare.wav',
        'K': 'tink.wav',
        'L': 'tom (1).wav'
    }

    const criarDiv = (text) => {
        const div = document.createElement('div')
        div.classList.add('key')
        div.textContent = text
        div.id = text
        document.getElementById('container').appendChild(div)
    }

const exibirsons = (s) => Object.keys(s).forEach(criarDiv)



const tocarsom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play()
}

exibirsons(sons)



const adicionarEfeito = (letra) => {
    document.getElementById(letra).classList.add('active')
}

const removerEfeito = (letra) => {
    const div = document.getElementById(letra)
    const tiraroefeito = () => {
         document.getElementById(letra).classList.remove('active')
        
    }
    div.addEventListener('transitionend', tiraroefeito)
}

const ativardiv = (evento) => {
    let letra = ''
    if (evento.type == 'click'){
         letra = evento.target.id
    }else{
         letra = evento.key.toUpperCase()
    }
    const letrapermitida = sons.hasOwnProperty(letra)
    if(letrapermitida){
        adicionarEfeito(letra)
        tocarsom(letra)
        removerEfeito(letra)
        

    }
   
}




document.getElementById('container').addEventListener('click', ativardiv)

