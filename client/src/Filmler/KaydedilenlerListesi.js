import React from "react";
import { useHistory, NavLink, useParams, Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  const toHome = () => {
    history.push("/");
  };
  const { list } = props;

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>

      {list.map((movie) => (
        <span className="saved-movie" key={movie.id}>
          {" "}
          <NavLink to={`/filmler/${movie.id}`}>{movie.title}</NavLink>
        </span>
      ))}
      <div onClick={() => toHome()} className="home-button">
        Anasayfa
      </div>
    </div>
  );
}
