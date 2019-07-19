/* eslint-disable react-hooks/rules-of-hooks */

import * as React from "react";
import { ThemeProvider } from "styled-components";
import useClickOutside from "../../hooks/useClickOutside";

import {
    ModalBackground,
    ModalContainer,
    controls,
    ModalImage,
    ModalImagePadding,
    ModalImageWrapper
} from "./styles";
import { galleryActions } from "../../pages/Gallery/galleryReducer";
import { Image } from "../../pages/Gallery/imagePaths";

const { Close, Next, Prev, FullscreenToggle } = controls;
// @ts-ignore
const handleArrowKeys = (modal: any, setModal: any) => event => {
    if (event.key === `ArrowRight`) setModal(modal + 1);
    else if (event.key === `ArrowLeft`) setModal(modal - 1);
};

interface Props {
    show: boolean;
    dispatch: React.Dispatch<any>;
    activeImage: Image;
}

export default function Modal({ show, dispatch, activeImage }: Props) {
    const {
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage
    } = galleryActions(dispatch);

    if (show) {
        React.useEffect(() => {
            document.body.style.overflowY = `hidden`;

            // document.addEventListener(`keydown`, handler);
            return () => {
                // document.removeEventListener(`keydown`, handler);
                document.body.style.removeProperty(`overflow-y`);
            };
        }, []);
        const ref = React.useRef();
        useClickOutside(ref, () => closeLightbox());
        return (
            // calling setModal without arguments will close the modal
            <ModalBackground
                open={show}
                // @ts-ignore
                onClick={() => {
                    if (show) {
                        openLightbox();
                    } else {
                        closeLightbox();
                    }
                }}
            >
                <ModalContainer
                    onClick={event => event.stopPropagation()}
                    // {...{ className, fullscreen }}
                    // @ts-ignore
                    ref={ref}
                >
                    {true && (
                        <>
                            <Close onClick={closeLightbox} />
                            <FullscreenToggle
                            // onClick={() => setFullscreen(!fullscreen)}
                            // {...{ fullscreen }}
                            />
                            <Next onClick={nextImage} />
                            <Prev onClick={prevImage} />
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
