import React from 'react';

import classes from './FilterSelector.module.scss';

const filterSelector = (props) => (
  <div className={classes.FilterSelector} >
  <h5>{props.title}</h5>
    <select onChange={props.changed}>
      {props.options.map(option => {
          return <option value={option} key={option}>{option}</option>
        })}
    </select>
  </div>
);


export default filterSelector;
