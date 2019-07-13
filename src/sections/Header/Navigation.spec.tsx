import * as React from "react";
import Navigation from "./Navigation";

describe("Navigation", () => {
    let wrapper;
    it("should hide the items if isOpen is false", () => {
        wrapper = shallow(<Navigation isFixed={false} isOpen={false} />);
        expect(wrapper).toMatchSnapshot();
    });
    it("should show the items if isOpen is true", () => {
        wrapper = shallow(<Navigation isFixed={false} isOpen />);
        expect(wrapper).toMatchSnapshot();
    });
});
