const ITEM_ENDPOINT_RANDOM = 'https://pokeapi.co/api/v2/item'

/**
 * Fetches a random item from the API.
 * @returns {Promise<string>} A promise that resolves to a random item.
 */
export const getRandomItemAsync = async () => {
    try {
        const res = await fetch(`${ITEM_ENDPOINT_RANDOM}/${Math.floor(Math.random() * 100) + 1}`)
        if (!res.ok) throw new Error('Error fetching item data')
        const data = await res.json()
        return data
    } catch (err) {
        alert(err)
    }
}

export function getRandomItem() {
    try {
        fetch(`${ITEM_ENDPOINT_RANDOM}/${Math.floor(Math.random() * 100) + 1}`).then(res => {
            if (!res.ok) throw new Error('Error fetching item data')
            res.json().then(data => {
                console.log(data)
                return data
            })
        })
    } catch (err) {
        alert(err)
    }
}