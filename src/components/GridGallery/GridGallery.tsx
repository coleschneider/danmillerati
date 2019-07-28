/* eslint-disable */

import React, { useRef } from "react";
import useResizeObserver from "../../hooks/useResizeObserver";
import Photo from "./Photo";
import { computeColumnLayout } from "./layouts/columns";
import { computeRowLayout } from "./layouts/justified";
import { findIdealNodeSearch } from "../../utils/findAnchor";
import imagePaths, { imageState } from "../../pages/Gallery/imagePaths";
import { useGalleryContext } from "../../pages/Gallery/Gallery";
import Modal from "../Modal/Modal";

function GridGallery({    
    photos,    
    direction,    
    margin,    
    limitNodeSearch,    
    targetRowHeight,    
    columns,
    renderImage,
}:any) {
    const { carousel, goPrevImage, imageStatus, goNextImage,getImageStatus, setImage, openLightbox, imageLoading, loadImage, lightbox } = useGalleryContext();

    const galleryEl = useRef(null);
    const { containerWidth } = useResizeObserver({
        initialWidth: 0,
        container: galleryEl
    });
    const handleClick = (event, { index, name }) => {
        const hasLoaded =imageStatus[name]
        if(hasLoaded){
            setImage(index)
            openLightbox()
        }
        // onClick(event, {
        //     index,
        //     photo: photos[index],
        //     previous: photos[index - 1] || null,
        //     next: photos[index + 1] || null
        // });
    };

    // no containerWidth until after first render with refs, skip calculations and render nothing
    if (!containerWidth) return <div ref={galleryEl}>&nbsp;</div>;
    // subtract 1 pixel because the browser may round up a pixel
    const width = containerWidth - 1;
    let galleryStyle;
    let thumbs;

    if (direction === "row") {
        // allow user to calculate limitNodeSearch from containerWidth
        if (typeof limitNodeSearch === "function") {
            // eslint-disable-next-line
            limitNodeSearch = limitNodeSearch(containerWidth);
        }
        if (typeof targetRowHeight === "function") {
            // eslint-disable-next-line
            targetRowHeight = targetRowHeight(containerWidth);
        }
        // set how many neighboring nodes the graph will visit
        if (limitNodeSearch === undefined) {
            
            // eslint-disable-next-line
            limitNodeSearch = 2;
            if (containerWidth >= 450) {
                // eslint-disable-next-line
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
        // allow user to calculate columns from containerWidth
        if (typeof columns === "function") {
            // eslint-disable-next-line
            columns = columns(containerWidth);
        }
        // set default breakpoints if user doesn't specify columns prop
        if (columns === undefined) {
            // eslint-disable-next-line
            columns = 1;
            // eslint-disable-next-line
            if (containerWidth >= 500) columns = 2;
            // eslint-disable-next-line
            if (containerWidth >= 900) columns = 3;
            // eslint-disable-next-line
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

    const renderComponent = renderImage || Photo;
    const activeImage = imagePaths[carousel]

    return (
        <div className="react-photo-gallery--gallery">
            <div ref={galleryEl} style={galleryStyle}>
                {thumbs.map((thumb, index) => {
                    const { left, top, containerHeight, ...photo } = thumb;
                    return <Photo
                        left={left}
                        top={top}
                        key={thumb.key || thumb.src}
                        containerHeight={containerHeight}
                        index={index}
                        margin={margin}
                        direction={direction}
                        onClick={handleClick}
                        photo={photo}
                    
                    />
                })}

            </div>
        </div>
    );
}
const Gallery = React.memo(GridGallery);

// Gallery.propTypes = {
//   photos: PropTypes.arrayOf(photoPropType).isRequired,
//   direction: PropTypes.string,
//   onClick: PropTypes.func,
//   columns: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
//   targetRowHeight: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
//   limitNodeSearch: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
//   margin: PropTypes.number,
//   renderImage: PropTypes.func,
// };
// @ts-ignore
Gallery.defaultProps = {
    margin: 2,
    direction: "row",
    targetRowHeight: 300
};
export { Photo };
export default Gallery;
