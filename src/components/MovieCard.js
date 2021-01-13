import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__content">
        <div className="movie-card__cover-image">
          <img
            src={
              movie.poster_path &&
              `http://image.tmdb.org/t/p/original/${movie.poster_path}`
            }
            alt={`movie-poster-${movie.id}`}
          />
        </div>
        <div className="movie-card__details">
          <h4 className="movie-title">{movie.original_title}</h4>
          <p className="movie-release-date">
            Release date : {movie.release_date}
          </p>
          <p className="movie-ratings">Rating: {movie.vote_average} / 10</p>
          <p className="movie-desc movie-desc--view1">{movie.overview}</p>
        </div>
      </div>
      <p className="movie-desc movie-desc--view2">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
