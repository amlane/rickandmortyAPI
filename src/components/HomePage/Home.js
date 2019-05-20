import React from 'react';
import img from '../../styling/rickandmortybg.svg';
import "./Home.css";

function Home(props){
    return (
        <div className="homepage">
            <img className="hero-img" src={img} alt="hero" />
            <h1>Rick <span>and</span> Morty</h1>
        </div>
    )
}

export default Home;