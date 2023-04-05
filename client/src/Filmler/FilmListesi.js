import React from "react";
import { Route, Link } from "react-router-dom";

export default function FilmListesi(props) {
  const { movieList } = props;
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <FilmDetayları movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
