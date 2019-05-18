import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Episode = props => {
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchEpisode();
  }, []);

  const fetchEpisode = () => {
    Axios.get(
      `https://rickandmortyapi.com/api/episode/${props.match.params.id}`
    )
      .then(res => {
        Array.from(res.data.characters).map(x => fetchChar(x));
        setEpisode(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  const fetchChar = (char, i) => {
    Axios.get(char)
      .then(res => {
        setCharacters(chars => [...chars, res.data]);
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="single-episode">
      <ul className="single-ep-details">
        <h2>{episode.name}</h2>
        <li>
          <strong>Aired: </strong>
          <span>{episode.air_date}</span>
        </li>
        <li>
          <span>{episode.episode}</span>
        </li>
      </ul>
      {characters &&
        characters.map(char => {
          return (
            <Link className="card-links" to={`/character-list/${char.id}`}>
              <div className="character-card">
                <img
                  className="character-avatar"
                  src={char.image}
                  alt={char.name}
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Episode;
