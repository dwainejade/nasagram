import React, { useContext, useEffect } from 'react'
import { PhotoContext } from '../components/PhotoContext'


const FullSizeImage = (props) => {

    const [favorites, setFavorites, handleFave, getFaves, addFave] = useContext(PhotoContext)

    useEffect(() => {
        getFaves()
        console.log('image: ', favorites.image)
    }, [])

    return (
        <div className='full-image'>
            <h1>HD Image</h1>
            <img src={favorites.image} alt="" />
        </div>
    )
}

export default FullSizeImage
