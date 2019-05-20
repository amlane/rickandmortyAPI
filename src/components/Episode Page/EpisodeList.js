import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const cache = {};
let totalPages = null;

const EpisodeList = () => {
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetchEpisodes().then(res => totalPages = res.info.pages);
  }, []);

  async function fetchEpisodes () {    
      const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
      return await res.json()
  };

  const pageChangeDecrement = e => {
    e.preventDefault();
    if (page === 1) return;
    setPage(page => page - 1)
  };

  const pageChangeIncrement = e => {
    e.preventDefault();
    if (page === totalPages) return;
    setPage(page => page + 1)    
  };

  const showList = cache[`${page}`];
  if (showList === undefined) {
    const promise = fetchEpisodes(page).then(
      showsData => {
        cache[`${page}`] = showsData.results
      }
    );
    throw promise;
  }

  return (
    <>

      <div className="btn-wrapper">
      
        <button disabled={page === 1} onClick={pageChangeDecrement}>
          Prev
        </button>
        <button
          disabled={page === totalPages}
          onClick={pageChangeIncrement}
        >
          Next
        </button>
      </div>

      <div className="character-list">
        {showList.map(item => {
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
