import CustomCardBox from '@components/CustomCardBox'
import { Fragment, useEffect } from "react"
import { clearState, getPokemons } from '@features/pokeapi/pokemonSlice'
import { TailSpin } from 'react-loader-spinner'
import { Layout } from "@pages/Layout"
import { useAppSelector, useAppDispatch } from '@/app/hooks'

export function PokemonPage() {
    const {isLoaded, status, description, name, imageUrl} = useAppSelector(state => state.pokeapi)

    const dispatch = useAppDispatch()

    useEffect(() => {   
        if (status == 'idle') {
            dispatch(getPokemons())
        }
    }, [status])

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [])

    const handleClick = async () => {
        dispatch(getPokemons())
    }
    return (
        <Layout> 
            {!isLoaded ? (
                <TailSpin color="#00BFFF" height={100} width={100} />
            ) : (
                <Fragment>
                    <CustomCardBox title={name} description={description} />
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClick}>Get New Pokemon</button>     
                    <img className="mt-4 object-fill h-48 w-96" src={imageUrl} alt={`Image extracted using the poke api ${name}`} />
                </Fragment>
            )}
        </Layout>
    )
}