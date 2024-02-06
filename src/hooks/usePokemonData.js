import { useEffect, useState } from "react"
import { getRandomPokemon } from "@services/pokemon"

/**
 * Custom hook for fetching and managing pokemon data.
 *
 * @returns {Object} An object containing the current pokemon data and a function to refresh the pokemon.
 */
export function usePokemonData () {
    const [pokemon, setPokemon] = useState()

    const refreshPokemon = () => {
        getRandomPokemon().then(newPokemon => setPokemon(newPokemon))
    }

    useEffect(refreshPokemon, [])

    return { pokemon, refreshPokemon }
}