'use strict'

const images = [
    {'id': '1', 'url':'./assets/chrono.jpg'},
    {'id': '2', 'url':'./assets/inuyasha.jpg'},
    {'id': '3', 'url': './assets/ippo.png'},
    {'id': '4', 'url': './assets/tenjhotenge.jpg'},
    {'id': '5', 'url': './assets/yuyuhakusho.jpg'}
]


const container = document.querySelector('.container-items')

const loadimages = (images, container) => {
    images.forEach(item => {
        container.innerHTML += `
            <div class="item">
                <img src='${item.url}'
            </div>
        
        `
    })

}

loadimages(images, container)

let items = document.querySelectorAll('.item')

const previous = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')

}
const next = () => {
    const lastitem = items[items.length - 1]
    container.insertBefore(lastitem, items[0])
    items = document.querySelectorAll('.item')

}

document.querySelector('#next').addEventListener('click', next)
document.querySelector('#previous').addEventListener('click', previous)

