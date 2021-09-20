import React, { useContext, useEffect, useState } from "react";
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
import CancelIcon from "@mui/icons-material/Cancel";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    // boxShadow: 24,
    p: 1
  },
  btn: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "white",
    cursor: "pointer",
    margin: "1rem",
    backgroundColor: "rgb(0,0,0, 0.4)"
  },
  image: {
    maxWidth: "95vw",
    maxHeight: "95vh"
  }
};

const PhotoCard = ({ fav }) => {
  const [favorites, setFavorites, handleFave, getFaves, addFave] = useContext(
    PhotoContext
  );
  const [alertOpen, setAlertOpen] = useState(false);
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getFaves();
  }, []);

  return (
    <div className="card-wrapper">
      <Card sx={{ maxWidth: 550 }}>
        <CardMedia
          component="img"
          height="350"
          image={fav.url}
          alt={fav.title}
          onClick={handleOpen}
        />

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
              const url = fav.url;
              navigator.clipboard.writeText(url);
              handleAlertOpen();
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
        <Box sx={style.modal}>
          <div onClick={handleClose} style={style.btn}>
            <CancelIcon />
          </div>
          <img src={fav.url} alt={fav.title} style={style.image} />
        </Box>
      </Modal>
      <Dialog
        open={alertOpen}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Link copied to clipboard
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PhotoCard;
