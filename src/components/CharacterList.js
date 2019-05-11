import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props){
    return (
        <div className="character-list">
        {props.data.map( item => {
            return (
                <CharacterCard item={item} key={item.id} />
            )
        })}
        </div>
    )
}

export default CharacterList;