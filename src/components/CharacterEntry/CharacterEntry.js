import React from 'react';

import classes from './CharacterEntry.module.scss';

const characterEntry = (props) => (
  <li className={classes.CharacterEntry} >
    <img src={/characters/ + props.avatar} alt={props.name} />
    <h3>{props.name}</h3>
    <p className={classes.CharacterCategory}>{props.category}</p>
    <p>{props.description}</p>
  </li>
);

export default characterEntry;
