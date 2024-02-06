import { useEffect, useState } from "react"

const POKEMON_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world`

/**
 * Custom hook to fetch and manage the image URL for a given Pokemon.
 *
 * @param {Object} options - The options for the hook.
 * @param {Object} options.pokemon - The Pokemon object.
 * @returns {Object} - The image URL for the Pokemon.
 */
export function usePokemonImage ({ pokemon }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!pokemon) return

        const pokemonId = pokemon.id;
        setImageUrl(`${POKEMON_IMAGE_URL}/${pokemonId}.svg`)
    }, [pokemon])

    return { imageUrl }
}