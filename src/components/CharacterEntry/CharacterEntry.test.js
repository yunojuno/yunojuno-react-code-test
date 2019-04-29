import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from  "enzyme-adapter-react-16"
import CharacterEntry from "./CharacterEntry";

configure({adapter: new Adapter()});

describe('<CharacterEntry />', () => {
  it("renders without crashing", () => {
      const wrapper = shallow(<CharacterEntry />);
      expect(wrapper.find(CharacterEntry));
  });
});
