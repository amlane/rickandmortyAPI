import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

class Character extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        item: null
      }
    }

    componentDidMount(){
        axios
        .get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then( res => {
            this.setState({ item: res.data }) 
        })
        .catch( err => console.log(err) )
    }

    render(){
        console.log(this.state.item)
        if(!this.state.item) {
            return <h2>Loading data...</h2>
        }
        return (
            <div className="single-character">
                <img className="single-char-img" src={this.state.item.image} />
                <ul className="single-char-details">
                <h2>{this.state.item.name}</h2>
                <li><strong>Status </strong><span>{this.state.item.status}</span></li>
                <li><strong>Species </strong><span>{this.state.item.species}</span></li>
                <li><strong>Gender </strong><span>{this.state.item.gender}</span></li>
                <li><strong>last Location </strong><span>{this.state.item.location.name}</span></li>
                <li><strong>origin </strong><span>{this.state.item.origin.name}</span></li>
                </ul>
            </div>
        )
    }
}
    


export default Character;