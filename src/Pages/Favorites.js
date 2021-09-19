
import React, { useContext } from 'react'
import { PhotoContext } from '../components/PhotoContext'
import CardComponent from '../components/Card'
import '../components/Card.css'

import { useEffect } from 'react';

const Favorites = () => {

    const [favorites, setFavorites, handleFave, getFaves] = useContext(PhotoContext)

    useEffect(() => {
        getFaves()
    }, [])

    return (
        <>
            <h1>Favorites</h1>
            {favorites.map(fav => (
                <div className="card-wrapper">
                    <CardComponent fav={fav}>

                    </CardComponent>
                </div>
            ))}
        </>
    )
}


export default Favorites
