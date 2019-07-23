import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import LazyLoad from "react-lazy-load";

type onLoadFn = (name: ImageName) => void;
type getLoadStatusFn = (name: ImageName) => boolean | undefined;
export type Props = {
    photo: GalleryImage;
    index: number;
    margin: number;
    direction: "row" | "column";
    key: string;
    isLoaded: boolean;
    left?: number;
    getLoadStatus: getLoadStatusFn;
    top?: number;
    imageStatus: FromIndex;
    onLoad: onLoadFn;
    onClick: (e: React.SyntheticEvent, p: Props) => void;
    containerHeight?: number;
};

const Imagewrap = styled.img<{ isLoaded: boolean | undefined }>`
    opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
    width: 100%;
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
    height: auto;
`;

function RenderImage(props: Props) {
    const { onClick, photo, imageStatus, onLoad, isLoaded } = props;
    // eslint-disable-next-line
    console.log(isLoaded)
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
                    isLoaded={imageStatus[photo.name]}
                    src={photo.src}
                    alt=""
                    onLoad={() => onLoad(photo.name)}
                />
            </LazyLoad>
        </div>
    );
}

// function ImageRenderer(props: Props) {
//     const { photo, onLoad, imageStatus, onClick } = props;

//     const isLoaded = (name: ImageName) => {
//         return imageStatus[name];
//     };
//     return (
//         // eslint-disable-next-line
//         <div
//             key={photo.name}
//             onClick={(e: React.SyntheticEvent) => onClick(e, props)}
//         >
//             <LazyLoad
//                 key={photo.name}
//                 width={photo.width}
//                 height={photo.height}
//                 debounce={false}
//             >
//                 <Imagewrap
//                     isLoaded={isLoaded(photo.name)}
//                     src={photo.src}
//                     alt=""
//                     onLoad={() => onLoad(photo.name)}
//                 />
//             </LazyLoad>
//         </div>
//     );
// }

class ImageRenderer extends React.Component<Props> {
    shouldComponentUpdate(nextProps: Props) {
        const { isLoaded } = this.props;
        if (isLoaded !== nextProps.isLoaded) {
            return true;
        }
        return false;
    }

    // handleLoadStart = (e: React.SyntheticEvent) => {
    //     const {
    //         isLoaded,
    //         photo: { name }
    //     } = this.props;
    //     if (!isLoaded) {
    //         import(
    //             /* webpackMode: "lazy-once" */
    //             `../../photos/lg/${name}`
    //         ).then(src => {
    //             console.log(src);
    //         });
    //     }
    //     console.log("Load started for photo: ", name);
    //     console.log("Load Status: ", isLoaded);
    // };

    handleLoad = (e: React.SyntheticEvent) => {
        const {
            onLoad,
            photo: { name }
        } = this.props;
        // console.log("Load finished for: ", name);
        onLoad(name);
    };

    render() {
        const {
            photo: { name, width, height, src },
            onLoad,
            isLoaded,
            onClick
        } = this.props;
        return (
            // eslint-disable-next-line
            <div key={name} onClick={(e: React.SyntheticEvent) =>onClick(e, this.props)}>
                <LazyLoad
                    key={name}
                    width={width}
                    height={height}
                    debounce={false}
                >
                    <Imagewrap
                        isLoaded={isLoaded}
                        src={src}
                        alt=""
                        onLoad={this.handleLoad}
                    />
                </LazyLoad>
            </div>
        );
    }
}

export default ImageRenderer;
