import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import axios from 'axios';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import Home from './components/Home';
import Character from './components/Character';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      selectedChar: null
    }
  }

  componentDidMount(){
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then( res => {
      console.log(res.data.results)
      this.setState({ data: res.data.results })
    })
    .catch( err => {
      console.log(err)
    })
  }


  render(){
    return (
      <div className="App">

        <nav>
          <NavLink to="/">Home</NavLink>{" "}
          <NavLink exact to="/character-list">Characters</NavLink>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/character-list" render={ props => <CharacterList {...props} data={this.state.data} /> } />
        <Route 
        path="/character-list/:id"
        render={ props => 
        <Character 
        {...props}
        data={this.state.data} 
        /> }
        />
 
        
      </div>
    );
  }
}

export default App;
