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
import { useGalleryContext } from "../../pages/Gallery/Gallery";
import imagePaths from "../../pages/Gallery/imagePaths";

const { Close, Next, Prev, FullscreenToggle } = controls;
function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
// @ts-ignore
const handleArrowKeys = (goPrev, goNext) => (event: KeyboardEvent) => {
    if (event.key === `ArrowRight`) goNext();
    else if (event.key === `ArrowLeft`) goPrev();
};

function Modal({ goNext, goPrev, thumbnails }: any) {
    // const isLoaded = imageStatus[activeImage.name];

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
    // @ts-ignore

    const prevIndex = usePrevious(carousel);

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
    // if (isOpen) {/

    const ref = React.useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => closeLightbox());
    // @ts-ignore

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
                // {...{ className, fullscreen }}
                ref={ref}
            >
                {true && (
                    <>
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
                        <Prev
                            onClick={() => goPrev().then(() => goPrevImage())}
                        />
                    </>
                )}
                <ModalImageWrapper>
                    <ModalImagePadding />

                    <ModalImage src={thumbnails[carousel].src} alt="" />
                </ModalImageWrapper>
            </ModalContainer>
        </ModalBackground>
    );
    // }
    // if (typeof document !== `undefined`)
    //     document.body.style.removeProperty(`overflow-y`);
    // return null;
}
// export default React.memo(Modal, (prevProps, nextProps) => {
//     return prevProps.carousel === nextProps.carousel;
// });

export default Modal;
