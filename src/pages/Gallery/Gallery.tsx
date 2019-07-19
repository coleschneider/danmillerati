import * as React from "react";

import Gallery from "react-photo-gallery";
import images, { Image, imageFetchStatus } from "./imagePaths";
import ImageLoader from "./Image";
import Modal from "../../components/Modal/Modal";
import galleryReducer, { initialState, galleryActions } from "./galleryReducer";

interface SlideProps {
    photo: Image;
    next: Image;
    previous: Image;
    index: number;
}
function Grid() {
    const [{ loadStatus, activeImage, isOpen }, dispatch] = React.useReducer(
        galleryReducer,
        initialState
    );
    const { setActiveImage, setImageLoaded, openLightbox } = galleryActions(
        dispatch
    );

    const getImage = (name: string) => loadStatus[name];
    const onGalleryClick = (e: React.SyntheticEvent, { index }: SlideProps) => {
        setActiveImage(index);
        openLightbox();
    };
    return (
        <>
            <Modal
                key="modal"
                dispatch={dispatch}
                show={isOpen}
                activeImage={images[activeImage]}
            />
            <Gallery
                photos={images}
                onClick={onGalleryClick}
                renderImage={ImageLoader(setImageLoaded, getImage)}
            />
        </>
    );
}
export default Grid;
