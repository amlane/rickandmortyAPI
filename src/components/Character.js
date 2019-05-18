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
        if(!this.state.item) {
            console.log(this.state.item)
            return <h2>Loading data...</h2>
        }
        return (
            <div className="character">
                <p>{this.state.item.name}</p>
            </div>
        )
    }
}
    


export default Character;