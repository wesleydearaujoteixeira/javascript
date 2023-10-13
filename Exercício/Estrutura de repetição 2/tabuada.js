function tabuad() {
    var numero = Number(document.body.querySelector('#tabuada').value)
    var resultado = document.body.querySelector('#resultado')
    if (numero == 0){
        alert('Erro de digitação! ')
    }else{
        resultado.innerHTML = ''
        for(var c = 1 ; c <= 10; c++){
            resultado.innerHTML += ` ${c} x ${numero} ${numero * c}<br>`

        }
    }
}