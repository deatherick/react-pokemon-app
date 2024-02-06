import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRandomPokemonAsync } from '@services/pokemon'

const initialState = {
  value: null,
  status: 'idle',
  errorMessage: null
}

export const getPokemons = createAsyncThunk('pokemon/getPokemons', getRandomPokemonAsync)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearState: (state) => {
      state.value = null
      state.status = 'idle'
      state.errorMessage = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = 'succeded'
        state.value = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { clearState } = pokemonSlice.actions

export default pokemonSlice.reducer