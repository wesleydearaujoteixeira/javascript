const valores = ["R$ 200", "R$ 500", "R$ 700", "R$ 700", "R$ 900", "R$ 300"]

const novosvalores = valores.filter(function (r) {
    if(r < 10){
        return true
    }else{
        return false
    }
})

const valoressubs = valores.map((change) => {
    return +change.replace("R$ ", '')
})

const valorunico = valoressubs.reduce((a, p) => {
    console.log(a + p)
    return a + p
}, 0 )

console.log(valorunico)
