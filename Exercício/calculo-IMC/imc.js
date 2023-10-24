



function IMC(){
    let nome = document.getElementById('nome')
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let calcular = document.querySelector('#calc')
    let res = document.getElementById('res')
    if (altura.length === 0 && peso.length === 0 || nome.value.length === 0){
        alert('Erro digite algo para continuar')
    }else{
       let imc = peso / (altura ** 2)
        if(imc < 16){
            res.innerText = `Seu IMC é ${imc.toFixed(1)} você está abaixo do peso`

       }else if (imc >= 17 && imc <= 18){
            res.innerText = `Seu IMC é ${imc.toFixed(1)} Abaixo do peso`
       
       }else if (imc > 18 && imc <= 24){
            res.innerText = `Seu IMC é ${imc.toFixed(1)} Seu peso é normal`

       }else if( imc > 24 && imc < 30 ){
            res.innerText = `Seu IMC é ${imc.toFixed(1)} Acima do peso`
       }else if(imc > 30 && imc < 35){
            res.innerText = `Seu IMC é ${imc.toFixed(1)} Obesidade grau 1`
        
       }else if(imc > 35 && imc < 40){
            res.innerText = `Seu IMC é ${imc.toFixed(1)} Obesidade grau 2`
       }else{
          res.innerText = `Seu IMC é ${imc.toFixed(1)} Obesidade grau 3`
       }

    }


}


calc.addEventListener('click', IMC);