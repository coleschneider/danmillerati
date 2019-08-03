import React from "react";
import styled from "styled-components";
import useInView from "../../hooks/useInView/useInView";
import { useGalleryContext } from "../../pages/Gallery/Gallery";

interface ImageStyle {
    height: number;
    width: number;
    left: number;
    top: number;
    margin: number;
    direction: "row" | "column";
    isLoaded: boolean;
}
const ProgressiveImage = styled.img<ImageStyle>`
    display: block;
    cursor: pointer;
    position: ${({ direction }) => direction === "column" && "absolute"};
    top: ${({ top, direction }) => direction === "column" && top};
    left: ${({ left, direction }) => direction === "column" && left};
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
`;
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
const Photo = React.memo(
    ({ index, onClick, photo, margin, direction, top, left }: Props) => {
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
        const imageStyle = onClick
            ? { ...imgStyle, ...imgWithClick }
            : imgStyle;
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
                    <ProgressiveImage
                        alt=""
                        isLoaded={isLoaded}
                        direction={direction}
                        height={photo.height}
                        width={photo.width}
                        margin={margin}
                        left={left}
                        top={top}
                        src={photo.src}
                        onLoad={() => {
                            imageLoading(photo.name);
                        }}
                    />
                )}
            </div>
        );
    }
);

export default Photo;
