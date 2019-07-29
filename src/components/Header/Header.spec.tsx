import * as React from "react";
import Header from "./Header";

describe("Header", () => {
    let Wrapper;
    it("should match the snapshot", () => {
        Wrapper = shallow(<Header stickyWhitelist={["/"]} />);
        expect(Wrapper).toMatchSnapshot();
    });
});
