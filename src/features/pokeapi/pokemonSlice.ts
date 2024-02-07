import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRandomPokemonAsync } from '@services/pokemon'
import { getRandomItemAsync } from '@services/item'
import { getRandomBerryAsync } from '@services/berry'
import { RootState } from '@/app/store'

const POKEMON_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world`
const ITEM_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world`
const BERRY_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries`

// Define a type for the slice state
interface PokeAPIState {
  value: any
  name: string
  description: string
  imageUrl: string
  status: string
  isLoaded: boolean
  errorMessage: string | null
}

const initialState : PokeAPIState = {
  value: null,
  name: '',
  description: '',
  imageUrl: '',
  status: 'idle',
  isLoaded: false,
  errorMessage: null
}

export const getPokemons = createAsyncThunk('pokeapi/getPokemons', getRandomPokemonAsync)

export const getItems = createAsyncThunk('pokeapi/getItems', getRandomItemAsync)

export const getBerries = createAsyncThunk('pokeapi/getBerries', getRandomBerryAsync)

export const pokemonSlice = createSlice({
  name: 'pokeapi',
  initialState,
  reducers: {
    clearState: (state) => {
      state.value = null
      state.name = ''
      state.description = ''
      state.imageUrl = ''
      state.status = 'idle'
      state.isLoaded = false
      state.errorMessage = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.status = 'loading'
        state.isLoaded = false
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = 'succeded'
        state.value = action.payload
        state.isLoaded = true
        state.name = action.payload.name
        state.description = action.payload.flavor_text_entries[0].flavor_text
        state.imageUrl = `${POKEMON_IMAGE_URL}/${action.payload.id}.svg`
      })
      .addCase(getItems.pending, (state) => {
        state.status = 'loading'
        state.isLoaded = false
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = 'succeded'
        state.value = action.payload
        state.isLoaded = true
        state.name = action.payload.name
        state.description = action.payload.flavor_text_entries[0].text
        state.imageUrl = `${ITEM_IMAGE_URL}/${action.payload.name}.png`
      })
      .addCase(getBerries.pending, (state) => {
        state.status = 'loading'
        state.isLoaded = false
      })
      .addCase(getBerries.fulfilled, (state, action) => {
        state.status = 'succeded'
        state.value = action.payload
        state.isLoaded = true
        state.name = action.payload.name
        const berryDescription = `<p><span class="font-bold">Growth Time:</span> ${action.payload.growth_time}</p>
        <p><span class="font-bold">Max Harvest:</span> ${action.payload.max_harvest}</p>
        <p><span class="font-bold">Natural Gift Power:</span> ${action.payload.natural_gift_power}</p>
        <p><span class="font-bold">Size:</span> ${action.payload.size}</p>
        <p><span class="font-bold">Smoothness:</span> ${action.payload.smoothness}</p>
        <p><span class="font-bold">Soil Dryness:</span> ${action.payload.soil_dryness}</p>`
        state.description = berryDescription
        state.imageUrl = `${BERRY_IMAGE_URL}/${action.payload.item.name}.png`
      })
  }
})

// Action creators are generated for each case reducer function
export const { clearState } = pokemonSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pokeapi.value

export default pokemonSlice.reducer