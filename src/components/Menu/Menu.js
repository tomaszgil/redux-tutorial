import React from 'react';
import './Menu.css';

const Menu = (props) => (
  <menu className="menu">
    {props.children}
  </menu>
);

export default Menu;