import * as React from "react";
import { RouteComponentProps } from "react-router";
import Navigation from "./Navigation";

describe("Navigation", () => {
    let wrapper;
    const router = {} as RouteComponentProps;
    it("should hide the items if isOpen is false", () => {
        wrapper = shallow(
            <Navigation
                {...router}
                toggle={jest.fn}
                isFixed={false}
                isOpen={false}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("should show the items if isOpen is true", () => {
        wrapper = shallow(
            <Navigation {...router} toggle={jest.fn} isFixed={false} isOpen />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
