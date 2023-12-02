const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const resposta = document.getElementById('res')
const button = document.getElementById('btn')

button.addEventListener('click', () => {

    if (altura.value === "" || peso.value === ""){
        alert('ERRO, n deixe campos vázios! ')
    }else if(isNaN(altura.value) || isNaN(peso.value)){
        alert('insira dados válidos')

    }else{
        resposta.classList.add('resp')
        const res = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))
        const imc = res.toFixed(0)
        if (imc <= 18.5){
            resposta.innerHTML = `Seu imc é de ${imc} você esta Abaixo do peso`
        }else if(imc > 18.5 && imc <= 24.9){
            resposta.innerHTML = `Seu imc é de ${imc} Peso normal`

        }else if (imc > 24.9 && imc <= 29.9){
            resposta.innerHTML = `Seu imc é de ${imc} Sobrepeso`

        }else if(imc > 29.9 && imc <= 34.9){
            resposta.innerHTML = `Seu imc é de ${imc} Obesidade grau 1`

        }else if (imc > 34.9 && imc <= 39.9){
            resposta.innerHTML = `Seu imc é de ${imc} Obesidade grau 2`

        }else if (imc >= 40){
            resposta.innerHTML = `Seu imc é de ${imc} Obesidade grau 3`

        }
        
    }
       
    }
)