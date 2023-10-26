const buttons = document.querySelector('#buttons')
const semaforo = document.querySelector('#semaforo')
let colorindex = 0
let intervalId = 0


const traffic = (event) => {
    stopautomatic()
    turnon[event.target.id]()


}

const nextindex = () => {
    if (colorindex < 2){
        colorindex++
    }else{
        colorindex = 0
    }
}




const changecolor = () => {
    const colors = ['Red', 'Yellow', 'Green']
    const color = colors[colorindex]
    turnon[color]()
    nextindex()


}


const stopautomatic = () => {
    clearInterval(intervalId)
}
 


const turnon = {
    'Red':      () => semaforo.src = './images/vermelho.png',
    'Green':    () => semaforo.src = './images/verde.png',
    'Yellow':   () => semaforo.src = './images/amarelo.png',
    'auto':     () => intervalId = setInterval( changecolor, 1000)

}

buttons.addEventListener('click', traffic)