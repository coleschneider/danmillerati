import React, { MouseEvent } from "react";
// @ts-ignore
import Carousel from "react-images";
import Gallery from "react-photo-gallery";

import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import LazyImage from "../../hooks/LazyImage";
import ViewRenderer from "./Renderer";
import images, { Image } from "./imagePaths";
import colors from "../../theme/colors";
import Sidebar from "./Sidebar";

const View = styled.div`
    top: 0;
    width: ${({ theme: { layout } }) =>
        layout === "desktop" ? "calc(100% - 20rem)" : "100%"};
    height: 100%;
    background: #fff;
    outline: 0;
`;

interface State {
    currentIndex: string;
}
interface Formatter {
    data: Image;
    index: number;
}

const getAltText = ({ data, index }: Formatter) => {
    if (data.caption) return data.caption;
    return index;
};
const FooterCaption = ({ currentView }: { currentView: Image }) => {
    const { caption } = currentView;
    return <h1>{caption}</h1>;
};
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
                        formatters={{
                            getAltText
                        }}
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
                            View: ViewRenderer,
                            FooterCaption
                        }}
                    />
                </View>

                <Sidebar onClick={this.openLightbox} />
            </div>
        );
    }
}
