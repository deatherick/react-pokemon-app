import CustomCardBox from '@components/CustomCardBox'
import { Fragment, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { clearState, getItems } from '@features/pokeapi/pokemonSlice'
import { TailSpin } from 'react-loader-spinner'
import { Layout } from "@pages/Layout"

export function ItemPage() {
    const {isLoaded, status, description, name, imageUrl} = useSelector(state => state.pokeapi)

    const dispatch = useDispatch()

    useEffect(() => {
        if (status == 'idle') {
            dispatch(getItems())
        }
    }, [status, dispatch])

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
      }, [])

    const handleClick = async () => {
        dispatch(getItems())
    }
    return (
        <Layout> 
            {!isLoaded ? (
                <TailSpin type="Puff" color="#00BFFF" height={100} width={100} />
            ) : (
                <Fragment>
                    <CustomCardBox title={name} description={description} />
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClick}>Get New Item</button>     
                    <img className="mt-4" src={imageUrl} alt={`Image extracted using the poke api ${name}`} />
                </Fragment>
            )}
        </Layout>
    )
}