const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  Normal : "#A8A77A",
  Fire :  "#EE8130",
  Water :  "#6390F0",
  Electric : "#F7D02C",
  Grass :  "#7AC74C",
  Ice :  "#96D9D6",
  Fighting :  "#C22E28",
  Poison :  "#A33EA1",
  Ground :  "#E2BF65",
  Flying :  "#A98FF3",
  Psychic :  "#F95587",
  Bug :  "#A6B91A",
  Rock :  "#B6A136",
  Ghost :  "#735797",
  Dragon :  "#6F35FC",
  Dark :  "#705746",
  Steel :  "#B7B7CE",
  Fairy :  "#D685AD"
}

const fetchPokemons = async () => {
  for(let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  
  const pokemonInnerHtml = `
  <div class="pokemon" style="background-color: rgb(222,253,274)">
      <div class="img-container">
      <img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_1080,w_1620/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/08/29/03820845-b090-444f-86d1-e5259d11482f/most-heroic-pokemon.jpg.jpg" alt="pokemon image">
      <div class="info">
        <span class="number">001</span>
        <h3 class="name">dragonite</h3>
        <small class="type">Type:  <span>Dragon</span></small>
      </div>


      </div>
    </div>
  `

  pokemonEl.innerHTML = pokemonInnerHtml

  poke_container.appendChild(pokemonEl)
}

fetchPokemons();



