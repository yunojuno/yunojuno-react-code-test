import React from 'react';

export default function Select ({ value, callback, options }) {
  return (
    <select value={value} onChange={callback} >
      {options.map(el => (
        <option key={el} value={el}>{el.charAt(0).toUpperCase() + el.slice(1)}</option>
      ))}
    </select>
  );
}
