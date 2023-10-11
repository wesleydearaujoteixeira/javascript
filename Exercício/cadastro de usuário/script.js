function carregar() {
    var data = new Date()
    var ano = data.getFullYear()
    var resultado = document.body.querySelector('#res')
    var nome = document.body.querySelector('#inome')
    var sobrenome = document.body.querySelector('#isobrenome')
    var estudo = document.body.querySelector('#iestudo')
    var nascimento = document.body.querySelector('#inascimento')
    var idade = ano - nascimento.value
    resultado.style.background = 'violet'
    resultado.innerHTML = `Seu nome: ${nome.value} sobrenome: ${sobrenome.value}, você estuda ${estudo.value} Sua idade é ${idade} anos`
}