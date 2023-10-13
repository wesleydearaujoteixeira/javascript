
function contar(){
    var termo = Number(document.body.querySelector('#inicio').value)
    var r = Number(document.body.querySelector('#passo').value)
    var fim = Number(document.body.querySelector('#fim').value)
    im2 = fim + 1
    var contagem = document.body.querySelector('#res')
    if(r == 0 || termo == 0 || fim == 0 ){
    window.alert('Erro! Tente Novamente!')
    }else if (fim > termo){
        while(termo < fim){
            contagem.innerHTML += `👉${termo} `
            termo += r  
    }contagem.innerHTML += `🏁 `
    
    }else if (termo > fim){
        while(termo > fim){
            contagem.innerHTML += `👉${termo} `
            termo -= r  
    }contagem.innerHTML += `🏁 `
   
    }

}