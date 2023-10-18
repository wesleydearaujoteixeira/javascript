const valores = ['oi', 2, true, 'js', 7, 6, 14,  'dsds', 'sfsdf']

function countString(x) {
    let cont = 0 
    for(let pos of x){
        if (typeof pos !== 'string'){
            cont++
        }
    }return cont 

}

console.log(countString(valores)) 
const countries = {
    name: 'japan',
    population: 125,
    positionEconomy: 3,
    languange: 'Japanese',
    capital: 'Tokyio', 
    putas: 45

}

function string(p){
    for(let pos in p){
        if(typeof p[pos] === 'string'){
            let r = console.log(`${pos} ${p[pos]}`)

        }
    } return 
}

let result = string(countries)


