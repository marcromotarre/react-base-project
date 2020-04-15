/** this component should:ç
 *  - allow user to write characters in input
 *  - call a search function every time that users write a character
 */

import React from "react";
import { shallow, mount } from "enzyme";
import SearchInput from "../SearchInput.js";

describe("Todo", () => {
  it("renders", () => {
    shallow(<SearchInput />);
  });
  it("displays initial to-dos", () => {
    const wrapper = mount(<SearchInput />);
    expect(wrapper.find("li")).toHaveLength(2);
  });
});
