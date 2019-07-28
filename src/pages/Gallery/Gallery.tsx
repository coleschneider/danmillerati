import * as React from "react";

import GridGallery from "../../components/GridGallery/GridGallery";
import Modal from "../../components/Modal/Modal";
import useGallery from "../../hooks/useGallery";
import createGlobalState from "../../hooks/useGlobalState";

const preloadImage = url => {
    return new Promise((resolve, reject) => {
        const image = new Image();

        // @ts-ignore
        image.onload = resolve(url);
        image.onerror = reject;
        image.src = url;
    });
};
export const useGalleryContext = createGlobalState(useGallery);
function Grid() {
    const {
        lightbox: { isOpen },
        carousel,
        imageStatus
    } = useGalleryContext();
    const imgs = Object.keys(imageStatus).map(image => imageStatus[image]);

    const handleNext = () => {
        const potentialIndex = carousel === imgs.length - 1 ? 0 : carousel + 1;
        const nextImage = imgs[potentialIndex];
        if (nextImage.isCached) {
            return Promise.resolve();
        }
        return preloadImage(nextImage.src);
    };

    const handlePrev = () => {
        const potentialIndex = carousel === 0 ? imgs.length - 1 : carousel - 1;
        const prevImage = imgs[potentialIndex];
        if (prevImage.isCached) {
            return Promise.resolve();
        }
        return preloadImage(prevImage.src);
    };
    return (
        // @ts-ignore
        <div>
            {isOpen && (
                <Modal
                    thumbnails={imgs}
                    goPrev={handlePrev}
                    goNext={handleNext}
                />
            )}
            <GridGallery photos={imgs} />
        </div>
    );
}
export default Grid;
