import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import Youtube from "react-youtube";
const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Options for react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=d6839b06278cddbfb9845d3fea59c98d`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };
  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const data = request.data;
      setMovies(data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters */}
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${baseImgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
