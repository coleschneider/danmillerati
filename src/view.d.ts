// type ObserverInstanceCallback = (
//     inView: boolean,
//     intersection: IntersectionObserverEntry
// ) => void;

// type ObserverInstance = {
//     inView: boolean;
//     readonly callback: ObserverInstanceCallback;
//     readonly element: Element;
//     readonly observerId: string;
//     readonly observer: IntersectionObserver;
//     readonly thresholds: ReadonlyArray<number>;
// };
// interface ObserverRenderProps {
//     inView: boolean;
//     entry?: IntersectionObserverEntry | undefined;
//     reef: React.RefObject<any> | ((node?: Element | null) => void);
// }

// interface IntersectionOptions extends IntersectionObserverInit {
//     triggerOnce?: boolean;
// }

type ObserverInstanceCallback = (
    inView: boolean,
    intersection: IntersectionObserverEntry
) => void;

type ObserverInstance = {
    inView: boolean;
    readonly callback: ObserverInstanceCallback;
    readonly element: Element;
    readonly observerId: string;
    readonly observer: IntersectionObserver;
    readonly thresholds: ReadonlyArray<number>;
};

interface RenderProps {
    inView: boolean;
    entry: IntersectionObserverEntry | undefined;
    ref: React.RefObject<any> | ((node?: Element | null) => void);
}

interface IntersectionOptions extends IntersectionObserverInit {
    /** Only trigger the inView callback once */
    triggerOnce?: boolean;
}

interface IntersectionObserverProps extends IntersectionOptions {
    /**
     * Children expects a function that receives an object
     * contain an `inView` boolean and `ref` that should be
     * assigned to the element root.
     */
    children: (fields: RenderProps) => React.ReactNode;

    /** Call this function whenever the in view state changes */
    onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
}

/**
 * Types specific to the PlainChildren rendering of InView
 * */
type PlainChildrenProps = IntersectionOptions & {
    children: React.ReactNode;

    /**
     * Render the wrapping element as this element.
     * @default `'div'`
     */
    as?: React.ReactType<any>;

    /**
     * Element tag to use for the wrapping component
     * @deprecated Replace with the 'as' prop
     */
    tag?: React.ReactType<any>;

    /** Call this function whenever the in view state changes */
    onChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
} & Omit<React.HTMLProps<HTMLElement>, "onChange">;

type InViewHookResponse = [
    ((node?: Element | null) => void),
    boolean,
    IntersectionObserverEntry | undefined
];
