import * as React from "react";

interface Media {
    mobile: number;
    desktopMin: number;
}
const findLayout = ({ desktopMin }: Media) => {
    if (window.innerWidth < desktopMin) {
        return "mobile";
    }

    return "desktop";
};
export default function useWindowWidth(media: Media) {
    const [width, setWidth] = React.useState(findLayout(media));

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(findLayout(media));
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return width;
}
