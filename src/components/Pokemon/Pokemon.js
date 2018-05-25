import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pokemon.css'
import { PokemonTypesToColors } from "../../utils/Pokemon";
import {togglePokemonCollected} from "../../actions/actions";

const mapDispatchToProps = dispatch => ({
  togglePokemonCollected: id => dispatch(togglePokemonCollected(id))
});

class PokemonConnected extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collected: this.props.collected
    };

    this.handlePokeballClick = this.handlePokeballClick.bind(this);
  }

  handlePokeballClick(e) {
    e.preventDefault();

    this.setState({
      collected: !this.state.collected
    });

    this.props.togglePokemonCollected(this.props.id);
  }

  render() {
    const style = {
      background: PokemonTypesToColors[this.props.type]
    };

    return (
      <li className={this.state.collected ? "pokemon collected" : "pokemon"}>
        <div className="wrapper">
          <div className="img-background" style={style}/>
          <img src={this.props.img}/>
        </div>
        <div className="information">
          <a href="#" className="pokeball" onClick={this.handlePokeballClick}/>
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

const Pokemon = connect(null, mapDispatchToProps)(PokemonConnected);

export default Pokemon;