const url = 'https://pokeapi.co/api/v2/pokemon'
const random = () => Math.floor(Math.random() * 905)
const pokemonElement = document.querySelector('.pokemon')
const pokebola = document.querySelector('.pokebola_image')
const createPokemon = (pokemon) => {
    pokemonElement.innerHTML = ` <div class="pokemon__wrapper">
    <img src="${pokemon.image}" class="pokemon__image"  alt="${pokemon.name}">
</div>
<div class="pokemon_info">
    <h2 class="pokemon_name"> ${pokemon.name} </h2>
    `
}
const getAbilities = (abilities) => abilities.map(item => item.ability.name)
const getPokemon = () => {
    fetch(`${url}/${random()}`)
    .then(response => response.json())
    .then(pokemon => {
     const pokemonselected = {
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        abilities: getAbilities(pokemon.abilities)
        }
        createPokemon(pokemonselected)
    })
}
         
pokebola.addEventListener('click', getPokemon)
    
