import * as React from "react";
import ProgressiveImage from "react-progressive-image";
import { Image } from "./imagePaths";

interface ViewProps {
    data: Image;
    isFullscreen: boolean;
    isModal: boolean;
    formatters: any;
    index: number;
}
interface PropsWithStyles {
    getStyles: (key: string, d: ViewProps) => {};
}
interface SourceProps {
    data: Image;
    isFullscreen: boolean;
}
function getSource({ data, isFullscreen }: SourceProps): string | boolean {
    const { src } = data;
    return src;
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

export default ViewRenderer;
