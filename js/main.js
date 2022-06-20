if (window.performance.navigation.type == 1) {
      location.href ='../html/introScreen.html';
}

//*URI: https://pokeapi.co/api/v2/pokemon
var URI = 'https://pokeapi.co/api/v2/pokemon'

const pokemones = async () =>{
      const infoPokemones = await fetch(URI)
      const pokemonse = infoPokemones.json()
      console.log(pokemones)
}
pokemones()
