import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from  "enzyme-adapter-react-16"
import FilterSelector from "./FilterSelector";

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  it("renders without crashing", () => {
      const wrapper = shallow(<FilterSelector options={[test, test]} />);
      expect(wrapper.find(FilterSelector));
  });
});
