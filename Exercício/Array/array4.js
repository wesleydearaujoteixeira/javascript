
let valores = ['Ana','Marcos','Felipe','João','Marcos','Gabriel','Felipe',' Marcos','Cleiton']


/* for(pos = 0; pos < valores.length; pos++){
    console.log(`${valores[pos]} na posição ${pos+1}`)
}

for(let pos in valores ){
    console.log(`Na posição ${pos} tem o valor ${valores[pos]}`)
} */
let pos = valores.indexOf('Gabriel')
console.log(`O nome ${valores[pos]} esta na posiçao ${pos}`)