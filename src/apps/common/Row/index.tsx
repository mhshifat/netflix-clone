// @ts-ignore
import movieTrailer from "movie-trailer";
import React, { useState } from "react";
import YouTube from "react-youtube";
import useFetch from "../hooks/useFetch";
import "./styles.css";

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const { movies } = useFetch(fetchUrl);

  const moviesRowElement =
    movies &&
    !!movies.length &&
    movies.map(
      (item: any) =>
        item &&
        item.poster_path && (
          <img
            key={item.id}
            className="row__poster"
            onClick={() => {
              if (trailerUrl) {
                setTrailerUrl("");
              } else {
                movieTrailer(item?.original_name || "")
                  .then((url: string) => {
                    const urlParam = new URL(url).searchParams.get("v");
                    setTrailerUrl(urlParam || "");
                  })
                  .catch((err: any) => console.log(err));
              }
            }}
            style={{
              maxHeight: isLargeRow ? "250px" : "100px",
            }}
            src={
              item.backdrop_path
                ? `https://image.tmdb.org/t/p/original${
                    isLargeRow ? item.poster_path : item.backdrop_path
                  }`
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={item.name}
          />
        )
    );

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">{moviesRowElement}</div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{
            height: "390",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      )}
    </div>
  );
};

export default Row;
