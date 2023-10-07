function idade(){
    var nascimento = document.body.querySelector('input#ano')
    var res = document.body.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    if (nascimento.value.length == 0 || nascimento.value > ano){
        window.alert(' ERRO tente Novamente! ')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(nascimento.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if ( sexo[0].checked){
            gênero = 'Masculino'
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', 'meninobebe.jpg')
                document.body.style.background = 'green'
            }else if(idade > 10 && idade <= 17){
                // adolescente
                img.setAttribute('src', 'jovemadulto.jpg')
            }else if (idade >= 18 && idade < 50){
                // adulto
                img.setAttribute('src', 'homemadulto.jpg')
            }else if (idade > 60){
                // idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }
        }else if (sexo[1].checked){
            gênero = 'Feminino'
            if (idade >= 0 && idade <= 10){
                // criança 
                img.setAttribute('src', 'meninabebe.jpg')
                document.body.style.background = 'green'
            }else if(idade > 10 && idade <= 17){
                // adolescente
                img.setAttribute('src', 'jovemadulta.jpg')
            }else if (idade >= 18 && idade < 60){
                // adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }else if (idade > 60){
                // idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do gênero ${gênero} e ele(a) tem ${idade} anos`
        res.appendChild(img)
        
    }
}