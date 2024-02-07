import { useEffect, useState } from "react"


/**
 * Custom hook to retrieve a random description for a given Berry.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.berry - The Berry object.
 * @returns {Object} - The Berry description.
 */
export function useBerryDescription ({ berry }) {
    const [berryDescription, setBerryDescription] = useState()

    useEffect(() => {
        if (!berry) return

        const berryDescriptions = `<p>Growth Time: ${berry.growth_time}</p>
        <p>Max Harvest: ${berry.max_harvest}</p>
        <p>Natural Gift Power: ${berry.natural_gift_power}</p>
        <p>Size: ${berry.size}</p>
        <p>Smoothness: ${berry.smoothness}</p>
        <p>Soil Dryness: ${berry.soil_dryness}</p>
        `
        setBerryDescription(berryDescriptions)
    }, [berry])

    return { berryDescription }
}