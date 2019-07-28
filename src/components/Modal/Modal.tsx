/* eslint-disable react-hooks/rules-of-hooks */

import * as React from "react";
import useClickOutside from "../../hooks/useClickOutside";

import {
    controls,
    ModalBackground,
    ModalContainer,
    ModalImage,
    ModalImagePadding,
    ModalImageWrapper
} from "./styles";
import { useGalleryContext } from "../../pages/Gallery/Gallery";

const { Close, Next, Prev, FullscreenToggle } = controls;

// @ts-ignore
const handleArrowKeys = (goPrev, goNext) => (event: KeyboardEvent) => {
    if (event.key === `ArrowRight`) goNext();
    else if (event.key === `ArrowLeft`) goPrev();
};

function Modal({ goNext, goPrev, thumbnails }: any) {
    const {
        lightbox: { isOpen, isFullscreen },
        closeLightbox,
        openLightbox,
        openFullscreen,
        closeFullscreen,
        goNextImage,
        goPrevImage,
        carousel
    } = useGalleryContext();

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = `hidden`;
        }

        document.addEventListener(`keydown`, handleArrowKeys(goPrev, goNext));
        return () => {
            document.removeEventListener(
                `keydown`,
                handleArrowKeys(goPrev, goNext)
            );
            document.body.style.removeProperty(`overflow-y`);
        };
    }, [carousel, goNext, goPrev, isOpen]);

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
                onClick={(event: React.SyntheticEvent) =>
                    event.stopPropagation()
                }
                ref={ref}
            >
                <Close onClick={closeLightbox} />
                <FullscreenToggle
                    isFullscreen={isFullscreen}
                    onClick={() => {
                        if (!isFullscreen) {
                            openFullscreen();
                        } else {
                            closeFullscreen();
                        }
                    }}
                />
                <Next
                    onClick={() =>
                        goNext().then(() => {
                            goNextImage();
                        })
                    }
                />
                <Prev onClick={() => goPrev().then(() => goPrevImage())} />
                <ModalImageWrapper>
                    <ModalImagePadding />
                    <ModalImage src={thumbnails[carousel].src} alt="" />
                </ModalImageWrapper>
            </ModalContainer>
        </ModalBackground>
    );
}
export default Modal;
