import { Pokemon } from "@/pokemons";

interface Props {
    params: { id: string };
}


const getPokemons = async (id: string): Promise<Pokemon> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = await fetch(url, {
        cache: "force-cache"
    }
    ).then((response) => response.json())

    console.log('se cargo', pokemon.name)
    return pokemon
}

export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemons(params.id)

    return (
        <div>
            <h1>Pokemon {params.id}</h1>
            <div>
                {JSON.stringify(pokemon)}
            </div>
        </div>
    );
}