// import React from "react";
// import ReactDOM from "react-dom";
// import CharacterEntry from "./CharacterEntry";
//
// it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<CharacterEntry />, div);
//     ReactDOM.unmountComponentAtNode(div);
// });

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from  "enzyme-adapter-react-16"
//import FilterSelector from "./FilterSelector";
import CharacterEntry from "./CharacterEntry";

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  it("renders without crashing", () => {
      const wrapper = shallow(<CharacterEntry />);
      expect(wrapper.find(CharacterEntry));
  });
});
