/* function numeros(n1, n2){
    if(n1 > n2){
        return `O número ${n1} is bigger`
    }else{
        return `O número ${n2} é maior`
    }
}
console.log(numeros(6, 9))


function ishorizontal(width, heigth){
    if (width > heigth){
        return true
    }else{
        return false
    }
}

console.log(ishorizontal(100, 200)) 

function oddEven(n){
    if(n % 2 == 0){
        return 'Even'
    }else{
        return 'Odd'
    }
}
let result = oddEven(9)

console.log(result) 

function divisivel(num) {
    if(num % 2 === 0 ){
        return 'O número é divisível'
    }else{
        return `O número não é divisível `
    }
}

let res = divisivel(5)
console.log(res) 

function divisivel(num) {
    if(typeof num !== 'number'){
        return 'Not a Number'
    }if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz'
    }if(num % 3 === 0){
        return ` Fizz `
    }if(num % 5 === 0){
        return ` Buzz `
    }else{
        return num
    }
}

let resultado = divisivel(15)
console.log(resultado) 

const name = [
    'Hole-in-one!', // 1 
    'Eagle',      //<= par - 2   
    'Birdie',    // par - 1     
    'Par',       // par           
    'Bogey',     // par+1          
    'Double Bogey ',  // par+2    
    'Go home!',       //>= par + 3  
];

function golfscore(par, stroke){
    if(stroke <= par -  2 ){
        return name[1]
    }else if (stroke == par - 1 ){
        return name[2]
    }else if (stroke == par ){
        return name[3]
    }else if (stroke == par + 1){
        return name[4]
    }else if (stroke == par + 2){
        return name[5]
    }else if (stroke == par + 3 ){
        return name[6]
    }

}

console.log(golfscore(3, 6))

function checkedspeed(speed){
    const speedlimited = 60 
    const km = 5 
    if (speed <= speedlimited + km){
        return `${speed}`
    }else{
        let points = Number.parseInt((speed - speedlimited) / km)
        if (points > 5){
            return ` Carteira suspensa `
        } else {
            return ` points ${points}`
        }

    }


}
let result = checkedspeed(76)
console.log(result)*/

