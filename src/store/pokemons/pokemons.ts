import { SimplePokemon } from '@/pokemons';
import { createSlice , PayloadAction} from '@reduxjs/toolkit'

/*
 {
    '1':{id:1 , name: 'bulbasaur'},
    '2':{id:2 , name: 'ivysaur'},
    '3':{id:3 , name: 'venusaur'},
 }
*/


interface PokemonsState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonsState = {
    '1': { id: '1', name: 'bulbasaur' },
    '3': { id: '3', name: 'venusaur' },
}

const pokemonsSlices = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const {id} = pokemon;
            if(!!state[id]){
                delete state[id];
                return
            }

            state[id] = pokemon;
        }

    }
});

export const { toggleFavorite } = pokemonsSlices.actions

export default pokemonsSlices.reducer