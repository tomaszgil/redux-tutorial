import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'
import { PokemonTypesToColors } from '../../utils/Pokemon';

const Pokemon = (props) => {
  const style = {
    background: PokemonTypesToColors[props.type]
  };

  return (
    <li className={props.collected ? "pokemon collected" : "pokemon"}>
      <div className="wrapper">
        <div className="img-background" style={style}/>
        <img src={props.img}/>
      </div>
      <div className="information">
        <a href="#" className="pokeball" onClick={() => props.onPokeballClick(props.id)}/>
        <span className="name">{props.name}</span>
        <span>
          <span className="type">{props.type}</span>
          <span className="id">{props.id}</span>
        </span>
        </div>
    </li>
  );
};

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  collected: PropTypes.bool,
  onPokeballClick: PropTypes.func
};

export default Pokemon;