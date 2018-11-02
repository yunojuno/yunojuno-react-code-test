import React, { Component } from 'react';

import "./style.css";

import ListItem from '../ListItem/';
import Select from '../Select/';
import Toggle from '../Toggle/';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: false,
      category: ''
    };

    this.handleOrderToggle = this.handleOrderToggle.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleOrderToggle(e) {
    e.preventDefault();

    this.setState({
      order: !this.state.order
    });
  }

  handleSelectChange(e) {
    this.setState({
      category: e.target.value
    });
  }

  render() {
    const { items } = this.props;
    const { category, order } = this.state;

    const sortBasis = order ? 'name' : 'significanceIndex';

    let array = items
      .sort((a, b) => (a[sortBasis] > b[sortBasis]) ? 1 : ((b[sortBasis] > a[sortBasis]) ? -1 : 0));

    if (category !== '') {
      array = array.filter(el => el.category === category);
    }

    return (
      <div className="list">
        <div className="list__filter">
          <div className="list__orderFilter">
            <span> Significance order </span>
            <Toggle callback={this.handleOrderToggle} checked={this.state.order} />
            <span> Alphabetical Order </span>
          </div>

          <div className="list__categoryFilter">
            <span> Category: </span>
            <Select options={['', ...new Set(items.map(el => el.category))]} value={this.state.category} callback={this.handleSelectChange}/>
          </div>
        </div>
        <ul className="list__ul">
          {array.map((el) => (
            <ListItem {...el} key={el.name}/>
          ))}
        </ul>
      </div>
    );
  }
}
