const pausar = document.getElementById('pausar')
const res = document.getElementById('res')
const iniciar = document.getElementById('iniciar')
const zerar = document.getElementById('zerar')
let zero = ''


const initial = () => {
    let data = new Date()
     let hora =  data.getHours()
     let minutes = data.getMinutes()
     let seconds = data.getSeconds()

     return res.innerHTML = `${hora}:${minutes}:${seconds}`

    
}

function intervalo() {
    evento = setInterval(function(){
        initial()
    }, 1000)
}


iniciar.addEventListener('click', function(){
    intervalo()

})


pausar.addEventListener('click', () => {
      clearInterval(evento)
})


zerar.addEventListener('click', function(){
    clearInterval(evento)
    return  res.innerHTML = `00:00:00`
    
})