import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EpisodeList = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = null;
  useEffect(() => {
    fetchEpisodes();
  }, [page]);

  const fetchEpisodes = () => {
    axios
      .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then(res => {
        console.log(res.data);
        setEpisodes(res.data.results);
        totalPages = res.data.info.pages;
      })
      .catch(err => {
        console.log(err);
      });
  };

  const pageChangeDecrement = e => {
    e.preventDefault();
    if (page === 1) return;
    setPage(page => --page)
  };

  const pageChangeIncrement = e => {
    e.preventDefault();
    if (page === totalPages) return;
    setPage(page => ++page)
    
  };
  return (
    <>
      <div className="btn-wrapper">
        <button disabled={page === 1} onClick={pageChangeDecrement}>
          Prev
        </button>
        <button
          disabled={page === 2}
          onClick={pageChangeIncrement}
        >
          Next
        </button>
      </div>
      <div className="character-list">
        {episodes.map(item => {
          return (
            <Link
              key={item.id}
              className="card-links"
              to={`/episode/${item.id}`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default EpisodeList;
