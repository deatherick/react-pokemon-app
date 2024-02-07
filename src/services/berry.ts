const BERRY_ENDPOINT_RANDOM = 'https://pokeapi.co/api/v2/berry'

/**
 * Fetches a random berry from the API.
 * @returns {Promise<string>} A promise that resolves to a random berry.
 */
export const getRandomBerryAsync = async () => {
    try {
        const res = await fetch(`${BERRY_ENDPOINT_RANDOM}/${Math.floor(Math.random() * 50) + 1}`)
        if (!res.ok) throw new Error('Error fetching berry data')
        const data = await res.json()
        return data
    } catch (err) {
        alert(err)
    }
}

export function getRandomBerry() {
    try {
        fetch(`${BERRY_ENDPOINT_RANDOM}/${Math.floor(Math.random() * 50) + 1}`).then(res => {
            if (!res.ok) throw new Error('Error fetching berry data')
            res.json().then(data => {
                console.log(data)
                return data
            })
        })
    } catch (err) {
        alert(err)
    }
}