import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";
export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          setMovieList(response.data);
          console.log(response.data);
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    let isSaved = saved.find((x) => x.id == id);
    if (!isSaved) {
      let savedMovie = movieList.find((x) => x.id == id);

      console.log("id", id);
      console.log("movielist", movieList);
      console.log("savedMovie", savedMovie);
      let newSaved = [...saved, savedMovie];
      setSaved(newSaved);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} />
      <div>
        <Switch>
          <Route path="/filmler/:id">
            <Film savetoList={KaydedilenlerListesineEkle} />
          </Route>

          <Route path="/">
            <FilmListesi movieList={movieList} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
