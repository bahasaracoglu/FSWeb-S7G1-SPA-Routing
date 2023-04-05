import React from "react";

export default function KaydedilenlerListesi(props) {
  const { list } = props;
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Anasayfa</div>
    </div>
  );
}
