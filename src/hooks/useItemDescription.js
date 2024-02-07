import { useEffect, useState } from "react"


/**
 * Custom hook to retrieve a random description for a given Item.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.item - The Item object.
 * @returns {Object} - The Item description.
 */
export function useItemDescription ({ item }) {
    const [itemDescription, setItemDescription] = useState()

    useEffect(() => {
        if (!item) return
        console.log(item)
        const itemDescriptions = item.flavor_text_entries[0].text || "";
        setItemDescription(itemDescriptions)
    }, [item])

    return { itemDescription }
}