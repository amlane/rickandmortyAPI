import React from "react";
import { Route, NavLink } from "react-router-dom";

import "./styling/App.css";

import axios from "axios";
import CharacterList from "./components/CharacterList";
import Home from "./components/Home";
import Character from "./components/Character";
import About from "./components/About";
import Episode from "./components/Episode";
import EpisodeList from "./components/EpisodeList";

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
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${this.state.pageNum}`
      )
      .then(res => {
        this.setState({
          data: res.data.results,
          totalPages: res.data.info.pages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchData() {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${this.state.pageNum}`
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
    if (this.state.pageNum === 1) return;
    this.setState(
      prev => ({
        pageNum: --prev.pageNum
      }),
      this.fetchData()
    );
  };

  pageChangeIncrement = e => {
    e.preventDefault();
    if (this.state.pageNum === this.state.totalPages) return;
    this.setState(
      prev => ({
        pageNum: ++prev.pageNum
      }),
      this.fetchData()
    );
  };

  render() {
    return (
      <div className="App">
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

        <Route exact path="/" component={Home} />
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
      </div>
    );
  }
}

export default App;
