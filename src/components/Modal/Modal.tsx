/* eslint-disable react-hooks/rules-of-hooks */

import * as React from "react";
import useClickOutside from "../../hooks/useClickOutside";
import images from "../../pages/Gallery/imagePaths";
import {
    controls,
    ModalBackground,
    ModalContainer,
    ModalImage,
    ModalImagePadding,
    ModalImageWrapper
} from "./styles";

const { Close, Next, Prev, FullscreenToggle } = controls;

// const handleArrowKeys = (modal: any, setModal: any) => event => {
//     if (event.key === `ArrowRight`) setModal(modal + 1);
//     else if (event.key === `ArrowLeft`) setModal(modal - 1);
// };

export default function Modal({
    carousel,
    lightbox: { isOpen, isFullscreen },
    closeFullscreen,
    closeLightbox,
    openLightbox,
    goNextImage,
    goPrevImage,
    openFullscreen
}: UseGallery) {
    const activeImage = images[carousel];
    if (isOpen) {
        React.useEffect(() => {
            document.body.style.overflowY = `hidden`;

            // document.addEventListener(`keydown`, handler);
            return () => {
                // document.removeEventListener(`keydown`, handler);
                document.body.style.removeProperty(`overflow-y`);
            };
        }, []);
        const ref = React.useRef<HTMLDivElement>(null);
        useClickOutside(ref, () => closeLightbox());
        return (
            // calling setModal without arguments will close the modal
            <ModalBackground
                open={isOpen}
                // @ts-ignore
                onClick={() => {
                    if (isOpen) {
                        openLightbox();
                    } else {
                        closeLightbox();
                    }
                }}
            >
                <ModalContainer
                    isFullscreen={isFullscreen}
                    onClick={event => event.stopPropagation()}
                    // {...{ className, fullscreen }}
                    ref={ref}
                >
                    {true && (
                        <>
                            <Close onClick={closeLightbox} />
                            <FullscreenToggle
                                onClick={() => {
                                    if (!isFullscreen) {
                                        openFullscreen();
                                    } else {
                                        closeFullscreen();
                                    }
                                }}
                                // {...{ fullscreen }}
                            />
                            <Next onClick={goNextImage} />
                            <Prev onClick={goPrevImage} />
                        </>
                    )}
                    <ModalImageWrapper>
                        <ModalImagePadding />
                        <ModalImage src={activeImage.src} alt="" />
                    </ModalImageWrapper>
                </ModalContainer>
            </ModalBackground>
        );
    }
    if (typeof document !== `undefined`)
        document.body.style.removeProperty(`overflow-y`);
    return null;
}
