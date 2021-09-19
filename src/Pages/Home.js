import React, { useState, useEffect } from 'react'
// import { PhotoContext } from '../components/PhotoContext'
import axios from 'axios'
import Card from '../components/Card'
import Spinner from '../components/Spinner'

const Home = () => {
    const [photos, setPhotos] = useState([])


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
        photos.url ?
            <div>
                <h1>Home</h1>
                <Card fav={photos} />
            </div>
            :
            <div>
                <h1>Home</h1>
                <Spinner />
            </div>
    )
}

export default Home;