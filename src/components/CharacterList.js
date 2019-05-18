import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList(props){


    return (
        <div className="character-list">
        {props.data.map( item => {
            return (
            <Link to={`/character-list/${item.id}`}>
            <div key={item.id} className="character-card">
                <img className="character-avatar" src={item.image} alt={item.name} />
                <header className="card-title">{item.name}</header>
                <section className="card-details">

                    <li><strong>Status </strong><span>{item.status}</span></li>
                    <li><strong>Species </strong><span>{item.species}</span></li>
                    <li><strong>Gender </strong><span>{item.gender}</span></li>
                    <li><strong>last Location </strong><span>{item.location.name}</span></li>
                    <li><strong>origin </strong><span>{item.origin.name}</span></li>
                </section>
             </div>
             </Link>
            )
        })}
        </div>
    )
}


export default CharacterList;