import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/conterSlice';
import pokemonsReducer from './pokemons/pokemons';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsStat>e, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;