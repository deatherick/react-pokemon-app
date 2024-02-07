import { useEffect, useState } from "react"

const ITEM_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world`

/**
 * Custom hook to fetch and manage the image URL for a given Item.
 *
 * @param {Object} options - The options for the hook.
 * @param {Object} options.item - The Item object.
 * @returns {Object} - The image URL for the Item.
 */
export function useItemImage ({ item }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!item) return

        const itemName = item.name;
        setImageUrl(`${ITEM_IMAGE_URL}/${itemName}.png`)
    }, [item])

    return { imageUrl }
}