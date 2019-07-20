import * as React from "react";

import Gallery from "react-photo-gallery";
import images, { Image, imageFetchStatus } from "./imagePaths";
import ImageLoader, { Props } from "./Image";

interface Action {
    type: "IMAGE_LOADED";
    name: string;
}

const visibilityReducer = (
    state: { [key: string]: boolean },
    action: Action
) => {
    switch (action.type) {
        case "IMAGE_LOADED":
            return {
                ...state,
                [action.name]: true
            };
        default:
            return state;
    }
};
function Grid() {
    const [state, dispatch] = React.useReducer(
        visibilityReducer,
        imageFetchStatus
    );

    const setImage = ({ photo }: Props) =>
        dispatch({
            type: "IMAGE_LOADED",
            name: photo.name
        });
    const getImage = (name: string) => state[name];
    return (
        <Gallery
            photos={images}
            renderImage={ImageLoader(setImage, getImage)}
        />
    );
}
export default Grid;
