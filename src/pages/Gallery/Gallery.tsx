import * as React from "react";

import Gallery from "react-photo-gallery";
import images from "./imagePaths";
import ImageLoader from "./Image";
import Modal from "../../components/Modal/Modal";
import useGallery from "../../hooks/useGallery";
import ImageRenderer, { Props } from "./Image";

interface SlideProps {
    photo: GalleryImage;
    next: GalleryImage;
    previous: GalleryImage;
    index: number;
}

function Grid() {
    /*
        TODO: Grab image index from route params and pass to 
        useGallery
    */
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
                // @ts-ignore
                renderImage={(props: Props) => (
                    <ImageRenderer
                        {...props}
                        isLoaded={imageStatus[props.photo.name]}
                        onLoad={(name: ImageName) => loadImage(name)}
                        imageStatus={imageStatus}
                    />
                )}
            />
        </>
    );
}
export default Grid;
