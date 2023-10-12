function calculadora() {
    var n1 = Number(document.body.querySelector('#numero1').value)
    var n2 = Number(document.body.querySelector('#numero2').value)
    var res = document.body.querySelector('#resposta')
    res.innerHTML = `Você digitou o número ${n1} e o número ${n2}`

}

function soma() {
    var n1 = Number(document.body.querySelector('#numero1').value)
    var n2 = Number(document.body.querySelector('#numero2').value)
    var res = document.body.querySelector('#resposta')
    var s = n1 + n2
    res.innerHTML = ` A soma de ${n1} + ${n2} = ${s}`
    res.style.background = 'red'

}

function subtrair() {
    var n1 = Number(document.body.querySelector('#numero1').value)
    var n2 = Number(document.body.querySelector('#numero2').value)
    var res = document.body.querySelector('#resposta')
    var s = n1 - n2
    res.innerHTML = ` A subtração de ${n1} - ${n2} = ${s}`
    res.style.background = 'blue'
}

function multiplicar(){
    var n1 = Number(document.body.querySelector('#numero1').value)
    var n2 = Number(document.body.querySelector('#numero2').value)
    var res = document.body.querySelector('#resposta')
    var s = n1 * n2 
    res.innerHTML = ` A multiplicação de ${n1} * ${n2} = ${s}`


}
function dividir(){
    var n1 = Number(document.body.querySelector('#numero1').value)
    var n2 = Number(document.body.querySelector('#numero2').value)
    var res = document.body.querySelector('#resposta')
    var s = n1 / n2 
    res.innerHTML = ` A divisão de ${n1} / ${n2} = ${s}`

    
}