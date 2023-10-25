const ligar = document.querySelector('#ligar')
const desligar = document.querySelector('#desligar')
const lamp = document.querySelector('#lamp')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
} 


function turnon(){
    if (!isLampBroken ()){
        lamp.src = './images/lampada_ligada.png'

    }
    
}

function turnoff(){
    if (!isLampBroken ()){
        lamp.src = './images/lampada_desligada.png'

    }
}


function quebrar(){
    lamp.src = './images/lampada_quebrada.png'
}


lamp.addEventListener('mouseenter', turnon)
lamp.addEventListener('mouseout', turnoff)
ligar.addEventListener('click', turnon)
desligar.addEventListener('click', turnoff)
lamp.addEventListener('click', quebrar)


  

