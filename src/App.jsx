
import '@/App.css'
import { usePokemonImage } from "@hooks/usePokemonImage"
import { usePokemonDescription } from "@hooks/usePokemonDescription"
import CustomCardBox from '@components/CustomCardBox'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { clearState, getPokemons } from './features/pokeapi/pokemonSlice'
import { TailSpin } from 'react-loader-spinner';

/**
 * Renders the main application component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export function App() {
    const pokemon = useSelector(state => state.pokemon.value)
    const pokemonStatus = useSelector(state => state.pokemon.status)

    const { imageUrl } = usePokemonImage({ pokemon })
    const { pokemonDescription } = usePokemonDescription({ pokemon })

    const dispatch = useDispatch()

    useEffect(() => {
        if (pokemonStatus === 'idle') {
            dispatch(getPokemons())
        }
    }, [pokemonStatus, dispatch])

    const handleClick = async () => {
        dispatch(getPokemons())
    }

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Pokedex App</h1>
            {!pokemon ? (
                <TailSpin type="Puff" color="#00BFFF" height={100} width={100} />
            ) : (
            <>
                <CustomCardBox title={pokemon.name} description={pokemonDescription} />
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClick}>Get New Pokemon</button>     
                <img className="mt-4" src={imageUrl} alt={`Image extracted using the poke api ${pokemon.name}`} />
            </>
            )}
        </main>
    )
}