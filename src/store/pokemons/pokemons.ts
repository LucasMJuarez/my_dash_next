import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {
    [key: string]: SimplePokemon,
}

const getInitialState = (): PokemonsState => {
    //if(typeof localStorage === 'undefined') return {}
    const favorites = JSON.parse((localStorage.getItem('favorite-pokemons')) ?? '{}');
    return favorites;
}

const initialState: PokemonsState = {
    //...getInitialState()
    // '1': { id: '1', name: 'bulbasaur' },
    // '3': { id: '3', name: 'venusaur' },
    // '10': { id: '10', name: 'caterpie' },
}

const pokemonsSlices = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;
            if (!!state[id]) {
                delete state[id];
                //return
            } else {

                state[id] = pokemon;
            }
            //TODO: NO SE DEBE USAR LOCALSTORAGE EN UNA APLICACION REAL DE REDUX
            localStorage.setItem('favorite-pokemons', JSON.stringify(state))
        }
    }
});

export const { toggleFavorite } = pokemonsSlices.actions

export default pokemonsSlices.reducer