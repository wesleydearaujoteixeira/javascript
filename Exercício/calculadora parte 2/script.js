
const calc = document.getElementById('Calc')
let = res = document.getElementById('me')
function calcular(n1, n2) {
    n1 =  parseFloat(document.getElementById('primeiro').value)
    n2 =  parseFloat(document.getElementById('segundo').value)

    let selector = document.getElementById('selecionado').value

    switch(selector){
        case '+':
            calculo = (n1 + n2)
            if(Number.isNaN(calculo)){
                res.innerHTML = 'Número inválido! insira um número novamente! '

            }else{
                res.innerHTML = ` A soma de ${n1} + ${n2} = ${calculo}`
                break

            }
            

        case '-':
            calculo = (n1 - n2)
            if(Number.isNaN(calculo)){
                res.innerHTML = 'Número inválido! insira um número novamente! '

            }else{
                res.innerHTML = ` A subtração de ${n1} - ${n2} = ${calculo}`
                break
            }
            

        case '*':
            calculo = (n1 * n2)
            if(Number.isNaN(calculo)){
                res.innerHTML = 'Número inválido! insira um número novamente! '
            }else{
                res.innerHTML = ` A multiplicação ${n1} x ${n2} = ${calculo}`
                break
            }
        

        case '/':
            calculo = (n1 / n2)
            if(Number.isNaN(calculo)){
                res.innerHTML = 'Número inválido! insira um número novamente! '

            }else{
                res.innerHTML = ` A divisão de ${n1} / ${n2} = ${calculo.toFixed(0)}`
            }
    
    
      
    }
}

calc.addEventListener('click', calcular)