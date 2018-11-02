import React from "react";
import { shallow } from 'enzyme';

import Select from './index';

const TEST_ARRAY = ["1", "2", "3"];

const select = shallow(<Select options={TEST_ARRAY} value="1" />);

it("renders correctly", () => {
  expect(select).toMatchSnapshot();
});

it('displays a reasonable value', () => {
  expect(TEST_ARRAY).toContain(select.prop('value'));
});
