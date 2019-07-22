import * as React from "react";

type event = Partial<keyof DocumentEventMap>;
type HandlerFn = (e: Event) => void;
function useOnClickOutside(
    ref: React.RefObject<HTMLDivElement>,
    handler: HandlerFn
) {
    React.useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default useOnClickOutside;
