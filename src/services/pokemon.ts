const POKEMON_ENDPOINT_RANDOM = 'https://pokeapi.co/api/v2/pokemon-species'

/**
 * Fetches a random pokemon from the API.
 * @returns {Promise<string>} A promise that resolves to a random pokemon.
 */
export const getRandomPokemonAsync = async () => {
    try {
        const res = await fetch(`${POKEMON_ENDPOINT_RANDOM}/${Math.floor(Math.random() * 500) + 1}`)
        if (!res.ok) throw new Error('Error fetching pokemon data')
        const data = await res.json()
        return data
    } catch (err) {
        alert(err)
    }
}

export function getRandomPokemon() {
    try {
        fetch(`${POKEMON_ENDPOINT_RANDOM}/${Math.floor(Math.random() * 500) + 1}`).then(res => {
            if (!res.ok) throw new Error('Error fetching pokemon data')
            res.json().then(data => {
                console.log(data)
                return data
            })
        })
    } catch (err) {
        alert(err)
    }
}