import React from 'react';

import classes from './CharacterEntry.module.scss';

const characterEntry = (props) => (
  <div className={classes.CharacterEntry} >
    <img src={/characters/ + props.avatar} />
    <h3>{props.name}</h3>
    <p className={classes.CharacterCategory}>{props.category}</p>
    <p>{props.description}</p>
  </div>
);

export default characterEntry;
