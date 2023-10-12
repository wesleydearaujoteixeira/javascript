function carregar() {
    var resultado = document.body.querySelector('#res')
    resultado.innerHTML = 'Tá funcionando'
    var nome = document.body.querySelector('#inome')
    var nascimento = Number(document.body.querySelector('#nascimento').value)
    var data = new Date()
    var anoatual = data.getFullYear()
    var idade = anoatual - nascimento
    var alistamento = nascimento + 18
    var passou = anoatual - alistamento 
    var faltachegar = alistamento - anoatual 
    if(resultado.style.display == 'none'){
    resultado.style.display = 'block'
    resultado.innerHTML = ` Você se chama ${nome.value} e você tem ${idade} anos, Em ${anoatual}`
    }else{
        resultado.style.display = 'none'
    }

    if (nascimento == 0 || nascimento > anoatual){
        window.alert('Erro, tente Novamente!')
    
    }else if(idade > 18){
        resultado.innerHTML = ` Você tem  ${idade} anos, você nasceu em ${nascimento} seu alistamento foi em ${alistamento} e passou ${passou} anos. Compareça a instituição imediatamente!`
        resultado.style.background = 'red'

    }else if (idade < 18) {
        resultado.innerHTML = ` Você tem ${idade} anos, você nasceu em ${nascimento} ainda falta ${faltachegar} anos. Seu alistamento será em ${alistamento}`
        resultado.style.background = 'green'


    }

  
}
