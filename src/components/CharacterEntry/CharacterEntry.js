import React from 'react';

import classes from './CharacterEntry.module.scss';

const characterEntry = (props) => (
  <div className={classes.CharacterEntry} >
    <h3>{props.name}</h3>
    <p className={classes.CharacterCategory}>{props.category}</p>
    <p>{props.description}</p>
    <img src={/characters/ + props.avatar} />
  </div>
);

export default characterEntry;
