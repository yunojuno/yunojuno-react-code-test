import React from 'react';

import "./style.css";

export default function Toggle ({ checked, callback }) {
  return (
    <div onClick={callback} className="toggle">
      <hr className="toggle__line" />
      <div className={`toggle__slider ${checked && 'toggleChecked'}`} />
    </div>
  );
}
