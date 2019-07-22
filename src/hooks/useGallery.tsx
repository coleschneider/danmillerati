import * as React from "react";
import images, { imageFetchStatus } from "../pages/Gallery/imagePaths";

const imageStatusReducer = (state: ImageStatus, action: GalleryActions) => {
    switch (action.type) {
        case "IMAGE_LOADED":
            return {
                ...state,
                [action.payload.name]: true
            };
        default:
            return state;
    }
};

const lightboxReducer = (state: Lightbox, { type }: GalleryActions) => {
    switch (type) {
        case "OPEN_LIGHTBOX":
            return {
                ...state,
                isOpen: true
            };
        case "CLOSE_LIGHTBOX":
            return {
                ...state,
                isOpen: false
            };
        case "OPEN_FULLSCREEN":
            return {
                ...state,
                isFullscreen: true
            };
        case "CLOSE_FULLSCREEN":
            return {
                ...state,
                isFullscreen: false
            };
        default:
            return state;
    }
};
const carouselReducer = (state: Carousel, action: GalleryActions) => {
    switch (action.type) {
        case "SET_IMAGE":
            return action.payload.activeImage;
        case "NEXT_IMAGE":
            if (state === images.length - 1) {
                return 0;
            }
            return state + 1;
        case "PREV_IMAGE":
            if (state === 0) {
                return images.length - 1;
            }
            return state - 1;
        default:
            return state;
    }
};

const initialState: GalleryState = {
    carousel: 0,
    imageStatus: imageFetchStatus,
    lightbox: {
        isOpen: false,
        isFullscreen: false
    }
};
const galleryReducer = (
    { carousel, imageStatus, lightbox }: GalleryState,
    action: GalleryActions
): GalleryState => ({
    carousel: carouselReducer(carousel, action),
    imageStatus: imageStatusReducer(imageStatus, action),
    lightbox: lightboxReducer(lightbox, action)
});

function useGallery(initState: GalleryState = initialState): UseGallery {
    const [state, dispatch] = React.useReducer(galleryReducer, initState);
    const openLightbox = () =>
        dispatch({
            type: "OPEN_LIGHTBOX"
        });
    const closeLightbox = () =>
        dispatch({
            type: "CLOSE_LIGHTBOX"
        });
    const openFullscreen = () =>
        dispatch({
            type: "OPEN_FULLSCREEN"
        });
    const closeFullscreen = () =>
        dispatch({
            type: "CLOSE_FULLSCREEN"
        });
    const loadImage = (name: ImageName) =>
        dispatch({
            type: "IMAGE_LOADED",
            payload: {
                name
            }
        });
    const setImage = (activeImage: number) =>
        dispatch({
            type: "SET_IMAGE",
            payload: {
                activeImage
            }
        });
    const goNextImage = () =>
        dispatch({
            type: "NEXT_IMAGE"
        });
    const goPrevImage = () =>
        dispatch({
            type: "PREV_IMAGE"
        });

    return {
        openLightbox,
        closeLightbox,
        openFullscreen,
        closeFullscreen,
        loadImage,
        setImage,
        goNextImage,
        goPrevImage,
        ...state
    };
}

export default useGallery;
