import React from "react";
import { useInView } from "../../hooks/useInView";
import { useGalleryContext } from "../../pages/Gallery/Gallery";

const imgWithClick = { cursor: "pointer" };
// eslint-disable-next-line
interface Props {
    index: number;
    onClick: (
        e: React.SyntheticEvent,
        photo: GalleryImage & { index: number }
    ) => void;
    photo: GalleryImage;
    margin: number;
    top: number;
    left: number;
    direction: "row" | "column";
}
const Photo = ({
    index,
    onClick,
    photo,
    margin,
    direction,
    top,
    left
}: Props) => {
    const { getImageStatus, loadImage, imageLoading } = useGalleryContext();
    const [ref, inView, entry] = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0
    });

    const imgStyle = { margin, display: "block" } as React.CSSProperties;
    if (direction === "column") {
        imgStyle.position = "absolute";
        imgStyle.left = left;
        imgStyle.top = top;
    }

    const isLoaded = getImageStatus(photo.name);
    const imageStyle = onClick ? { ...imgStyle, ...imgWithClick } : imgStyle;
    const finalStyle = {
        ...imageStyle,
        // eslint-disable-next-line
        height: photo.height,
        // eslint-disable-next-line
        width: photo.width
    };

    React.useEffect(() => {
        if (inView) {
            loadImage(photo.name);
        }
        // eslint-disable-next-line
    }, [inView]);

    return (
        <div
            role="article"
            data-name={photo.name}
            className="img_lzy"
            ref={ref}
            onClick={e => onClick(e, { ...photo, index })}
            style={{
                ...finalStyle
            }}
        >
            {inView && (
                <img
                    alt=""
                    src={photo.src}
                    onLoad={() => {
                        imageLoading(photo.name);
                    }}
                    style={{
                        ...finalStyle,
                        opacity: isLoaded ? 1 : 0,
                        transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1) 0s"
                    }}
                />
            )}
        </div>
    );
};

export default Photo;
