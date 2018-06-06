import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'
import { PokemonTypesToColors } from '../../utils/Pokemon';

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.style = {
      background: PokemonTypesToColors[props.type]
    };
  }

  render() {
    return (
      <li className={this.props.collected ? "pokemon collected" : "pokemon"}>
        <div className="wrapper">
          <div className="img-background" style={this.style}/>
          <img src={this.props.img}/>
        </div>
        <div className="information">
          <a href="#" className="pokeball" onClick={() => this.props.onPokeballClick(this.props.id)}/>
          <span className="name">{this.props.name}</span>
          <span>
          <span className="type">{this.props.type}</span>
          <span className="id">{this.props.id}</span>
        </span>
        </div>
      </li>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  collected: PropTypes.bool,
  onPokeballClick: PropTypes.func
};

export default Pokemon;