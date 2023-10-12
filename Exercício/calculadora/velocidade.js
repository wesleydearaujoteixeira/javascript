const carro1 = prompt("Digite o nome do carro:")
const velocidade1 = Number(prompt(`Digite a velocidade do ${carro1} km/h:`))
const carro2 = prompt("Digite o nome do carro:")
const velocidade2 = Number(prompt(`Digite a velocidade do ${carro2} km/h:`))
if (velocidade1 > velocidade2){
    alert(`O carro ${carro1} é mais rápido!`)


}else if (velocidade1 == velocidade2){
    alert('Ambas tem a mesma velocidade!')

}

else{
    alert(`O carro ${carro2} é mais rápido!`)
}