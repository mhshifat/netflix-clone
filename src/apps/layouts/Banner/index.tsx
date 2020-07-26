import React from "react";
import { requestUrls } from "../../../lib/api/index";
import useFetch from "../../common/hooks/useFetch";
import "./styles.css";

const Banner = () => {
  const { movies } = useFetch(requestUrls.fetchNetflixOriginals);

  const randomMovie: any =
    !!movies.length && movies[Math.floor(Math.random() * movies.length - 1)];

  return randomMovie ? (
    <header
      className="banner"
      style={{
        background: `url("https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {randomMovie.name || randomMovie.title || randomMovie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__desc">
          {randomMovie.overview.substr(0, 120) + " ..."}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  ) : null;
};

export default Banner;
