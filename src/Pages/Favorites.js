
import React, { useContext } from 'react'
import { PhotoContext } from '../components/PhotoContext'

import '../components/Card.css'

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
import { useEffect } from 'react';

const Favorites = () => {
    const classes = useStyles();
    const [favorites, setFavorites, handleFave, getFaves, addFaves] = useContext(PhotoContext)


    useEffect(() => {
        getFaves()
    }, [])

    return (
        <>
            {favorites.map(fav => (
                <div className="card-wrapper">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={fav.url}
                                title={fav.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {fav.title}
                                </Typography>
                                <Typography gutterBottom variant="body1" component="h2">
                                    {fav.date}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {fav.explanation}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon onClick={() => handleFave(fav)} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </div>
            ))};
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
