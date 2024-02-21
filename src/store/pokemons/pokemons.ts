import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {

    favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = (): PokemonsState => {
//     const favorites = JSON.parse((localStorage.getItem('favorite-pokemons')) ?? '{}');
//     return favorites;
// }
const initialState: PokemonsState = {
    favorites:{}, //garantiza que lo que se genere del lado del
    // cliente sea igual a lo que se genere del lado del servidor
    //...getInitialState()
    // '1': { id: '1', name: 'bulbasaur' },
    // '3': { id: '3', name: 'venusaur' },
    // '10': { id: '10', name: 'caterpie' },
}

const pokemonsSlices = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload;
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state.favorites[id]) {
                delete state.favorites[id];
                //return
            } else {

                state.favorites[id] = pokemon;
            }
            //TODO: NO SE DEBE USAR LOCALSTORAGE EN UNA APLICACION REAL DE REDUX
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlices.actions

export default pokemonsSlices.reducer