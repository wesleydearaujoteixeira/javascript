var hora = 4
console.log(`${hora}`)
if (hora > 18) {
    console.log('Boa noite')
}else if (hora < 18 && hora > 5){
    console.log('Bom dia!')
}else if ( hora < 5 && hora > 11) {
    console.log('Boa madrugada')
}