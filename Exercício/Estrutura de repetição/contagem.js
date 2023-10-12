
function contar(){
    var termo = Number(document.body.querySelector('#inicio').value)
    var r = Number(document.body.querySelector('#passo').value)
    var fim = Number(document.body.querySelector('#fim').value)
    var contagem = document.body.querySelector('#res')
    while(termo <= fim){
        contagem.innerHTML += ` ${termo} `
        termo += r 
        

    }

    
    
}