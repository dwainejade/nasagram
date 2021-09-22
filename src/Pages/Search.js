import React, { useState, useEffect } from "react";
// import { PhotoContext } from '../components/PhotoContext'
import axios from "axios";
import CardComponent from "../components/Card";
import Spinner from "../components/Spinner";
import Button from "@mui/material/Button";
// import './Card.css'
import DateFormater from "../components/DateFormater";

const Search = () => {
  // const [favorites, setFavorites, handleFave, getFaves, addFaves] = useContext(PhotoContext)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var urlDate = currDate();
  if (urlParams.has("date")) {
    urlDate = urlParams.get("date");
  }
  const [photos, setPhotos] = useState([]);
  const [date, setDate] = useState(urlDate);

  const fetchPhoto = async () => {
    const { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=nLkCcfvqTIIGZoD3O0cP2GDGQn5xRkg0CalOXlB8`
    );
    setPhotos(data);
  };

  useEffect(() => {
    fetchPhoto();
  }, [date]);

  function validDate(today, selectedDate) {
    var d = selectedDate.split("-");
    var c = today.split("-");
    var sDate = new Date(parseInt(d[0]), parseInt(d[1]) - 1, parseInt(d[2]));
    var now = new Date(parseInt(c[0]), parseInt(c[1]) - 1, parseInt(c[2]));
    if (sDate > now) {
      return false;
    }
    return true;
  }

  function currDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }

  const handleDate = (e) => {
    const today = currDate();
    if (validDate(today, e.target.value)) {
      setDate(e.target.value);
      // console.log("date", e.target.value);
    } else {
      setDate(today);
      alert("Invalid Date Selected!");
    }
  };

  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
    return false;
  }

  function maxDays(year, month) {
    if (month === 2) {
      if (isLeapYear(year)) {
        return 29;
      } else {
        return 28;
      }
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      return 30;
    }
    return 31;
  }

  const format = (val) => {
    if (val.length === 1) {
      return "0" + val;
    }
    return val;
  };

  const incrementDate = (e) => {
    const splitDate = date.split("-");
    var yy = splitDate[0];
    var mm = splitDate[1];
    var dd = splitDate[2];
    dd = parseInt(dd);
    mm = parseInt(mm);
    yy = parseInt(yy);
    if (dd < maxDays(yy, mm)) {
      dd += 1;
    } else if (mm === 12) {
      mm = 1;
      dd = 1;
      yy += 1;
    } else {
      dd = 1;
      mm += 1;
    }
    dd = format(String(dd));
    mm = format(String(mm));
    yy = String(yy);
    const newDate = yy + "-" + mm + "-" + dd;
    // console.log(newDate);
    setDate(newDate);
  };

  const decrementDate = () => {
    const splitDate = date.split("-");
    var yy = splitDate[0];
    var mm = splitDate[1];
    var dd = splitDate[2];
    dd = parseInt(dd);
    mm = parseInt(mm);
    yy = parseInt(yy);
    if (dd > 1) {
      dd -= 1;
    } else if (mm === 1) {
      dd = 31;
      mm = 12;
      yy -= 1;
    } else {
      mm -= 1;
      dd = maxDays(yy, mm);
    }
    dd = format(String(dd));
    mm = format(String(mm));
    yy = String(yy);
    const newDate = yy + "-" + mm + "-" + dd;
    // console.log(newDate);
    setDate(newDate);
  };

  return photos.url ? (
    <div>
      <h1>Search</h1>

      <div className="date-picker" style={{ marginBottom: "1rem" }}>
        <Button onClick={decrementDate} variant="text">
          Previous
        </Button>
        <input
          type="date"
          className="form-control"
          id="Date"
          name="date"
          value={date}
          onChange={handleDate}
        />
        {date === currDate() ? (
          <Button
            onClick={incrementDate}
            variant="text"
            disabled
            style={{ color: "grey", zIndex: 0 }}
          >
            Next
          </Button>
        ) : (
          <Button onClick={incrementDate} variant="text">
            Next
          </Button>
        )}
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
