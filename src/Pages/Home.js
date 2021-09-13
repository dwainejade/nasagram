import React, { useState, useEffect, useContext } from 'react'
import { PhotoContext } from '../components/PhotoContext'
import axios from 'axios'
import Card from '../components/Card'

const Home = ({ fav }) => {
    const [photos, setPhotos] = useState([])
    const [favorites, setFavorites, handleFave, getFaves, addFaves] = useContext(PhotoContext)

    const fetchPhoto = async () => {
        const { data } = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=nLkCcfvqTIIGZoD3O0cP2GDGQn5xRkg0CalOXlB8`
        )
        setPhotos(data)
    }

    useEffect(() => {
        fetchPhoto();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <Card fav={photos} />
        </div>
    )
}

export default Home;