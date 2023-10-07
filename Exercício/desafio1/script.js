function carregar(){
    var msg = document.body.querySelector('#msg')
    var img = document.body.querySelector('#imagem')
    img.src = 'tarde.jpg'
    var data = new Date()
    var horas = 6
    msg.innerHTML = ` são ${horas} horas `
    if ( horas >= 0 && horas < 5){
        msg.innerHTML = `Boa Madrugada, são ${horas} hora da madrugada! Durma bem`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }else if ( horas >= 5 && horas <= 12){
        msg.innerHTML = `Bom dia são ${horas} horas, hora do café da manhã`
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if ( horas > 12 && horas <= 18){
        msg.innerHTML = `Boa tarde, são ${horas} horas, vamos estudar! `
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else if ( horas > 18){
        msg.innerHTML = `Boa noite, são ${horas} horas. Tenha uma boa janta!`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }


}
