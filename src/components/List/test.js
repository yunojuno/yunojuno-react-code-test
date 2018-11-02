import React from "react";
import { shallow } from 'enzyme';

import characters from "../../fixtures/characters.json";

import List from "./index";
import ListItem from '../ListItem/';

const list = shallow(<List items={characters} />);

it("renders correctly", () => {
  expect(list).toMatchSnapshot();
});

it('renders an unordered list', () => {
  expect(list.find('ul').length).toBe(1);
});

it('renders the correct amount of elements', () => {
  const charactersQuantity = characters.length;

  expect(list.find(ListItem).length).toBe(charactersQuantity);
});
