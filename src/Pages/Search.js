import React, { useState, useEffect } from "react";
// import { PhotoContext } from '../components/PhotoContext'
import axios from "axios";
import CardComponent from "../components/Card";
import Spinner from "../components/Spinner";

// import './Card.css'

const Search = () => {
  // const [favorites, setFavorites, handleFave, getFaves, addFaves] = useContext(PhotoContext)
  const [photos, setPhotos] = useState([]);
  const [date, setDate] = useState("2020-10-01");

  const fetchPhoto = async () => {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=nLkCcfvqTIIGZoD3O0cP2GDGQn5xRkg0CalOXlB8`
    );
    setPhotos(data);
  };

  useEffect(() => {
    fetchPhoto();
  }, [date]);

  const handleDate = (e) => {
    setDate(e.target.value);
    console.log("date", e.target.value);
    fetchPhoto();
  };

  return photos.url ? (
    <div>
      <h1>Search</h1>

      <div className="date-picker" style={{ marginBottom: "1rem" }}>
        <input
          type="date"
          className="form-control"
          id="Date"
          name="date"
          value={date}
          onChange={handleDate}
        />
      </div>
      <div className="card-wrapper">
        <CardComponent fav={photos} />
      </div>
    </div>
  ) : (
    <div>
      <h1>Search</h1>
      <Spinner />
    </div>
  );
};

export default Search;
