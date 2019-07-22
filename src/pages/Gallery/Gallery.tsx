import * as React from "react";

import Gallery from "react-photo-gallery";
import images, { imageFetchStatus } from "./imagePaths";
import ImageLoader from "./Image";
import Modal from "../../components/Modal/Modal";
import useGallery from "../../hooks/useGallery";

interface SlideProps {
    photo: GalleryImage;
    next: GalleryImage;
    previous: GalleryImage;
    index: number;
}

function Grid() {
    const gallery = useGallery();
    const { setImage, openLightbox, loadImage, imageStatus } = gallery;
    const getImage = (name: ImageName) => imageStatus[name];

    const onGalleryClick = (e: React.SyntheticEvent, { index }: SlideProps) => {
        setImage(index);
        openLightbox();
    };
    return (
        <>
            <Modal key="modal" {...gallery} />
            <Gallery
                photos={images}
                onClick={onGalleryClick}
                renderImage={ImageLoader(loadImage, getImage)}
            />
        </>
    );
}
export default Grid;
