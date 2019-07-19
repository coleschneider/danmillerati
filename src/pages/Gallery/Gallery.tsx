import * as React from "react";
import styled, { keyframes } from "styled-components";
// @ts-ignore
import LazyLoad from "react-lazy-load";
// @ts-ignore
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import images, { Image } from "./imagePaths";

const FadeinImg = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;
interface LoaderProps {
    src: string;
    onClick: any;
}

const Imagewrap = styled.img<{ isLoaded: boolean }>`
    opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
    width: 100%;
    height: auto;
    animation: ${FadeinImg} cubic-bezier(0.23, 1, 0.32, 1) 1;
`;
const ImageLoader = ({ src, onClick }: LoaderProps) => {
    const [isLoaded, setLoaded] = React.useState(false);
    const onLoad = () => {
        setLoaded(true);
    };
    return (
        <Imagewrap
            style={{
                breakInside: "avoid",
                padding: 5
            }}
            onClick={onClick}
            isLoaded={isLoaded}
            src={src}
            alt=""
            onLoad={onLoad}
        />
    );
};
const Row = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* height: 100vw; */
    /* max-height: 800px; 
    font-size: 0; */
    column-count: 3;
    column-gap: 0;
`;
// const g = document.getElementById("grid");
// @ts-ignore
function masonry(
    grid: string,
    gcLength: number,
    width: number,
    height: number,
    // @ts-ignore
    gridGutter,
    dGridCol: number,
    tGridCol: number,
    mGridCol: number
) {
    // Total number of cells in the masonry

    let gHeight = 0;
    // Initial height of our masonry

    let i; // Loop counter

    // Calculate the net height of all the cells in the masonry
    // eslint-disable-next-line
    for (i = 0; i < gcLength; ++i) {
        // eslint-disable-next-line
        gHeight += height + parseInt(gridGutter);
    }
    // console.log(g);
    // if (window.screen.width >= 1024) {
    //     g.style.height = `${gHeight / dGridCol + gHeight / (gcLength + 1)}px`;
    // } else if (window.screen.width < 1024 && window.screen.width >= 768) {
    //     g.style.height = `${gHeight / tGridCol + gHeight / (gcLength + 1)}px`;
    // } else {
    //     g.style.height = `${gHeight / mGridCol + gHeight / (gcLength + 1)}px`;
    // }
}
// @ts-ignore
// eslint-disable-next-line
const ImageRenderer = (props: any) => {
    const { photo } = props;

    return (
        <LazyLoad
            // eslint-disable-next-line
            key={photo.name}
            // eslint-disable-next-line
            width={photo.width}
            // eslint-disable-next-line
            height={photo.height}
            debounce={false}
            offsetVertical={500}
        >
            <ImageLoader
                onClick={(e: any) => props.onClick(e, props)}
                // eslint-disable-next-line
            src={photo.src} />
        </LazyLoad>
    );
};
function Grid() {
    // @ts-ignore
    // eslint-disable-next-line
    const [currentImage, setCurrentImage] = React.useState(0);
    const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

    const openLightbox = React.useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <>
            <Gallery
                photos={images}
                renderImage={ImageRenderer}
                onClick={openLightbox}
            />
            ;
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            lazyLoad
                            currentIndex={currentImage}
                            // eslint-disable-next-line
                            views={images.map((x: any) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </>
    );
}
export default Grid;
