import React from "react";
import { shallow } from 'enzyme';

import characters from "../../fixtures/characters.json";

import ListItem from '../ListItem/';

const testCharacter = characters[0];
const list = shallow(<ListItem {...testCharacter} />);

it("renders correctly", () => {
  expect(list).toMatchSnapshot();
});

it('renders an image', () => {
  expect(list.find('img').length).toBe(1);
});

it('renders the correct avatar', () => {
  expect(list.find('img').prop('src')).toContain(testCharacter.avatar);
});

it('renders the correct details', () => {
  expect(list.find('span').at(0).text()).toContain(testCharacter.name);
  expect(list.find('span').at(0).text()).toContain(testCharacter.category);
});
