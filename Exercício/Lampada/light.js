const turn = document.querySelector('#TurnOnOff')
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

function turnOnOff (){
    if( turn.innerHTML == 'Ligar'){
        turnon()
        turn.innerHTML = 'Desligar'
    }else{
        (turn.innerHTML == 'Desligar')
        turnoff()
        turn.innerHTML = 'Ligar'
    }
    
    
}




lamp.addEventListener('mouseenter', turnon)
lamp.addEventListener('mouseout', turnoff)
turn.addEventListener('click', turnOnOff)
lamp.addEventListener('click', quebrar)


  

