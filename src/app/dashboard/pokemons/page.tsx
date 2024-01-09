import { PokemonsResponse, SimplePokemon } from "@/app/pokemons"
import Image from "next/image"

const getPokemons = async (limit = 10, offset = 0): Promise<SimplePokemon[]> => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data: PokemonsResponse = await response.json()
    const pokemons = data.results.map((pokemon) => {
        return {
            id: pokemon.url.split("/")[6], // https://pokeapi.co/api/v2/pokemon/1/
            name: pokemon.name,
        }
    }
    )
    return pokemons
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)
    return (
        <div className="flex flex-col">

            <div className="flex flex-wrap gap-10 items-center justify-center">
                {pokemons.map((pokemon) => (

                    <Image
                        key={pokemon.id}
                        className="rounded-full w-8 h-8"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />

                ))}
            </div>
        </div>
    );
}