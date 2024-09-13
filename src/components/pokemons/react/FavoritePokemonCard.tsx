import { useState } from "react";

import type { FavoritePokemon } from "@/interfaces/favorite-pokemon.interface";


interface Props {
  pokemon: FavoritePokemon
}

export const FavoritePokemonCard = ({ pokemon }: Props) => {
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const [isVisible, setIsVisible] = useState(true)

  const deleteFavorite = () => {
    const favorites: FavoritePokemon[] = JSON.parse(localStorage.getItem("favoritePokemons") ?? '[]')
    const newFavorites = favorites.filter((favorite) => favorite.id !== pokemon.id)

    localStorage.setItem("favoritePokemons", JSON.stringify(newFavorites))

    setIsVisible(false)
  }

  return (
    <>
      {
        isVisible &&
        <div className="flex flex-col gap-1 items-center">
          {
            <>
              <img src={imageSrc} alt={pokemon.name} width={140} height={140} />
              <a href={`/pokemons/${pokemon.name}`}>
                <div className="flex gap-2">
                  <p className="">#{pokemon.id}</p>
                  <p className="capitalize font-bold">{pokemon.name}</p>
                </div>
              </a>
            </>
          }
          <button
            onClick={() => deleteFavorite()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3"
          >Quitar</button>
        </div>
      }
    </>
  )
}
