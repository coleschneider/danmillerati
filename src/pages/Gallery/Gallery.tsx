import React, { MouseEvent } from "react";
// @ts-ignore
import Carousel from "react-images";
import Gallery from "react-photo-gallery";
import ProgressiveImage from "react-progressive-image";

import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import LazyImage from "../../hooks/LazyImage";

import paths from "../../imagePaths";
import colors from "../../theme/colors";

const images = paths.map(path => ({
    // @ts-ignore
    // eslint-disable-next-line
fallback: require(`../../photos/sm/${path}`),
    // @ts-ignore
    // eslint-disable-next-line
src: require(`../../photos/lg/${path}`),
    width: 2,
    height: 2
}));

const Sidebar = styled.div`
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

const View = styled.div`
    top: 0;
    width: ${({ theme: { layout } }) =>
        layout === "desktop" ? "calc(100% - 20rem)" : "100%"};
    height: 100%;
    background: #fff;
    outline: 0;
`;
interface ViewProps {
    data: { src: string; fallback: string };
    isFullscreen: boolean;
    isModal: boolean;
    formatters: any;
    index: number;
}
interface PropsWithStyles {
    getStyles: (key: string, d: ViewProps) => {};
}
const viewCSS = () => ({
    lineHeight: 0,
    position: "relative",
    textAlign: "center"
});
// @ts-ignore
function getSource({ data, isFullscreen }): string | boolean {
    const { source = data.src } = data;
    if (typeof source === "string") return source;

    return isFullscreen ? source.fullscreen : source.regular;
}
const ViewRenderer = (props: ViewProps & PropsWithStyles) => {
    const { data, formatters, getStyles, index, isFullscreen, isModal } = props;
    const innerProps = {
        alt: formatters.getAltText({ data, index }),
        src: getSource({ data, isFullscreen })
    };

    return (
        <ProgressiveImage src={data.src} placeholder={data.fallback}>
            {(src: string, loading: boolean) => {
                return (
                    <div style={getStyles("view", props)}>
                        {loading && <div className="loader" />}

                        <img
                            {...innerProps}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "100%",
                                maxHeight: "100vh",
                                opacity: loading ? 0.8 : 1,
                                filter: loading ? "blur(25px)" : "blur(0px)"
                            }}
                            src={src}
                            alt=""
                        />
                    </div>
                );
            }}
        </ProgressiveImage>
    );
};
interface State {
    currentIndex: string;
}
const getViewStyles = (base: React.CSSProperties) => ({
    ...base,
    alignItems: "center",
    display: "flex ",
    backgroundColor: colors.black,
    height: "calc(100vh)",
    justifyContent: "center",
    "& > img": {
        width: "100%"
    }
});
const getContainerStyles = (base: React.CSSProperties) => ({
    ...base,
    height: "100vh"
});
export default class RouterGallery extends React.Component<
    RouteComponentProps<{ currentIndex: string }>,
    State
> {
    handleViewChange = (currentIndex: number) => {
        const { history } = this.props;
        // do not influence history on browser back/forward
        // if (history.action === "POP") return;
        history.push(`/gallery/${currentIndex.toString()}`);
    };

    getCurrentView = () => {
        const { match } = this.props;
        return match ? parseInt(match.params.currentIndex, 10) || 0 : 0;
    };

    openLightbox = (e: React.SyntheticEvent, { index }: { index: number }) => {
        this.handleViewChange(index);
    };

    render() {
        return (
            <div>
                <View>
                    <Carousel
                        views={images}
                        styles={{
                            container: getContainerStyles,
                            view: getViewStyles
                        }}
                        currentIndex={this.getCurrentView()}
                        frameProps={{ autoSize: "height" }}
                        trackProps={{
                            onViewChange: this.handleViewChange
                        }}
                        components={{
                            Header: null,
                            View: ViewRenderer,
                            Footer: null
                        }}
                    />
                </View>
                <Sidebar>
                    <Gallery
                        columns={2}
                        direction="column"
                        photos={images}
                        renderImage={props => {
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
                                    onClick={e =>
                                        props.onClick
                                            ? props.onClick(e, props)
                                            : null
                                    }
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
                        onClick={this.openLightbox}
                    />
                </Sidebar>
            </div>
        );
    }
}
