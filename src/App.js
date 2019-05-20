import React, { Suspense } from "react";
import { Route, NavLink } from "react-router-dom";

import Loader from 'react-loader-spinner'; 
import "./styling/App.css";

import axios from "axios";
import CharacterList from "./components/CharacterPage/CharacterList";
import Home from "./components/HomePage/Home";
import Character from "./components/CharacterPage/Character";
import About from "./components/AboutPage/About";
import Episode from "./components/Episode Page/Episode";
import EpisodeList from "./components/Episode Page/EpisodeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pageNum: 1,
      totalPages: 0
    };
  }

  componentDidMount() {
      this.fetchData(1)
  }

  fetchData(page) {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      )
      .then(res => {
        this.setState({ data: res.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  }

  pageChangeDecrement = e => {
    e.preventDefault();
    // if (this.state.pageNum === 1) return;
    this.fetchData(this.state.pageNum - 1)
    this.setState(
      prev => ({
        pageNum: prev.pageNum -1,
      })
    );
  };

  pageChangeIncrement = e => {
    e.preventDefault();
    if (this.state.pageNum === this.state.totalPages) return;
    this.fetchData(this.state.pageNum + 1)
    this.setState(
      prev => ({
        pageNum: prev.pageNum + 1,
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />

        <nav className="nav-links">
          <NavLink exact to="/">
            Home
          </NavLink>{" "}
          <NavLink exact to="/character-list">
            Characters
          </NavLink>
          <NavLink exact to="/episode-list">
            Episodes
          </NavLink>
          <NavLink exact to="/about">
            About
          </NavLink>
        </nav>
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#00F0A3" height={100} width={100} />
          }
        >
        <Route
          exact
          path="/character-list"
          render={props => (
            <CharacterList
              {...props}
              data={this.state.data}
              pageNum={this.state.pageNum}
              totalPages={this.state.totalPages}
              pageChangeIncrement={this.pageChangeIncrement}
              pageChangeDecrement={this.pageChangeDecrement}
            />
          )}
        />
        <Route
          path="/character-list/:id"
          render={props => <Character {...props} data={this.state.data} />}
        />
        <Route
          path="/episode/:id"
          render={props => <Episode {...props} data={this.state.data} />}
        />
        <Route path="/episode-list" component={EpisodeList} />
        <Route path="/about" component={About} />
        </Suspense>
      </div>
    );
  }
}

export default App;
