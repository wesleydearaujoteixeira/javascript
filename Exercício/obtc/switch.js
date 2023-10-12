const num = Number(prompt('Escolha um número em metros:'))
const opcao = Number(prompt(
    ' \n 1 - Milimetro(mm) \n  2 - centimetro(cm) \n  3 - decimetro(dm) \n 4 - decâmetro(da) \n  5 - hectêmetro(he) \n  6 - quilômetro (km)'
))



switch (opcao) {
    case  1:
        let milimetro = num * 1000
alert(`O número ${num} em milimetros é ${milimetro}`);
        break
    case  2:
        let centimetro = num * 100
        alert(`O número ${num} em centimetros é ${centimetro}`);
        break
    case  3:
        let decimetro = num * 10
        alert(`O número ${num} em decimetros é ${decimetro}`);
        break
    case  4:
        let decametro = num / 10 
        alert(` O número ${num} em decâmetros é ${decametro}`);
        break
    case  5:
        let hectometro = num / 100
        alert(`O número ${num} em hectêmetro é ${hectometro}`);
        break
    case  6:
        let km = num / 1000
        alert(`O número ${num} em quilômetros é ${km}`);
        break
    default:
        alert(' Dado inválido! ')
}