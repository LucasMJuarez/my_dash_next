import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons"
import Image from "next/image"



export const metadata = {
 title: 'Favoritos',
 description: 'Si sis',
};




export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokemons Favoritos<small>Globals States</small></span>
            <FavoritePokemons />
        </div>
    );
}