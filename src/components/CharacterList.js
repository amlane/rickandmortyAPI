import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList(props){

    return (
        <>
        <div className="btn-wrapper">
        <button onClick={props.pageChange}>Prev</button> <button>Next</button>
        </div>
        <div className="character-list">
        {props.data.map( item => {
            return (
            <Link key={item.id} className="card-links" to={`/character-list/${item.id}`}>
            <div className="character-card">
                <img className="character-avatar" src={item.image} alt={item.name} />
             </div>
             </Link>
            )
        })}
        </div>
        </>
    )
}

export default CharacterList;