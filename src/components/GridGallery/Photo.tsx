/* eslint-disable */

import React from "react";
import {useInView}  from "../../hooks/useInView";
import { useGalleryContext } from "../../pages/Gallery/Gallery";
import Modal from "../Modal/Modal";

const imgWithClick = { cursor: "pointer" };
// eslint-disable-next-line
const Photo = ({ index, onClick, photo, margin, direction, top, left }: any) => {
    const {getImageStatus, loadImage, imageStatus, imageLoading, } = useGalleryContext()
    const [ref, inView, entry] = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0
    });
    
    const imgStyle = { margin, display: "block" } as any;
    if (direction === "column") {
        imgStyle.position = "absolute";
        imgStyle.left = left;
        imgStyle.top = top;
    }
    
    
    const isLoaded = getImageStatus(photo.name)
    const imageStyle = onClick ? { ...imgStyle, ...imgWithClick } : imgStyle;
    const finalStyle = {
        ...imageStyle,
        // eslint-disable-next-line
        height: photo.height,
        // eslint-disable-next-line
        width: photo.width
    };
    
    const handleClick = () => {
        // setImage(index)
        // openLightbox()
    }
    React.useEffect(() => {
        if(inView){
            loadImage(photo.name)
        }
    }, [inView]);
    
    return (
        <div
            // eslint-disable-next-line
            data-name={photo.name}
            className="img_lzy"
            ref={ref}
            // eslint-disable-next-line
            onClick={(e) => onClick(e, {...photo, index})}
            style={{
                ...finalStyle

            }}
        >
            
            {inView && (
                <img
                    alt=""
                    // key={key}
                    // @ts-ignore
                    src={photo.src}
                    onLoad={() => {
                        imageLoading(photo.name);
                    }}
                    style={{
                        ...finalStyle,
                opacity: isLoaded ? 1 : 0,
                transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0s"
                    }}
                    onClick={onClick ? handleClick : null}
                />
            )}
        </div>
    );
};

// export const photoPropType = PropTypes.shape({
//     key: PropTypes.string,
//     src: PropTypes.string.isRequired,
//     width: PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired,
//     alt: PropTypes.string,
//     title: PropTypes.string,
//     srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
//     sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
// });

// Photo.propTypes = {
//     index: PropTypes.number.isRequired,
//     onClick: PropTypes.func,
//     photo: photoPropType.isRequired,
//     margin: PropTypes.number,
//     top: props => {
//         if (props.direction === "column" && typeof props.top !== "number") {
//             return new Error(
//                 "top is a required number when direction is set to `column`"
//             );
//         }
//     },
//     left: props => {
//         if (props.direction === "column" && typeof props.left !== "number") {
//             return new Error(
//                 "left is a required number when direction is set to `column`"
//             );
//         }
//     },
//     direction: PropTypes.string
// };

export default Photo;
