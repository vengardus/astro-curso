import type { FavoritePokemon } from "@/interfaces/favorite-pokemon.interface"
import { FavoritePokemonCard } from "./FavoritePokemonCard"


const getFavoritePokemons = () => {
  const pokemons: FavoritePokemon[] = JSON.parse(localStorage.getItem("favoritePokemons") ?? '[]')
  return pokemons
}

export const FavoritePokemons = () => {
  const pokemons = getFavoritePokemons()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {
        pokemons.map((pokemon) => (
          <FavoritePokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </div>
  )
}
