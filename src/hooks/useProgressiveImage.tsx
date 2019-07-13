import * as React from "react";

type State = {
    isLoaded: boolean;
};
type ImageAction = { type: "IMAGES/IMAGE_MOUNTED"; src: string };
function reducer(state: State, action: ImageAction) {
    switch (action.type) {
        case "IMAGES/IMAGE_MOUNTED":
            return {
                isLoaded: true
            };
    }
}
interface ProgressiveImage {
    src: string;
}
export default function useProgressiveImage({ src }: ProgressiveImage) {
    const initialState = { isLoaded: false };
    const [{ isLoaded }, dispatch] = React.useReducer(reducer, initialState);
    React.useEffect(() => {
        const mainImage = new Image();

        mainImage.onload = () => {
            dispatch({ type: "IMAGES/IMAGE_MOUNTED", src });
        };

        mainImage.src = src;
    }, [src]);

    return isLoaded;
}
