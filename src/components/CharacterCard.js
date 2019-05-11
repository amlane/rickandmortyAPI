import React from 'react';

function CharacterList(props){
    return (
        <div className="character-card">
          <img className="character-avatar" src={props.item.image} alt={props.item.name} />
          <header className="card-title">{props.item.name}</header>
          <section className="card-details">

          <li><strong>Status </strong><span>{props.item.status}</span></li>
          <li><strong>Species </strong><span>{props.item.species}</span></li>
          <li><strong>Gender </strong><span>{props.item.gender}</span></li>
          <li><strong>last Location </strong><span>{props.item.location.name}</span></li>
          <li><strong>origin </strong><span>{props.item.origin.name}</span></li>

          </section>
        </div>
    )
}

export default CharacterList;