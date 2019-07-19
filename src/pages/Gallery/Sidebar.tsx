import React, { MouseEvent } from "react";
// @ts-ignore
import Carousel from "react-images";
import Gallery, { RenderImageProps } from "react-photo-gallery";

import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import LazyImage from "../../hooks/LazyImage";
import ViewRenderer from "./Renderer";
import images, { Image } from "./imagePaths";
import colors from "../../theme/colors";

const Wrapper = styled.div`
    position: fixed;
    position: fixed;
    top: 0;
    width: 20rem;
    height: 100%;
    background: #fff;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: right;
    visibility: visible;
    right: 0;
    display: ${({ theme: { layout } }) =>
        layout === "mobile" ? "none" : "block"};
`;
interface Props {
    onClick?: (e: React.SyntheticEvent, imageProps: ImageProps) => void;
}
interface ImageProps {
    photo: RenderImageProps & Image;
    left: number;
    top: number;
    margin: number;
    index: number;
}
const Sidebar = ({ onClick }: Props) => {
    return (
        <Wrapper>
            {/* @ts-ignore */}
            <Gallery
                columns={2}
                direction="column"
                photos={images}
                renderImage={(props: ImageProps) => {
                    return (
                        // <ProgressiveImage
                        //     src={props.photo.src}
                        //     // @ts-ignore
                        //     placeholder={props.photo.fallback as string}
                        // >
                        // @ts-ignore
                        <LazyImage
                            // @ts-ignore
                            key={props.photo.src}
                            onClick={e => (onClick ? onClick(e, props) : null)}
                            // @ts-ignore
                            fallback={props.photo.fallback}
                            style={{
                                left: props.left,
                                top: props.top,
                                margin: props.margin,
                                display: "block",
                                position: "absolute",
                                cursor: "pointer",
                                width: props.photo.width,
                                height: props.photo.height
                            }}
                            src={props.photo.src}
                            alt=""
                        />

                        // </ProgressiveImage>
                    );
                }}
            />
        </Wrapper>
    );
};

export default Sidebar;
