const array = (numeros) => {
  const maiorvalor = numeros.reduce((acumulador, item) => Math.max(acumulador, item))
  return maiorvalor

    
}

const valores = [12, 5, 27, 68, 15]
console.log(array(valores))
