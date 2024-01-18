import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons"
import Image from "next/image"

const getPokemons = async (limit = 10, offset = 0): Promise<SimplePokemon[]> => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data: PokemonsResponse = await response.json()
    const pokemons = data.results.map((pokemon) => {
        return {
            id: pokemon.url.split("/")[6], // https://pokeapi.co/api/v2/pokemon/1/
            name: pokemon.name,
        }});
        throw new Error("Esto es un error que no deberia de suceder ")
    return pokemons
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)
    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de Pokemons <small>Estático</small></span>

            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}