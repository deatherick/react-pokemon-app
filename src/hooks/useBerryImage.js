import { useEffect, useState } from "react"

const BERRY_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries`

/**
 * Custom hook to fetch and manage the image URL for a given Berry.
 *
 * @param {Object} options - The options for the hook.
 * @param {Object} options.berry - The Berry object.
 * @returns {Object} - The image URL for the Berry.
 */
export function useBerryImage ({ berry }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!berry) return

        const berryName = berry.item?.name || berry.name
        setImageUrl(`${BERRY_IMAGE_URL}/${berryName}.png`)
    }, [berry])

    return { imageUrl }
}