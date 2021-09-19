import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhotoContext } from './PhotoContext';

import FullSizeImage from './FullSizeImage'

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

const PhotoCard = ({ fav }) => {
    const [favorites, setFavorites, handleFave, getFaves, addFave] = useContext(PhotoContext)

    const classes = useStyles();

    useEffect(() => {
        getFaves()
    }, [])

    return (
        <div className="card-wrapper">
            <Card className={classes.root}>
                <CardActionArea>
                    <Link to='/hd-image' image={fav.url}>
                        <CardMedia
                            className={classes.media}
                            image={fav.url}
                            title={fav.title}
                        />
                    </Link>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {fav.title}
                        </Typography>
                        <p>
                            {fav.date}
                        </p>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {fav.explanation}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites" color="inherit" onClick={() => handleFave(fav)} >
                        {
                            favorites.some(f => f.title === fav.title) ? <FavoriteIcon color="secondary" />
                                :
                                <FavoriteIcon color="action" />
                        }
                    </IconButton>
                    <IconButton aria-label="share" onClick={() => { navigator.clipboard.writeText(fav.hdurl) }}>
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