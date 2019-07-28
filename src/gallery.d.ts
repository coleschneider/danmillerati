/**
 * Image load Action Types
 *
 * @enum {number}
 */
declare enum ImageStatusActionTypes {
    IMAGE_LOADED = "IMAGE_LOADED"
}
/**
 * Carousel Action Types
 *
 * @enum {number}
 */
declare enum CarouselActionTypes {
    SET_IMAGE = "SET_IMAGE",
    NEXT_IMAGE = "NEXT_IMAGE",
    PREV_IMAGE = "PREV_IMAGE"
}

/**
 * Lightbox Action Types
 *
 * @enum {number}
 */
declare enum LightboxActionTypes {
    OPEN_LIGHTBOX = "OPEN_LIGHTBOX",
    CLOSE_LIGHTBOX = "CLOSE_LIGHTBOX",
    OPEN_FULLSCREEN = "OPEN_FULLSCREEN",
    CLOSE_FULLSCREEN = "CLOSE_FULLSCREEN"
}

/**
 * Action creator that takes in an image name
 *
 * @interface ImageLoaded
 */
interface ImageLoaded<T extends ImageName> {
    type: ImageStatusActionTypes.IMAGE_LOADED;
    payload: {
        name: T;
    };
}

/**
 * Action creator that takes in an activeImage index
 *
 * @interface SetImage
 */
interface SetImage {
    type: CarouselActionTypes.SET_IMAGE;
    payload: {
        activeImage: number;
    };
}

/**
 * Go to the next image if it's loaded in the browser's cache
 *
 * @interface NextImage
 */
interface NextImage {
    type: CarouselActionTypes.NEXT_IMAGE;
}
/**
 * Go to the previous image
 *
 * @interface PrevImage
 */
interface PrevImage {
    type: CarouselActionTypes.PREV_IMAGE;
}

/**
 * Open the lightbox modal
 *
 * @interface OpenLightbox
 */
interface OpenLightbox {
    type: LightboxActionTypes.OPEN_LIGHTBOX;
}

/**
 * Close the lighbox modal
 *
 * @interface CloseLightbox
 */
interface CloseLightbox {
    type: LightboxActionTypes.CLOSE_LIGHTBOX;
}

/**
 * Make the lightbox modal fullscreen
 *
 * @interface OpenFullscreen
 */
interface OpenFullscreen {
    type: LightboxActionTypes.OPEN_FULLSCREEN;
}

/**
 * Close out of the lightbox fullscreen mode
 *
 * @interface CloseFullscreen
 */
interface CloseFullscreen {
    type: LightboxActionTypes.CLOSE_FULLSCREEN;
}
type ImageActions = ImageLoaded;
type LightboxActions =
    | OpenLightbox
    | CloseLightbox
    | OpenFullscreen
    | CloseFullscreen;
type CarouselActions = SetImage | NextImage | PrevImage;
type GalleryActions = ImageActions | LightboxActions | CarouselActions;
type ImageStatus = FromIndex;

interface Lightbox {
    isOpen: boolean;
    isFullscreen: boolean;
}

type Carousel = number;
interface GalleryState {
    carousel: Carousel;
    imageStatus: ImageStatus;
    lightbox: Lightbox;
}
type voidFn = () => void;
/**
 * return type of the 'useGallery' hook
 *
 * @interface UseGallery
 * @extends {GalleryState}
 */
interface UseGallery extends GalleryState {
    openLightbox: voidFn;
    closeLightbox: voidFn;
    openFullscreen: voidFn;
    getImageStatus: (name: ImageName) => boolean;
    closeFullscreen: voidFn;
    goPrev: () => Promise<void>;
    goNext: () => Promise<void>;
    loadImage: (name: ImageName) => void;
    imageLoading: (name: ImageName) => void;
    setImage: (activeImage: number) => void;
}
