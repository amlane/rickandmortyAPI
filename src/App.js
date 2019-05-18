import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './styling/App.css';

import axios from 'axios';
import CharacterList from './components/CharacterList';
import Home from './components/Home';
import Character from './components/Character';
import About from './components/About';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      pageNum: 1
    }
  }

  componentDidMount(){
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then( res => {
      this.setState({ data: res.data.results })
    })
    .catch( err => {
      console.log(err)
    })
  }

  componentDidUpdate(){
    axios
    .get(`https://rickandmortyapi.com/api/character/?page=${this.state.pageNum}`)
    .then( res => {
      this.setState({ data: res.data.results })
    })
    .catch( err => {
      console.log(err)
    })
  }

  pageChangeDecrement = e => {
    e.preventDefault();
    if(this.state.pageNum === 1) return;
    this.setState({ 
      pageNum: --this.state.pageNum
     })
  }

  pageChangeIncrement = e => {
    e.preventDefault();
    this.setState({ 
      pageNum: ++this.state.pageNum
     })
  }


  render(){
    return (
      <div className="App">

        <nav className="nav-links">
          <NavLink exact to="/">Home</NavLink>{" "}
          <NavLink exact to="/character-list">Characters</NavLink>
          <NavLink exact to="/about">About</NavLink>
        </nav>

        <Route exact path="/" component={Home} />
        <Route 
        exact path="/character-list" 
        render={ props => 
        <CharacterList 
        {...props} 
        data={this.state.data} 
        pageNum={this.state.pagNum}
        pageChangeIncrement={this.pageChangeIncrement}
        pageChangeDecrement={this.pageChangeDecrement}
        /> } />
        <Route 
        path="/character-list/:id"
        render={ props => 
        <Character 
        {...props}
        data={this.state.data} 
        /> }
        /> 
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
