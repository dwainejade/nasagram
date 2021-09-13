import React, { useState, useEffect, useContext } from 'react'
import { PhotoContext } from './PhotoContext'

import axios from 'axios'
import './Card.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const PhotoCard = () => {
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

    // console.log("fetchedPhoto: ", photos);
    const classes = useStyles();

    return (
        <div className="card-wrapper">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={photos.url}
                        title={photos.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {photos.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {photos.explanation}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon onClick={() => handleFave(photos)} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 300,
    },
});

export default PhotoCard