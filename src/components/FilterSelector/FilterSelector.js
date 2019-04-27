import React from 'react';

import classes from './FilterSelector.module.scss';

const filterSelector = (props) => (
  <div className={classes.FilterSelector} >
  <h5>{props.title}</h5>
    <select>
      {props.options.map(option => {
          return <option value={option} onClick={props.click} key={option}>{option}</option>
        })}
    </select>
  </div>
);


export default filterSelector;
