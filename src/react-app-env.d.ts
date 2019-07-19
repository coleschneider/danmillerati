// / <reference types="node" />
// / <reference types="react" />
// / <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: "development" | "production" | "test";
        readonly PUBLIC_URL: string;
    }
}

declare module "*.bmp" {
    const src: string;
    export default src;
}

declare module "*.gif" {
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.png" {
    const src: string;
    export default src;
}

declare module "*.webp" {
    const src: string;
    export default src;
}

declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;

    const src: string;
    export default src;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.sass" {
    const classes: { [key: string]: string };
    export default classes;
}
// @ts-ignore
// eslint-disable-next-line
declare const shallow: any;
// @ts-ignore
// eslint-disable-next-line
declare const mount: any;
interface HeaderProps {
    isOpen: boolean;
    toggle: () => void;
    isFixed: boolean;
}
type IconTypes = "Logo" | "Facebook" | "Back";

declare module "react-photo-gallery" {
    type PhotoProps<CustomPhotoProps extends object = {}> = {
        /**
         * the img src attribute value of the image
         */
        src: string;
        /**
         * srcSet attribute of the image
         */
        srcSet?: string | string[];
        /**
         * sizes attribute of the image
         */
        sizes?: string | string[];
        /**
         *  original width of the gallery image (only used for calculating aspect ratio)
         */
        fallback: string;
        width: number;
        /**
         *  original height of the gallery image (only used for calculating aspect ratio)
         */
        height: number;
        /**
         *  alt text of the gallery image
         */
        alt?: string;
        /**
         * key to be used on component
         */
        key?: string;
    } & CustomPhotoProps;

    export type renderImageClickHandler = (
        event: React.MouseEvent,
        photo: object & {
            index: number;
        }
    ) => void;

    /**
     * If you're passing a function component to renderImage you will receive back these props:
     */
    export interface RenderImageProps<CustomPhotoProps extends object = {}> {
        /**
         * margin prop optionally passed into Gallery by user
         */
        margin?: string;
        /**
         * the index of the photo within the Gallery
         */
        index: number;
        /**
         * the individual object passed into Gallery's
         * photos array prop, with all the same props except recalculated height and width
         */
        photo: PhotoProps<CustomPhotoProps>;

        onClick: renderImageClickHandler | null;
        direction: "row" | "column";
        top?: number;
        left?: number;
    }
    export type GalleryI<
        CustomPhotoProps extends object = {}
    > = React.ComponentClass<GalleryProps<CustomPhotoProps>>;

    declare const Gallery: GalleryI;

    export default Gallery;
}
