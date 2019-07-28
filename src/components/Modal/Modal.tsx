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
interface Props {
    thumbnails: GalleryImage[];
}
function Modal({ thumbnails }: Props) {
    const {
        lightbox: { isOpen, isFullscreen },
        closeLightbox,
        openLightbox,
        goNext,
        goPrev,
        openFullscreen,
        closeFullscreen,
        carousel
    } = useGalleryContext();

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = `hidden`;
        }
        const handleKeyboard = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                goNext();
            } else if (e.key === "ArrowLeft") {
                goPrev();
            }
        };
        document.addEventListener(`keydown`, handleKeyboard);
        return () => {
            document.removeEventListener(`keydown`, handleKeyboard);
            document.body.style.removeProperty(`overflow-y`);
        };
        // eslint-disable-next-line
    }, [carousel, isOpen]);

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
                <Next onClick={() => goNext()} />
                <Prev onClick={() => goPrev()} />
                <ModalImageWrapper>
                    <ModalImagePadding />
                    <ModalImage src={thumbnails[carousel].src} alt="" />
                </ModalImageWrapper>
            </ModalContainer>
        </ModalBackground>
    );
}
export default Modal;
