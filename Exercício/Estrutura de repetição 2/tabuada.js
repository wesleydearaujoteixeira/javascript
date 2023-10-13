function tabuada() {
    var numero = Number(document.body.querySelector('#tabuada').value)
    var resultado = document.body.querySelector('#resultado')
    resultado.innerHTML = ` Esse é o numero ${numero}`
    resultado.style.background = 'green'

}