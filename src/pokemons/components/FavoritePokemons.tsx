'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";

export const FavoritePokemons = () => {


    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
    console.log(Object.values(favoritePokemons))
    return (
        <PokemonGrid pokemons={favoritePokemons} />

    )
}
