'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))

    // const [pokemons] = useState(favoritePokemons)
    
    // useEffect(() => {
    //     setPokemons(favoritePokemons)
    // }, [favoritePokemons])
    
    return (
        <>
            {favoritePokemons.length === 0 ? <NotFavorites /> : <PokemonGrid pokemons={favoritePokemons} />}
        </>
    )
}

export const NotFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className='text-red-500' />
            <span>Not Favorites</span>
        </div>
    )
}


