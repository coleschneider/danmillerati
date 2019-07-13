import * as React from "react";
import { ShallowWrapper } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

const BuggyComponent = () => null;

describe("ErrorBoundary", () => {
    let wrapper: ShallowWrapper;
    const mountErrorBoundary = () => {
        wrapper = mount(
            <ErrorBoundary>
                <BuggyComponent />
            </ErrorBoundary>
        );
    };
    it("should match the snapshot", () => {
        mountErrorBoundary();
        expect(wrapper).toMatchSnapshot();
    });
    it("should display an error if the child component throws", () => {
        mountErrorBoundary();
        wrapper.find(BuggyComponent).simulateError(new Error("test error"));
        expect(wrapper.find('[test-id="text-error"]').text()).toBe(
            "Oh-no! Something went wrong"
        );
    });
});
