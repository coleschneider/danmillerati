import * as React from "react";
import Menu from "./Menu";

describe("Menu", () => {
    let wrapper;
    let isOpen = false;
    const props = {
        isOpen,
        onClick: jest.fn().mockImplementation(() => {
            isOpen = !isOpen;
        })
    };
    it("should call the click function", () => {
        const { onClick } = props;
        wrapper = shallow(<Menu {...props} />);
        wrapper.children(0).simulate("click", onClick);
        expect(onClick).toBeCalled();
        expect(isOpen).toBeTruthy();
    });
    it("should call match the screenshots when open", () => {
        wrapper = shallow(<Menu {...props} />);
    });
});
