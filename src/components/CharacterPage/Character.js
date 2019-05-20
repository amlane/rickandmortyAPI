import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }

  componentDidMount() {
    const url =
      this.props.url ||
      `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`;
    setTimeout(() => {
      axios
        .get(url)
        .then(res => {
          this.setState({ item: res.data });
        })
        .catch(err => console.log(err));
    }, 1500);
  }

  render() {
    if (!this.state.item) {
      return (
        <div className="loader">
          <Loader type="ThreeDots" color="#00F0A3" height={100} width={100} />
        </div>
      );
    }
    return (
      <div className="single-character">
        <img
          className="single-char-img"
          src={this.state.item.image}
          alt={this.state.item.name}
        />
        <ul className="single-char-details">
          <h2>{this.state.item.name}</h2>
          <li>
            <strong>Status </strong>
            <span>{this.state.item.status}</span>
          </li>
          <li>
            <strong>Species </strong>
            <span>{this.state.item.species}</span>
          </li>
          <li>
            <strong>Gender </strong>
            <span>{this.state.item.gender}</span>
          </li>
          <li>
            <strong>last Location </strong>
            <span>{this.state.item.location.name}</span>
          </li>
          <li>
            <strong>origin </strong>
            <span>{this.state.item.origin.name}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Character;
