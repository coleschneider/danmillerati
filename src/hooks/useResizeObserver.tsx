import * as React from "react";
import ResizeObserver from "resize-observer-polyfill";

const useResizeObserver = ({ initialWidth, container }) => {
    const [containerWidth, setContainerWidth] = React.useState(0);
    React.useLayoutEffect(() => {
        let animationFrameID = null;
        const observer = new ResizeObserver(entries => {
            // only do something if width changes
            const newWidth = entries[0].contentRect.width;
            if (containerWidth !== newWidth) {
                // put in an animation frame to stop "benign errors" from
                // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
                animationFrameID = window.requestAnimationFrame(() => {
                    setContainerWidth(Math.floor(newWidth));
                });
            }
        });
        observer.observe(container.current);
        return () => {
            observer.disconnect();
            window.cancelAnimationFrame(animationFrameID);
        };
    });
    return { containerWidth };
};

export default useResizeObserver;
