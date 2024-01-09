const getPokemons = async (limit = 10, offset = 0) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons()
    return (
        <div>
            {JSON.stringify(pokemons)}
        </div>
    );
}