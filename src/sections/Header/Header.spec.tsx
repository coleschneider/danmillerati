import * as React from "react";
import Header from "./Header";

describe("Header", () => {
    let wrapper;
    it("should match the snapshot", () => {
        wrapper = shallow(<Header />);
        expect(<Header />).toMatchSnapshot();
    });
});
