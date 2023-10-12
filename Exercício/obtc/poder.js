const personagem1 = prompt(' Digite o nome do personagem ')
const ataque = Number(prompt(`Digite o poder de ataque do personagem ${personagem1} `))
const personagem2 = prompt(' Digite o nome do segundo personagem ')
let pontosdevida = Number(prompt(`Quantidade de pontos de vida do ${personagem2}: `))
const defesa = Number(prompt(`Digite o poder de defesa do personagem ${personagem2} `))
const escudo = prompt(`O ${personagem2} tem escudo?`)
let dano = 0
if (ataque > defesa && escudo === "Não"){
     dano = ataque - defesa 
     let danocausado = pontosdevida - dano
     alert(` Total de vida do personagem ${personagem2} foi de ${danocausado} sua defesa foi de ${defesa} e o ataque do personagem ${personagem1} foi de ${ataque}`)
}else if(ataque > defesa && escudo === "Sim"){
    dano = (ataque - defesa) / 2 
    let danocausado = pontosdevida - dano
    alert(` Total de vida do personagem ${personagem2} foi de ${danocausado}  sua defesa foi de ${defesa} e o ataque do personagem ${personagem1} foi de ${ataque}`)

}



