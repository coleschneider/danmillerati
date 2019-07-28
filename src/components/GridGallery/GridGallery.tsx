import React, { useRef } from "react";
import useResizeObserver from "../../hooks/useResizeObserver";
import Photo from "./Photo";
import { computeColumnLayout } from "./layouts/columns";
import { computeRowLayout } from "./layouts/justified";
import { findIdealNodeSearch } from "../../utils/findAnchor";
import { useGalleryContext } from "../../pages/Gallery/Gallery";

type numberFn = (n: number) => number;

interface Props {
    photos: GalleryImage[];
    direction?: "row" | "column";
    margin?: number;
    limitNodeSearch?: numberFn | number;
    targetRowHeight?: numberFn | number;
    columns?: numberFn | number;
}

function GridGallery({
    photos,
    direction,
    margin,
    limitNodeSearch,
    targetRowHeight,
    columns
}: Props) {
    const { imageStatus, setImage, openLightbox } = useGalleryContext();

    const galleryEl = useRef(null);
    const { containerWidth } = useResizeObserver({
        initialWidth: 0,
        container: galleryEl
    });
    const handleClick = (
        event: React.SyntheticEvent,
        { index, name }: { index: number; name: ImageName }
    ) => {
        const hasLoaded = imageStatus[name];
        if (hasLoaded) {
            setImage(index);
            openLightbox();
        }
    };

    if (!containerWidth) return <div ref={galleryEl}>&nbsp;</div>;

    const width = containerWidth - 1;
    let galleryStyle;
    let thumbs;

    if (direction === "row") {
        if (typeof limitNodeSearch === "function") {
            limitNodeSearch = limitNodeSearch(containerWidth);
        }
        if (typeof targetRowHeight === "function") {
            targetRowHeight = targetRowHeight(containerWidth);
        }

        if (limitNodeSearch === undefined) {
            limitNodeSearch = 2;
            if (containerWidth >= 450) {
                limitNodeSearch = findIdealNodeSearch({
                    containerWidth,
                    targetRowHeight
                });
            }
        }

        galleryStyle = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"
        };
        thumbs = computeRowLayout({
            containerWidth: width,
            limitNodeSearch,
            targetRowHeight,
            margin,
            photos
        });
    }
    if (direction === "column") {
        if (typeof columns === "function") {
            columns = columns(containerWidth);
        }

        if (columns === undefined) {
            columns = 1;
            if (containerWidth >= 500) columns = 2;
            if (containerWidth >= 900) columns = 3;
            if (containerWidth >= 1500) columns = 4;
        }
        galleryStyle = { position: "relative" };
        thumbs = computeColumnLayout({
            containerWidth: width,
            columns,
            margin,
            photos
        });
        galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
    }

    return (
        <div className="grid-gallery">
            <div ref={galleryEl} style={galleryStyle}>
                {thumbs.map((thumb, index) => {
                    const { left, top, containerHeight, ...photo } = thumb;
                    return (
                        <Photo
                            left={left}
                            top={top}
                            key={thumb.key || thumb.src}
                            index={index}
                            margin={margin}
                            direction={direction}
                            onClick={handleClick}
                            photo={photo}
                        />
                    );
                })}
            </div>
        </div>
    );
}
const Gallery = React.memo(GridGallery);

// @ts-ignore
Gallery.defaultProps = {
    margin: 2,
    direction: "row",
    targetRowHeight: 300
};
export { Photo };
export default Gallery;
