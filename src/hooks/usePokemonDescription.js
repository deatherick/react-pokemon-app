import { useEffect, useState } from "react"


/**
 * Custom hook to retrieve a random description for a given Pokemon.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.pokemon - The Pokemon object.
 * @returns {Object} - The Pokemon description.
 */
export function usePokemonDescription ({ pokemon }) {
    const [pokemonDescription, setPokemonDescription] = useState()

    useEffect(() => {
        if (!pokemon) return

        const pokemonDescriptions = pokemon.flavor_text_entries;
        setPokemonDescription(pokemonDescriptions[Math.floor(Math.random() * 5)].flavor_text)
    }, [pokemon])

    return { pokemonDescription }
}