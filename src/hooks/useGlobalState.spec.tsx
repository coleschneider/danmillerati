import * as React from "react";
import useGlobalState from "./useGlobalState";
import useGallery from "./useGallery";

function useCounter({ initialCount = 0 } = {}) {
    const [count, setCount] = React.useState(initialCount);
    const increment = () => setCount(count + 1);
    return { count, increment };
}

describe("useGlobalState", () => {
    it("should work with the default settings", () => {
        const Container = useGlobalState(useCounter);
        const Increment = () => {
            const { increment } = React.useContext(Container.Context);
            return (
                <button type="button" onClick={increment}>
                    Increment
                </button>
            );
        };
        const Count = () => {
            const { count } = React.useContext(Container.Context);
            return <div>{count}</div>;
        };
        const App = () => (
            <Container.Provider>
                <Increment />
                <Count />
            </Container.Provider>
        );
        const Wrapper = mount(<App />);
        const button = Wrapper.find("button");
        const counter = Wrapper.find("div");
        expect(counter.text()).toBe("0");
        button.simulate("click", {});
        expect(counter.text()).toBe("1");
    });
    it("should work using return as a hook", () => {});
});
