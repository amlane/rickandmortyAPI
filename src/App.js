import React from 'react';
import './App.css';

import axios from 'axios';

import CharacterList from './components/CharacterList';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
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
        <CharacterList
        data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
