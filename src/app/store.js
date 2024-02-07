import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '../features/pokeapi/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokeapi: pokemonReducer,
  },
})