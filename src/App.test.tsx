import React from "react";
import ReactDOM from "react-dom";
import Hero from "./components/Hero/Hero";

describe("App", () => {
    const spy = jest.fn(); // or `jasmine.createSpy()`
    const testWidth = 420;

    beforeAll(() => {
        window.addEventListener("resize", spy);
    });

    it("does not fire resize event by default", () => {
        expect(spy).not.toHaveBeenCalled();
        expect(window.innerWidth).not.toBe(testWidth);
    });

    describe("when resize event is fired", () => {
        beforeAll(() => {
            // @ts-ignore
            window.innerWidth = testWidth;
            window.dispatchEvent(new Event("resize"));
            // const resizeEvent = document.createEvent('Event');
            // resizeEvent.initEvent('resize', true, true);
            // window.dispatchEvent(resizeEvent);
        });

        it("updates the window width", () => {
            expect(spy).toHaveBeenCalled();
            expect(window.innerWidth).toBe(testWidth);
        });
    });
});
