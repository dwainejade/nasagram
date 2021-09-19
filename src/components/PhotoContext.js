import React, { useState, createContext } from 'react'

export const PhotoContext = createContext();

export const PhotoProvider = props => {
    const [favorites, setFavorites] = useState([
        // { copyright: "Stephane Vetter", date: "2020-07-04", explanation: "A sensitive video camera on a summit of the Vosges mountains in France captured these surprising fireworks above a distant horizon on June 26. Generated over intense thunderstorms, this one about 260 kilometers away, the brief and mysterious flashes have come to be known as red sprites. The transient luminous events are caused by electrical breakdown at altitudes of 50 to 100 kilometers. That puts them in the mesophere, the coldest layer of planet Earth's atmosphere. The glow beneath the sprites is from more familiar lighting though, below the storm clouds. But on the right, the video frames have captured another summertime apparition from the mesophere. The silvery veins of light are polar mesospheric clouds. Also known as noctilucent or night shining clouds, the icy clouds still reflect the sunlight when the Sun is below the horizon.", hdurl: "https://apod.nasa.gov/apod/image/2007/msv1500crop.jpg", media_type: "image", service_version: "v1", title: "Meeting in the Mesosphere", url: "https://apod.nasa.gov/apod/image/2007/msv1000crop.jpg" },
        // { copyright: "Anton Komlev", date: "2021-09-06", explanation: "It started with a pine tree. The idea was to photograph a statuesque pine in front of the central band of our Milky Way Galaxy. And the plan, carried out two months ago, was successful -- they both appear prominently. But the resulting 3-frame panorama captured much more. Colorful stars, for example, dot the distant background, with bright Altair visible on the upper left. The planet Saturn, a bit closer, was captured just over the horizon on the far left. Just beyond the Earth's atmosphere, seen in the upper right, an Earth-orbiting satellite was caught leaving a streak during the 25-second exposure. The Earth's atmosphere itself was surprisingly visible -- as green airglow across the image top. Finally, just by chance, there was a firefly. Do you see it? Near the image bottom, the firefly blinked in yellow several times as it fluttered before the rolling hills above Milogradovka River in Primorsky Krai, Russia.    Explore Your Universe: Random APOD Generator", hdurl: "https://apod.nasa.gov/apod/image/2109/FireFlyMilkyWay_Komlev_1446.jpg", media_type: "image", service_version: "v1", title: "Firefly Milky Way over Russia", url: "https://apod.nasa.gov/apod/image/2109/FireFlyMilkyWay_Komlev_960.jpg" }
    ]);

    // pull favorites from localStorage
    const getFaves = () => {
        let faves = localStorage.getItem('faves') ? JSON.parse(localStorage.getItem('faves')) : []
        setFavorites(faves)
    }

    const saveToLocalStorage = (items) => {
        localStorage.setItem('faves', JSON.stringify(items))
    }

    const addFave = (photo, faves) => {
        const newFave = [photo, ...faves]
        console.log('Added:', newFave);
        setFavorites(newFave)
        saveToLocalStorage(newFave)
    }

    const removeFave = (photo) => {
        const newList = favorites.filter(f => f.title !== photo.title)
        setFavorites(newList)
        saveToLocalStorage(newList)
        console.log('Removed:', newList);

    }

    const handleFave = (photo) => {
        console.log('handleFave')
        let faves = localStorage.getItem('faves') ? JSON.parse(localStorage.getItem('faves')) : []

        if (faves.some(f => f.title === photo.title)) {
            removeFave(photo)
        }
        else {
            addFave(photo, faves)
        }
    }

    return (
        <PhotoContext.Provider value={[favorites, setFavorites, handleFave, getFaves, addFave,]}>
            {props.children}
        </PhotoContext.Provider >
    );
}