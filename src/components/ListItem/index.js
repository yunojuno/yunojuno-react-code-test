import React, { Component } from 'react';
import "./style.css";

export default class ListItem extends Component {
  render() {
    const { name, category, description, avatar } = this.props;

    return (
      <li className="listItem">
        <img alt={name} src={`${process.env.PUBLIC_URL}/characters/${avatar}`} className="listItem__avatar" />
        <span className="listItem__details">{`${name} (${category})`}</span>
        <span className="listItem__description">{description}</span>
      </li>
    );
  }
}
