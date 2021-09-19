import React, { useContext, useEffect } from "react";
import { PhotoContext } from "./PhotoContext";

import "./Card.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  m: 2
};

const PhotoCard = ({ fav }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [favorites, setFavorites, handleFave, getFaves, addFave] = useContext(
    PhotoContext
  );

  useEffect(() => {
    getFaves();
  }, []);

  return (
    <div className="card-wrapper">
      <Card sx={{ maxWidth: 550 }}>
        {/* <Link to='/hd-image' image={fav}> */}
        <CardMedia
          component="img"
          height="350"
          image={fav.url}
          alt={fav.title}
          onClick={handleOpen}
        />
        {/* </Link> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {fav.title}
          </Typography>
          <p>{fav.date}</p>
          <Typography variant="body2" color="textSecondary" component="p">
            {fav.explanation}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            aria-label="add to favorites"
            color="inherit"
            onClick={() => handleFave(fav)}
          >
            {favorites.some((f) => f.title === fav.title) ? (
              <FavoriteIcon sx={{ color: red[600] }} />
            ) : (
              <FavoriteIcon color="action" />
            )}
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={() => {
              navigator.clipboard.writeText(fav.hdurl);
            }}
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ position: "relative", float: "right", cursor: "pointer" }}
            onClick={handleClose}
          >
            Close X
          </div>
          <img
            src={fav.url}
            alt={fav.title}
            style={{ objectFit: "contain", maxHeight: "90vh" }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default PhotoCard;
