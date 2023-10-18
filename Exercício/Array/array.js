const notas = [['Julio',  0.5], ['Natalia',  5.7], ['Eduardo',  8.9], ['Carlos',  10.6], ['Miguel',  4.5], ['Júlio',  12]]

for(let i = 0; i < notas.length; i++){
    console.log(`O aluno(a) ${notas[i][0]} tirou ${notas[i][1]}`)
    if(notas[i][1] < 6){
        console.log(`O aluno ${notas[i][0]} repetiu de ano`)
    }else{
        console.log(`O aluno ${notas[i][0]} passou de ano!`)
    }
}

