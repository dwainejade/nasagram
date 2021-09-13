
import React, { useContext } from 'react'
import { PhotoContext } from '../components/PhotoContext'
import CardComponent from '../components/Card'
import '../components/Card.css'

import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

const Favorites = () => {
    const classes = useStyles();
    const [favorites, setFavorites, handleFave, getFaves, addFaves] = useContext(PhotoContext)


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

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 300,
    },
});

export default Favorites
