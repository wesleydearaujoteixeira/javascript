const main = document.querySelectorAll('p')


const estilosBody = getComputedStyle(document.body);

const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody)


main.forEach((element) => {
    element.style.background = 'rgb(43, 121, 121)'
    element.style.color = 'white'
})

