import * as React from "react";
import Header from "./Header";

describe("Header", () => {
    let wrapper;
    const windowSpy = jest.fn();
    beforeAll(() => {
        window.addEventListener("resize", windowSpy);
    });

    it("should match the snapshot", () => {
        // @ts-ignore
        window.innerWidth = 320;
        window.dispatchEvent(new Event("resize"));
        wrapper = shallow(<Header />);
        console.log(wrapper.debug(), windowSpy, window.innerWidth);
    });
});
