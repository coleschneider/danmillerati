import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import LazyLoad from "react-lazy-load";
import { Image } from "./imagePaths";

type onLoadFn = (event: Props) => void;
type getLoadStatusFn = (name: string) => boolean;
export type Props = {
    photo: Image;
    index: number;
    margin: number;
    direction: "row" | "column";
    key: string;
    left?: number;
    getLoadStatus: getLoadStatusFn;
    top?: number;
    onLoad: onLoadFn;
    onClick: (e: React.SyntheticEvent, p: Props) => void;
    containerHeight?: number;
};

const Imagewrap = styled.img<{ isLoaded: boolean }>`
    opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
    width: 100%;
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
    height: auto;
`;

function ImageRenderer(onLoad: onLoadFn, getLoadStatus: getLoadStatusFn) {
    return function RenderImage(props: Props) {
        const { onClick, photo } = props;
        const isLoaded = getLoadStatus(photo.name);
        return (
            // eslint-disable-next-line
            <div key={photo.name} onClick={(e: React.SyntheticEvent) =>onClick(e, props)}>
                <LazyLoad
                    key={photo.name}
                    width={photo.width}
                    height={photo.height}
                    debounce={false}
                >
                    <Imagewrap
                        isLoaded={isLoaded}
                        src={photo.src}
                        alt=""
                        onLoad={() => onLoad(props)}
                    />
                </LazyLoad>
            </div>
        );
    };
}
export default ImageRenderer;
